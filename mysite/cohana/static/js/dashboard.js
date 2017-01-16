$(document).ready(function () {
  var sessionAvg = echarts.init(document.getElementById('session-avg'));
  var sessionAvg_option = {
  tooltip: {
        trigger: 'axis'
    },
    legend: {
        right: '3%',
        top: '3%',
        x: 'right',
        y: 'top',
        data:['Average Session Length']
    },
    toolbox:{
        show:true,
        left: '1%',
        top: '1%',
        x : 'left',
        y : 'top',
        feature: {
            restore:{
                title: 'Restore'
            },
            saveAsImage:{
                title: 'Save'
            },
            dataView: {
                title: 'Dataview',
                lang: ['DataView', 'Close', 'Refresh']
            },
            dataZoom: {
                yAxisIndex: 'none',
                title:
                {
                    zoom: 'Zoom',
                    back: 'Back'
                }
            },
            magicType: {
                type: ['bar', 'line'],
                title:
                {
                    'bar' : 'Change To Bar Chart',
                    'line' : 'Change To Line Chart'
                }
            }        }
    },
    grid: {
      left: 'left',
      containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: sessionAvg_xlabel 
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: 'Average Session Length',
        type: 'bar',
        smooth: true,
        data: sessionAvg_data 
    }] 
  };

  sessionAvg.setOption(sessionAvg_option);

  var colors = ['#bdc3c7', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
                '#f1c40f', '#e67e22', '#e74c3c', '#2980b9', '#95a5a6',
                '#1abc9c', '#c0392b'];

  var dau = echarts.init(document.getElementById('dau'));  
  var dau_option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'right',
        y: 'center',
        data:['# of users']
    },
    toolbox:{
        show:true,
        x : 'left',
        y : 'top',
        feature: {
            restore:{
                title: 'Restore'
            },
            saveAsImage:{
                title: 'Save'
            },
            dataView: {
                title: 'Dataview',
                lang: ['DataView', 'Close', 'Refresh']
            },
            dataZoom: {
                yAxisIndex: 'none',
                title:
                {
                    zoom: 'Zoom',
                    back: 'Back'
                }
            },
            magicType: {
                type: ['bar', 'line'],
                title:
                {
                    'bar' : 'Change To Bar Chart',
                    'line' : 'Change To Line Chart'
                }
            }        }
    },
    grid: {
      left: 'left',
      containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dau_xlabel 
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '# of users',
        type: 'line',
        smooth: true,
        data: dau_data 
    }] 
  };
  dau.setOption(dau_option);

  var map = echarts.init(document.getElementById('map'));  
  var map_option = {
        title: {
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            restore: {
                title: 'Restore'
            },
            dataView: {
                title: 'DataView'
            },
            saveAsImage: {
                title: 'Save'
            }
        }
    },
    visualMap: {
        min: 0,
        max: 4000,
        text:['High','Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['lightskyblue','yellow', 'orangered']
        }
    },
    series: [
        {
            name: 'User distribution on earth',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data: map_data
        } ]
    }
    map.setOption(map_option);
  for (var i = 0; i < role_data.length; ++i) {
    role_data[i].itemStyle = {normal: {color: colors[i]}};
  }

  var role = echarts.init(document.getElementById('role'));  

  function convert_to_bar_button(chart) {
      return {
          show: true,
          title: 'Change to Bar Chart',
          icon: 'image:///static/images/pie_bar.png',
          onclick: function () {
              var oldOption = chart.getOption();
              var newOption = jQuery.extend(true, {}, oldOption);

              newOption.toolbox[0].feature.myConvert.title = 'Change to Pie';
              newOption.toolbox[0].feature.myConvert.onclick = function() { 
                 chart.clear();
                 chart.setOption(oldOption);
              };

              var series_data = newOption.series[0].data;
              var bar_category = series_data.map(function(x){return x.name});
              var bar_value = series_data.map(function(x){
                  return {
                      value: x.value,
                      itemStyle: x.itemStyle
                  };
              });

              newOption.grid= {
                left: 'left',
                containLabel: true
              };
              newOption.xAxis = {
                  type: 'category',
                  data: bar_category,
                  axisLabel: {
                      interval: 0,
                  },
              };
              newOption.yAxis = {
                  type: 'value',
              };
              newOption.series = [{
                  type:'bar',
                  data: bar_value,
              }];
              chart.clear();
              chart.setOption(newOption);
          }
      }
  }

  var role_option = {
    legend: {
      orient : 'vertical',
      x : 'right',
      y: 'center',
      data: role_legend
     },
        toolbox:{
        show:true,
        x : 'left',
        y : 'top',
        feature:{
           myConvert: convert_to_bar_button(role),
           restore:{
                title: 'Restore'
            },
            dataView: {
                title: 'DataView',
                lang: ['DataView', 'Close', 'Refresh']
            },
            
            saveAsImage:{
                title: 'Save'
            }
        }
    },
        series : [
        {
            name: 'user composition',
            type: 'pie',
            radius: ['0%','75%'],
            data: role_data,
            label: {
                normal: {
                    show:false,
                }
            },
            labelline: {
                normal: {
                    show: false,
                }
            }
        }
    ],
    itemstyle: {
        normal: {
        shadowblur: 200,
        shadowcolor: 'rgba(0, 0, 0, 0.5)'
        }
    }
  };

  role.setOption(role_option);
  var testing = role.getOption();

});
