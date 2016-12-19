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
    var correlation_overview_background = $('#correlation_overview_background');

    var xLabels = chart_data.xLabels;
    var yLabels = chart_data.series.map(function(cell){return cell.yLabel});
    var raw_data = chart_data.series.map(function(cell){return cell.values});
    var series_value = gen_data_cell(raw_data);

    var max_val= series_value.reduce(function (x, y) {
        return (x[2] > y[2]) ? x[2] : y[2];
    });

    max_val *= 1.6;

    var yAxisLabelLength = 400;
    var option = {
        animation: true,
        grid: {
            left: yAxisLabelLength,
        },
        tooltip: {
            show: true,
            confine: true,
            triggerOn: 'none',
            formatter: function (params, ticket, callback) {
                var bg_width = document.getElementById('correlation_overview').offsetWidth*0.8;
                $.getJSON('/cohana/innerchart?row='+params.value[1]+'&col='+params.value[0],
                    function(data) {
                        var option = {
                            title: {
                                text: 'Correlation between Detailed Behaviors and Retention',
                                left: 'center',
                                textStyle: {
                                    fontSize: 12,
                                },
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
                                axisLabel: {
                                    textStyle: {
                                      fontSize: 15,
                                    },
                                },
                                boundaryGap: [0, 0.01]
                            },
                            yAxis: {
                                nameLocation: 'middle',
                                nameGap: 60,
                                nameTextStyle: {
                                    fontSize: 12,
                                },
                                type: 'category',
                                axisLabel: {
                                    interval: 0,
                                    textStyle: {
                                      fontSize: 15,
                                    },
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
                        var div_height = data.ydata.length * 22 + 100;
                        div.style.height = div_height + 'px';
                        div.style.width = bg_width * 0.55 +'px';
                        var inner_chart = echarts.init(div);
                        inner_chart.setOption(option);});

                var res = '<div class="container row" style="width:' + bg_width + 'px; margin:0 auto; background-color: white">';
                res += '<div id="correlation_details_background" class="col-sm-7" style="overflow-y: scroll;height:500px; margin: 10px auto; padding-top: 30px;">';
                res += '<div id="correlation_details">';
                res += '</div></div>';

                res += '<div id="description" class="col-sm-5" style="height: 500px; padding-top: 30px; white-space: pre-wrap;">';
                res += '<p style="color: black; font-size: 18px;">';
                res += 'For <strong>new users</strong>, how well does  performing each <strong>combination of ';
                res += 'two behaviors</strong> within the <strong>1st week</strong> of first use predict <strong>2nd week retention</strong>?';
                res += '</p>';
                res += '<p style="color: black; font-size: 16px;"><strong>Pearson Correlation: </strong></p>';
		res += '<br/>';
                res += '<img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f76ccfa7c2ed7f5b085115086107bbe25d329cec" ';
                res += 'style="margin-left: 50px; width: 50%; heigth:50%;" />';

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

    function scroll_top(element, top, speed) {
        element.animate({
            scrollTop: top
        }, speed);
    }

    var sorted_col = -1;
    var descending = true;
    var last_value = [-1,-1];
    var last_doc_scroll = 0;
    var last_chart_scroll = 0;
    var last_index = -1;
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
        else if (params.componentType === "series") {
            if (params.data[0] == last_value[0] && params.data[1] == last_value[1]){
                last_value = [-1, -1];
                scroll_top(correlation_overview_background, last_chart_scroll - $(document).scrollTop() + last_doc_scroll, 500);
                
                this.dispatchAction({
                      type: 'hideTip'
                });
                this.dispatchAction({
                      type: 'downplay',
                      dataIndex: params.dataIndex
                });
            } else {
                last_chart_scroll = correlation_overview_background.scrollTop();
                last_doc_scroll = $(document).scrollTop();
                last_value[0] = params.data[0];
                last_value[1] = params.data[1];

                var scroll_len = params.event.target.shape.y;
                var height = params.event.target.shape.height;
                var doc_scroll_offset = Math.max(0, $(document).scrollTop() - correlation_overview_background.offset().top);
                
                scroll_top(correlation_overview_background, scroll_len - doc_scroll_offset, 500);
                // correlation_overview_background.animate({scrollTop: scroll_len - doc_scroll_offset}, 1000);
                this.dispatchAction({
                      type: 'showTip',
                      dataIndex: params.dataIndex,
                      //position: [Math.max(correlation_overview_background.width()/2, correlation_overview_background.scrollLeft()), scroll_len + height]
                      position: ['25%',scroll_len+height]
                });
                this.dispatchAction({
                    type: 'downplay',
                    dataIndex: last_index
                });
                this.dispatchAction({
                      type: 'highlight',
                      dataIndex: params.dataIndex
                });
                var last_index = params.dataIndex;
            }
        }
    });

});
});
