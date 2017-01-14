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

    $("#event-num").popover({
    placement:"bottom", 
    trigger:'focus',
    html: true,
    title:"Select # of events",
    content: '<div id="rangeslider1"> \
            <input data-slider-id="eventslider"  \
            id="event-slider"\
            type="text"\
            data-slider-min="1"\
            data-slider-max="20"\
            data-slider-step="1"\
            data-slider-value="3"\
            data-slider-tooltip="hide"/>\
        </div>',
    template: '<div class="popover" style="margin-left:-30px; width:inherit; height:inherit" role="tooltip">\
    <div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })
    var e_slider;
    $("#event-num").click(function(e){
        var value = $('#event-num').data("value")
        $('#event-slider').slider({value:value||3});
        $('#event-slider').on('slide', function(slideEvt) {
            $('#event-num').text(slideEvt.value);
            $("#event-num").data("value", slideEvt.value)
        }); 
    });

    $("#day-num").popover({
    placement:"bottom", 
    trigger:'focus',
    html: true,
    title:"Select # of events",
    content: '<div id="rangeslider2"> \
            <input data-slider-id="eventslider"  \
            id="day-slider"\
            type="text"\
            data-slider-min="1"\
            data-slider-max="32"\
            data-slider-step="1"\
            data-slider-value="7"\
            data-slider-tooltip="hide"/>\
        </div>',
    template: '<div class="popover" style="margin-left:-30px; width:inherit; height:inherit" role="tooltip">\
    <div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })
    var d_slider;
    $("#day-num").click(function(e){
        var value = $('#day-num').data("value")
        $('#day-slider').slider({value: value||7});
        $('#day-slider').on('slide', function(slideEvt) {
            $('#day-num').text(slideEvt.value);
            $("#day-num").data("value", slideEvt.value)
        }); 
    });
});
