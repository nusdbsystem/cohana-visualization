$(document).ready(function () {
  $(".loyalcharts").hide();
  var loyaltyRetention_option = {
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
        max: 30,
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'line',
        smooth: true
    }] 
 };


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

    $("#detect").click(function(e){
        var eventnum = $("#event-num").text();
        var daynum = $("#day-num").text();
        console.log(eventnum);
        console.log(daynum);
        $.get("/cohana/sample/loyaltyquery?events="+eventnum+"&time="+daynum,function(data){
            console.log($(".loyalcharts").text());
            $(".loyalcharts").show();

            var loyaltyRetention = echarts.init(document.getElementById('loyal_user_retention'));
            loyaltyRetention_option['series'][0]['data'] = data['loyaltyRetentionData']
            loyaltyRetention.setOption(loyaltyRetention_option);

            var loyaltyRetention2 = echarts.init(document.getElementById('loyal_user_retention2'));
            loyaltyRetention2.setOption(loyaltyRetention_option);
        });
    });
});
