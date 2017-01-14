$(function(){
  var ageby_chart = echarts.init(document.getElementById('agebyexchart'));
  var legend_data = []
  for (var i in series_data) {
    legend_data.push(series_data[i].name);
  }
  var xAxis_data = []
  for (var i = 1; i <= series_data[0].data.length; ++i) {
    xAxis_data.push(''+i);
  }

  var ageby_option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        top: '3%',
        right: '3%',
        data: legend_data
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
            magicType: {
                show:true,
                type: ['stack', 'bar'],
                title: {
                    'stack' : 'Change to Line Chart',
                    'bar' : 'Change to Bar Chart'
                }
            },
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: xAxis_data
    }],
    yAxis: [{
        type : 'value',
        data:[{
            textStyle:{
                align: 'center'
        }}]
    }],
    series: series_data
  }
  console.log(ageby_option);
  ageby_chart.setOption(ageby_option);
})
