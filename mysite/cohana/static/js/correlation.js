$(document).ready(function () {
$.getJSON('/cohana/outerchart', function(chart_data) {

    function gen_data_cell(data) {
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            for (var j = 0; j < data[i].length; ++j) {
               res.push([j, i, data[i][j]]); 
            }
        }
        return res;
    }
    function sort_series_on_col(series, col, descending) {
        return series.sort(function(a, b) { 
            if (descending)
                return b.values[col] - a.values[col];
            else
                return a.values[col] - b.values[col];
        });
    }

    var correlation_overview_chart = echarts.init(document.getElementById('correlation_overview'));

    var xLabels = chart_data.xLabels;
    var yLabels = chart_data.series.map(function(cell){return cell.yLabel});
    var raw_data = chart_data.series.map(function(cell){return cell.values});
    var series_value = gen_data_cell(raw_data);

    max_val= series_value.reduce(function (x, y) {
        return (x[2] > y[2]) ? x[2] : y[2];
    });

    var yAxisLabelLength = 400;
    var option = {
        animation: true,
        grid: {
            left: yAxisLabelLength,
        },
        tooltip: {
            show: true,
            confine: true,
            triggerOn: 'click',
            position: [1, 1],
            formatter: function (params, ticket, callback) {
                var bg_width = document.getElementById('correlation_overview').offsetWidth*0.6;
                $.getJSON('/cohana/innerchart?row='+params.value[1]+'&col='+params.value[0],
                    function(data) {
                        var option = {
                            title: {
                                text: 'Correlation',
                            },
                            grid: {
                                left: 80,
                            },
                            backgroundColor: 'rgb(255, 255, 255)',
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            xAxis: {
                                position: 'top',
                                type: 'value',
                                boundaryGap: [0, 0.01]
                            },
                            yAxis: {
                                nameLocation: 'middle',
                                nameGap: 50,
                                type: 'category',
                                axisLabel: {
                                    interval: 0,
                                },
                            },
                            series: [
                                {
                                    type: 'bar',
                                },
                            ]
                        };
                        option.yAxis.name=data.ytitle;
                        option.yAxis.data=data.ydata;
                        option.series[0].data=data.xdata;
                        var div = document.getElementById('correlation_details');
                        var div_height = data.ydata.length * 18 + 100;
                        div.style.height = div_height + 'px';
                        var inner_chart = echarts.init(div);
                        inner_chart.setOption(option);});
                var res = '<div id="correlation_details_background" style="';
                res += 'max-height: 500px; width: ' + (bg_width+15) + 'px;';
                res += 'margin: 0 auto; overflow-y: scroll;">';
                res += '<div id="correlation_details" style="height: 600px; width:'+ bg_width + 'px; margin: 0 auto">';
                res += 'Loading...';
                res += '</div></div>';

                return res;
            },
        },
        xAxis: {
            position: 'top',
            type: 'category',
            data: xLabels,
            triggerEvent: true,
            axisLabel: {
                interval: 0,
                textStyle: {
                   fontSize: 15,
                }
            },
            splitArea: {
                show: true
            }
        },
        yAxis: {
            inverse: true,
            type: 'category',
            data: yLabels,
            splitArea: {
                show: true,
            },
            z: 2,
            axisLabel: {
                margin: -yAxisLabelLength,
                interval: 0,
                inside: true,
                textStyle: {
                   fontSize: 18,
                }
            },
            axisTick: {
                length: yAxisLabelLength,
            },
        },
        visualMap: {
            min: 0,
            max: max_val,
            calculable: true,
            show: false,
        },
        series: [{
            type: 'heatmap',
            data: series_value,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    correlation_overview_chart.setOption(option);

    function get_col(xLabels, label) {
        for (var i = 0; i < xLabels.length; ++i) {
            if (xLabels[i] == label) return i;
        }
        return 0;
    }

    var sorted_col = -1;
    var descending = true;
    correlation_overview_chart.on('click', function (params) {
        console.log(params);
        if (params.componentType == 'xAxis') {
            var series = chart_data.series;
            var col = get_col(xLabels, params.value);
            if (sorted_col != col) {
                sorted_col = col;
                descending = true;
            } else {
                descending = !descending;
            }
            series = sort_series_on_col(series, col, descending);
            var yLabels = series.map(function(cell){return cell.yLabel});
            var raw_data = series.map(function(cell){return cell.values});
            var series_value = gen_data_cell(raw_data);
            option.yAxis.data = yLabels;
            option.series[0].data = series_value;
            correlation_overview_chart.setOption(option);
        }
    });

});
});
