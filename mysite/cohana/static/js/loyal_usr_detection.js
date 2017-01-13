$(document).ready(function () {
  var loyaltyStack = echarts.init(document.getElementById('loyal_usr_stack'));
  var loyaltyStack_option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        top: '3%',
        right: '3%',
        data:loyaltyStack_legend
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
            data :loyaltyStack_xlabel
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
            name:loyaltyStack_legend[0],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:loyaltyStack_data[0]
        },
        {
            name:loyaltyStack_legend[1],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:loyaltyStack_data[1]
        },
        {
            name:loyaltyStack_legend[2],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:loyaltyStack_data[2]
        },
        {
            name:loyaltyStack_legend[3],
            type:'line',
            stack: 'total',
            areaStyle: {normal: {}},
            data:loyaltyStack_data[3]
        }
       
    ]
  };

  loyaltyStack.setOption(loyaltyStack_option);

	$("#event-slider").slider()
	$("#event-slider").on("slide", function(slideEvt) {
		$("#event-num").text(slideEvt.value);
	});	
	$("#day-slider").slider()
	$("#day-slider").on("slide", function(slideEvt) {
		$("#day-num").text(slideEvt.value);
	});
	// $("#day-slider").on("formatter", function(slideEvt) {
	// 	$("#day-num").text(slideEvt.value);
	// });
});
