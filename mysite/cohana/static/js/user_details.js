$(document).ready(function () {

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

              newOption.grid = {
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

  var colors = ['#bdc3c7', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
                '#f1c40f', '#e67e22', '#e74c3c', '#2980b9', '#95a5a6',
                '#1abc9c', '#c0392b'];
  for (var i = 0; i < continent_data.length; ++i) {
    continent_data[i].itemStyle = {normal: {color: colors[i]}};
  }
  var continent = echarts.init(document.getElementById('continent'));  
  $.getJSON('cohana/profiling?by=continent',
    function(continent_data){
        console.log(continent_data);
  var continent_option = {
    legend: {
      orient : 'vertical',
      x : 'right',
      y: 'center',
     // data: continent_legend
      data: continent_data.Legend
     },
    toolbox:{
        show:true,
        x : 'left',
        y : 'top',
        feature:{
            
           myConvert: convert_to_bar_button(continent),
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
            //data:continent_data,
            data:continent_data.Data,
            label: {
                normal: {
                    show:false,
                    textstyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelline: {
                normal: {
                    show: false,
                    linestyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
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

  user_composition.setOption(continent_option);

    });
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
        min: 000,
        max: 5000,
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

  $('#by-continent').on('click', function(){
    user_composition.clear();
    user_composition.setOption(continent_option);
    $('#by').text("By Continent");

  });

  $('#by-role').on('click', function(){
    user_composition.clear();
    user_composition.setOption(role_option);
    $('#by').text("By Role");
  });

});
