$(document).ready(function () {
  var events = echarts.init(document.getElementById('events'));  
  var events_option = {
    legend: {
      orient : 'horizontal',
      x : 'center',
      y: 'bottom',
      top: '75%',
      bottom: '10px',
      data: event_legend 
     },
    toolbox:{
        show:true,
        left: '1%',
        top: '1%',
        x : 'left',
        y : 'top',
        feature:{
            
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
            center: ['50%','40%'],
            radius: ['0%','60%'],
            data:event_data,
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

  events.setOption(events_option);

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

  var sessionSca = echarts.init(document.getElementById('session-sca'));
  var sessionSca_option={
      legend: {
        top: '3%',
        right: '3%',
        data: sessionSca_legend 
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'log',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    toolbox:{
        show:true,
        left: '1%',
        top: '1%',
        x : 'left',
        y : 'top',
        feature:{
            
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
    series: [{
        name: sessionSca_legend[0],
        data: sessionSca_data[0],
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2] / 1000);
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: sessionSca_legend[1],
        data: sessionSca_data[1],
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2] / 1000);
        },
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        }
    }]
  };

  sessionSca.setOption(sessionSca_option);

  var eventStack = echarts.init(document.getElementById('event-stack'));
  var eventStack_option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        top: '3%',
        right: '3%',
        data:eventStack_legend
    },
    toolbox: {
        left: '1%',
        top: '1%',
        feature: {
           restore:{
                title: 'Restore'
            },
            dataView: {
                title: 'DataView',
                lang: ['DataView', 'Close', 'Refresh']
            },
            
            saveAsImage:{
                title: 'Save'
            },
            magicType: {show:true,
            type: ['stack', 'bar'],
            title:
            {
                'stack' : 'Change to Line Chart',
                'bar' : 'Change to Bar Chart'
            } 
            },
        }
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data :eventStack_xlabel
        }
    ],
    yAxis : [
        {
            type : 'value',
            data:[{
              textStyle:{
                  align: 'center'
              }  
            }]
        }
    ],
    series : [
        {
            name:eventStack_legend[0],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:eventStack_data[0]
        },
        {
            name:eventStack_legend[1],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:eventStack_data[1]
        },
        {
            name:eventStack_legend[2],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:eventStack_data[2]
        },
        {
            name:eventStack_legend[3],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:eventStack_data[3]
        }
       
    ]
  };

  eventStack.setOption(eventStack_option);
});
