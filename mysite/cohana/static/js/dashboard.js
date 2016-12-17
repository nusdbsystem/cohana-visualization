$(document).ready(function () {
  var continent = echarts.init(document.getElementById('continent'));  
  var continent_option = {
    legend: {
      orient : 'vertical',
      x : 'right',
      y: 'center',
      data: continent_legend
     },
    toolbox:{
        show:true,
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
            radius: ['0%','75%'],
            data:continent_data,
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

  continent.setOption(continent_option);

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
            data:role_data,
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

  role.setOption(role_option);

});
