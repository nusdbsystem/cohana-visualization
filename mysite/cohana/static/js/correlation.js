$(document).ready(function () {
    var popover;

  	function renderSecond(e){
        var t = e.target;
        // console.log(e);
        if(popover){
            popover.popover('destroy');
        }
        var col = e.point.x;
        var row = e.point.y;
        popover = $(t).popover({
            html:true, 
            trigger:'focus', 
            placement:'bottom', 
            title:"<b>Example popover</b> - title", 
            content:'<div id="container3" style="height: auto; min-width: auto; margin: 0 auto"></div>', 
            container:'body'
        }).on('shown.bs.popover', function () {
            $.getJSON('/cohana/innerchart?row='+row+'&col='+col, function(data) {
                $('#container3').highcharts(data);
            });
        }).popover('show');
    }

    Highcharts.chart('container2', {
        credits: {
          enabled: false,
        },

        chart: {
          type: 'heatmap',
          height: 6000,
          marginTop: 80,
          marginBottom: 40,
          plotBorderWidth: 1,
          font: 'Helvetica'
        },


        title: {
          text: 'Retention Rate in One Week',
          style:{
            fontSize: '28px'
          }
        },

        xAxis: {
          labels: {
            style: {
              fontSize: '15px'
            }
          },
          opposite: true,
          categories: ['1 day', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days']
        },

        yAxis: {
          reversed: true,
          categories: [
            'launch+fight',
            'inventory+fight',
            'inventory+launch',
            'inventory.inventory+fight',
            'inventory.inventory+launch',
            'inventory.inventory+inventory',
            'dungeon+fight',
            'dungeon+launch',
            'dungeon+inventory',
            'dungeon+inventory.inventory',
            'dungeonstats+fight',
            'dungeonstats+launch',
            'dungeonstats+inventory',
            'dungeonstats+inventory.inventory',
            'dungeonstats+dungeon',
            'selectdungeonspackage+fight',
            'selectdungeonspackage+launch',
            'selectdungeonspackage+inventory',
            'selectdungeonspackage+inventory.inventory',
            'selectdungeonspackage+dungeon',
            'selectdungeonspackage+dungeonstats',
            'selectdungeon+fight',
            'selectdungeon+launch',
            'selectdungeon+inventory',
            'selectdungeon+inventory.inventory',
            'selectdungeon+dungeon',
            'selectdungeon+dungeonstats',
            'selectdungeon+selectdungeonspackage',
            'dungeonmenu+fight',
            'dungeonmenu+launch',
            'dungeonmenu+inventory',
            'dungeonmenu+inventory.inventory',
            'dungeonmenu+dungeon',
            'dungeonmenu+dungeonstats',
            'dungeonmenu+selectdungeonspackage',
            'dungeonmenu+selectdungeon',
            'inventory.shop+fight',
            'inventory.shop+launch',
            'inventory.shop+inventory',
            'inventory.shop+inventory.inventory',
            'inventory.shop+dungeon',
            'inventory.shop+dungeonstats',
            'inventory.shop+selectdungeonspackage',
            'inventory.shop+selectdungeon',
            'inventory.shop+dungeonmenu',
            'inventory.repair+fight',
            'inventory.repair+launch',
            'inventory.repair+inventory',
            'inventory.repair+inventory.inventory',
            'inventory.repair+dungeon',
            'inventory.repair+dungeonstats',
            'inventory.repair+selectdungeonspackage',
            'inventory.repair+selectdungeon',
            'inventory.repair+dungeonmenu',
            'inventory.repair+inventory.shop',
            'achievementspopup+fight',
            'achievementspopup+launch',
            'achievementspopup+inventory',
            'achievementspopup+inventory.inventory',
            'achievementspopup+dungeon',
            'achievementspopup+dungeonstats',
            'achievementspopup+selectdungeonspackage',
            'achievementspopup+selectdungeon',
            'achievementspopup+dungeonmenu',
            'achievementspopup+inventory.shop',
            'achievementspopup+inventory.repair',
            'achievements+fight',
            'achievements+launch',
            'achievements+inventory',
            'achievements+inventory.inventory',
            'achievements+dungeon',
            'achievements+dungeonstats',
            'achievements+selectdungeonspackage',
            'achievements+selectdungeon',
            'achievements+dungeonmenu',
            'achievements+inventory.shop',
            'achievements+inventory.repair',
            'achievements+achievementspopup',
            'inventorychest+fight',
            'inventorychest+launch',
            'inventorychest+inventory',
            'inventorychest+inventory.inventory',
            'inventorychest+dungeon',
            'inventorychest+dungeonstats',
            'inventorychest+selectdungeonspackage',
            'inventorychest+selectdungeon',
            'inventorychest+dungeonmenu',
            'inventorychest+inventory.shop',
            'inventorychest+inventory.repair',
            'inventorychest+achievementspopup',
            'inventorychest+achievements',
            'dungeonpackagestats+fight',
            'dungeonpackagestats+launch',
            'dungeonpackagestats+inventory',
            'dungeonpackagestats+inventory.inventory',
            'dungeonpackagestats+dungeon',
            'dungeonpackagestats+dungeonstats',
            'dungeonpackagestats+selectdungeonspackage',
            'dungeonpackagestats+selectdungeon',
            'dungeonpackagestats+dungeonmenu',
            'dungeonpackagestats+inventory.shop',
            'dungeonpackagestats+inventory.repair',
            'dungeonpackagestats+achievementspopup',
            'dungeonpackagestats+achievements',
            'dungeonpackagestats+inventorychest',
            'PopupDivineIntervention+fight',
            'PopupDivineIntervention+launch',
            'PopupDivineIntervention+inventory',
            'PopupDivineIntervention+inventory.inventory',
            'PopupDivineIntervention+dungeon',
            'PopupDivineIntervention+dungeonstats',
            'PopupDivineIntervention+selectdungeonspackage',
            'PopupDivineIntervention+selectdungeon',
            'PopupDivineIntervention+dungeonmenu',
            'PopupDivineIntervention+inventory.shop',
            'PopupDivineIntervention+inventory.repair',
            'PopupDivineIntervention+achievementspopup',
            'PopupDivineIntervention+achievements',
            'PopupDivineIntervention+inventorychest',
            'PopupDivineIntervention+dungeonpackagestats'
          ],
          title: null,
          labels: {
            style: {
              fontSize: '15px'
            },
            align: 'left',
            x: -350,
          },
          tickColor: '#7cb5ec',
          tickLength: 350,
          tickWidth: 1,
        },

        colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
          enabled: false,
        },
    		plotOptions: {
          heatmap: {
            dataLabels: {
              formatter: function() {
                return this.point.value;
              }
            }
          },
          series: {
            events: {
              click: renderSecond
            }
          }
        },
      
      series: [{
        "data": [[0, 0, 0.109], [1, 0, 0.123], [2, 0, 0.13], [3, 0, 0.134], [4, 0, 0.136], [5, 0, 0.138], [6, 0, 0.139], [0, 1, 0.157], [1, 1, 0.177], [2, 1, 0.187], [3, 1, 0.193], [4, 1, 0.196], [5, 1, 0.198], [6, 1, 0.2], [0, 2, 0.143], [1, 2, 0.157], [2, 2, 0.164], [3, 2, 0.167], [4, 2, 0.17], [5, 2, 0.171], [6, 2, 0.172], [0, 3, 0.169], [1, 3, 0.191], [2, 3, 0.203], [3, 3, 0.21], [4, 3, 0.214], [5, 3, 0.216], [6, 3, 0.218], [0, 4, 0.161], [1, 4, 0.179], [2, 4, 0.188], [3, 4, 0.194], [4, 4, 0.197], [5, 4, 0.198], [6, 4, 0.201], [0, 5, 0.166], [1, 5, 0.184], [2, 5, 0.193], [3, 5, 0.198], [4, 5, 0.201], [5, 5, 0.202], [6, 5, 0.205], [0, 6, 0.107], [1, 6, 0.122], [2, 6, 0.13], [3, 6, 0.134], [4, 6, 0.137], [5, 6, 0.139], [6, 6, 0.14], [0, 7, 0.092], [1, 7, 0.109], [2, 7, 0.116], [3, 7, 0.12], [4, 7, 0.122], [5, 7, 0.123], [6, 7, 0.124], [0, 8, 0.15], [1, 8, 0.171], [2, 8, 0.181], [3, 8, 0.186], [4, 8, 0.19], [5, 8, 0.191], [6, 8, 0.193], [0, 9, 0.164], [1, 9, 0.187], [2, 9, 0.198], [3, 9, 0.205], [4, 9, 0.208], [5, 9, 0.21], [6, 9, 0.213], [0, 10, 0.185], [1, 10, 0.226], [2, 10, 0.245], [3, 10, 0.255], [4, 10, 0.262], [5, 10, 0.266], [6, 10, 0.27], [0, 11, 0.185], [1, 11, 0.226], [2, 11, 0.245], [3, 11, 0.255], [4, 11, 0.262], [5, 11, 0.266], [6, 11, 0.27], [0, 12, 0.189], [1, 12, 0.23], [2, 12, 0.25], [3, 12, 0.26], [4, 12, 0.267], [5, 12, 0.271], [6, 12, 0.276], [0, 13, 0.193], [1, 13, 0.235], [2, 13, 0.256], [3, 13, 0.267], [4, 13, 0.273], [5, 13, 0.278], [6, 13, 0.282], [0, 14, 0.185], [1, 14, 0.226], [2, 14, 0.245], [3, 14, 0.255], [4, 14, 0.262], [5, 14, 0.266], [6, 14, 0.27], [0, 15, 0.105], [1, 15, 0.121], [2, 15, 0.129], [3, 15, 0.134], [4, 15, 0.136], [5, 15, 0.138], [6, 15, 0.14], [0, 16, 0.085], [1, 16, 0.099], [2, 16, 0.104], [3, 16, 0.107], [4, 16, 0.108], [5, 16, 0.11], [6, 16, 0.112], [0, 17, 0.145], [1, 17, 0.163], [2, 17, 0.172], [3, 17, 0.177], [4, 17, 0.18], [5, 17, 0.182], [6, 17, 0.184], [0, 18, 0.161], [1, 18, 0.182], [2, 18, 0.192], [3, 18, 0.198], [4, 18, 0.202], [5, 18, 0.204], [6, 18, 0.207], [0, 19, 0.093], [1, 19, 0.109], [2, 19, 0.116], [3, 19, 0.12], [4, 19, 0.123], [5, 19, 0.124], [6, 19, 0.126], [0, 20, 0.185], [1, 20, 0.226], [2, 20, 0.245], [3, 20, 0.255], [4, 20, 0.262], [5, 20, 0.266], [6, 20, 0.27], [0, 21, 0.106], [1, 21, 0.122], [2, 21, 0.129], [3, 21, 0.134], [4, 21, 0.136], [5, 21, 0.139], [6, 21, 0.14], [0, 22, 0.092], [1, 22, 0.107], [2, 22, 0.113], [3, 22, 0.117], [4, 22, 0.119], [5, 22, 0.121], [6, 22, 0.122], [0, 23, 0.15], [1, 23, 0.169], [2, 23, 0.179], [3, 23, 0.185], [4, 23, 0.188], [5, 23, 0.189], [6, 23, 0.192], [0, 24, 0.164], [1, 24, 0.186], [2, 24, 0.197], [3, 24, 0.204], [4, 24, 0.207], [5, 24, 0.21], [6, 24, 0.212], [0, 25, 0.093], [1, 25, 0.11], [2, 25, 0.116], [3, 25, 0.121], [4, 25, 0.123], [5, 25, 0.125], [6, 25, 0.126], [0, 26, 0.185], [1, 26, 0.226], [2, 26, 0.245], [3, 26, 0.255], [4, 26, 0.262], [5, 26, 0.266], [6, 26, 0.271], [0, 27, 0.092], [1, 27, 0.107], [2, 27, 0.113], [3, 27, 0.117], [4, 27, 0.119], [5, 27, 0.121], [6, 27, 0.122], [0, 28, 0.107], [1, 28, 0.122], [2, 28, 0.13], [3, 28, 0.135], [4, 28, 0.137], [5, 28, 0.139], [6, 28, 0.14], [0, 29, 0.094], [1, 29, 0.109], [2, 29, 0.116], [3, 29, 0.12], [4, 29, 0.122], [5, 29, 0.123], [6, 29, 0.124], [0, 30, 0.151], [1, 30, 0.17], [2, 30, 0.181], [3, 30, 0.187], [4, 30, 0.19], [5, 30, 0.191], [6, 30, 0.193], [0, 31, 0.164], [1, 31, 0.186], [2, 31, 0.198], [3, 31, 0.205], [4, 31, 0.208], [5, 31, 0.21], [6, 31, 0.213], [0, 32, 0.093], [1, 32, 0.109], [2, 32, 0.116], [3, 32, 0.12], [4, 32, 0.122], [5, 32, 0.123], [6, 32, 0.124], [0, 33, 0.186], [1, 33, 0.226], [2, 33, 0.245], [3, 33, 0.255], [4, 33, 0.262], [5, 33, 0.266], [6, 33, 0.271], [0, 34, 0.093], [1, 34, 0.109], [2, 34, 0.117], [3, 34, 0.121], [4, 34, 0.123], [5, 34, 0.125], [6, 34, 0.126], [0, 35, 0.093], [1, 35, 0.11], [2, 35, 0.117], [3, 35, 0.121], [4, 35, 0.123], [5, 35, 0.125], [6, 35, 0.126], [0, 36, 0.161], [1, 36, 0.191], [2, 36, 0.207], [3, 36, 0.216], [4, 36, 0.222], [5, 36, 0.226], [6, 36, 0.229], [0, 37, 0.146], [1, 37, 0.171], [2, 37, 0.185], [3, 37, 0.193], [4, 37, 0.198], [5, 37, 0.201], [6, 37, 0.204], [0, 38, 0.151], [1, 38, 0.176], [2, 38, 0.189], [3, 38, 0.198], [4, 38, 0.203], [5, 38, 0.206], [6, 38, 0.209], [0, 39, 0.176], [1, 39, 0.204], [2, 39, 0.219], [3, 39, 0.228], [4, 39, 0.234], [5, 39, 0.238], [6, 39, 0.241], [0, 40, 0.155], [1, 40, 0.185], [2, 40, 0.201], [3, 40, 0.21], [4, 40, 0.216], [5, 40, 0.219], [6, 40, 0.223], [0, 41, 0.192], [1, 41, 0.235], [2, 41, 0.257], [3, 41, 0.268], [4, 41, 0.275], [5, 41, 0.281], [6, 41, 0.286], [0, 42, 0.15], [1, 42, 0.178], [2, 42, 0.193], [3, 42, 0.201], [4, 42, 0.207], [5, 42, 0.21], [6, 42, 0.214], [0, 43, 0.155], [1, 43, 0.184], [2, 43, 0.199], [3, 43, 0.208], [4, 43, 0.214], [5, 43, 0.217], [6, 43, 0.221], [0, 44, 0.156], [1, 44, 0.185], [2, 44, 0.201], [3, 44, 0.21], [4, 44, 0.216], [5, 44, 0.219], [6, 44, 0.223], [0, 45, 0.184], [1, 45, 0.224], [2, 45, 0.246], [3, 45, 0.257], [4, 45, 0.265], [5, 45, 0.27], [6, 45, 0.274], [0, 46, 0.183], [1, 46, 0.22], [2, 46, 0.24], [3, 46, 0.251], [4, 46, 0.258], [5, 46, 0.262], [6, 46, 0.267], [0, 47, 0.184], [1, 47, 0.222], [2, 47, 0.241], [3, 47, 0.252], [4, 47, 0.259], [5, 47, 0.264], [6, 47, 0.268], [0, 48, 0.186], [1, 48, 0.224], [2, 48, 0.244], [3, 48, 0.254], [4, 48, 0.262], [5, 48, 0.266], [6, 48, 0.271], [0, 49, 0.182], [1, 49, 0.223], [2, 49, 0.244], [3, 49, 0.255], [4, 49, 0.263], [5, 49, 0.267], [6, 49, 0.272], [0, 50, 0.197], [1, 50, 0.246], [2, 50, 0.271], [3, 50, 0.283], [4, 50, 0.292], [5, 50, 0.297], [6, 50, 0.303], [0, 51, 0.183], [1, 51, 0.222], [2, 51, 0.242], [3, 51, 0.253], [4, 51, 0.26], [5, 51, 0.265], [6, 51, 0.27], [0, 52, 0.183], [1, 52, 0.223], [2, 52, 0.244], [3, 52, 0.255], [4, 52, 0.262], [5, 52, 0.267], [6, 52, 0.271], [0, 53, 0.183], [1, 53, 0.223], [2, 53, 0.244], [3, 53, 0.255], [4, 53, 0.263], [5, 53, 0.268], [6, 53, 0.272], [0, 54, 0.185], [1, 54, 0.223], [2, 54, 0.243], [3, 54, 0.254], [4, 54, 0.261], [5, 54, 0.266], [6, 54, 0.27], [0, 55, 0.115], [1, 55, 0.22], [2, 55, 0.292], [3, 55, 0.33], [4, 55, 0.35], [5, 55, 0.371], [6, 55, 0.39], [0, 56, 0.115], [1, 56, 0.22], [2, 56, 0.292], [3, 56, 0.33], [4, 56, 0.35], [5, 56, 0.37], [6, 56, 0.39], [0, 57, 0.115], [1, 57, 0.22], [2, 57, 0.292], [3, 57, 0.33], [4, 57, 0.35], [5, 57, 0.371], [6, 57, 0.39], [0, 58, 0.115], [1, 58, 0.22], [2, 58, 0.292], [3, 58, 0.331], [4, 58, 0.351], [5, 58, 0.371], [6, 58, 0.39], [0, 59, 0.115], [1, 59, 0.22], [2, 59, 0.292], [3, 59, 0.33], [4, 59, 0.35], [5, 59, 0.371], [6, 59, 0.39], [0, 60, 0.115], [1, 60, 0.22], [2, 60, 0.292], [3, 60, 0.331], [4, 60, 0.351], [5, 60, 0.371], [6, 60, 0.39], [0, 61, 0.115], [1, 61, 0.22], [2, 61, 0.292], [3, 61, 0.33], [4, 61, 0.35], [5, 61, 0.371], [6, 61, 0.39], [0, 62, 0.115], [1, 62, 0.22], [2, 62, 0.292], [3, 62, 0.331], [4, 62, 0.351], [5, 62, 0.371], [6, 62, 0.39], [0, 63, 0.115], [1, 63, 0.22], [2, 63, 0.292], [3, 63, 0.331], [4, 63, 0.351], [5, 63, 0.371], [6, 63, 0.39], [0, 64, 0.117], [1, 64, 0.221], [2, 64, 0.293], [3, 64, 0.331], [4, 64, 0.352], [5, 64, 0.372], [6, 64, 0.391], [0, 65, 0.118], [1, 65, 0.223], [2, 65, 0.295], [3, 65, 0.332], [4, 65, 0.353], [5, 65, 0.374], [6, 65, 0.393], [0, 66, 0.16], [1, 66, 0.221], [2, 66, 0.254], [3, 66, 0.274], [4, 66, 0.285], [5, 66, 0.295], [6, 66, 0.304], [0, 67, 0.158], [1, 67, 0.218], [2, 67, 0.25], [3, 67, 0.27], [4, 67, 0.281], [5, 67, 0.29], [6, 67, 0.299], [0, 68, 0.159], [1, 68, 0.218], [2, 68, 0.251], [3, 68, 0.271], [4, 68, 0.282], [5, 68, 0.291], [6, 68, 0.3], [0, 69, 0.163], [1, 69, 0.222], [2, 69, 0.255], [3, 69, 0.275], [4, 69, 0.286], [5, 69, 0.296], [6, 69, 0.304], [0, 70, 0.16], [1, 70, 0.22], [2, 70, 0.253], [3, 70, 0.274], [4, 70, 0.284], [5, 70, 0.294], [6, 70, 0.303], [0, 71, 0.172], [1, 71, 0.236], [2, 71, 0.271], [3, 71, 0.291], [4, 71, 0.303], [5, 71, 0.314], [6, 71, 0.322], [0, 72, 0.159], [1, 72, 0.219], [2, 72, 0.252], [3, 72, 0.272], [4, 72, 0.283], [5, 72, 0.292], [6, 72, 0.301], [0, 73, 0.16], [1, 73, 0.22], [2, 73, 0.253], [3, 73, 0.273], [4, 73, 0.284], [5, 73, 0.294], [6, 73, 0.302], [0, 74, 0.16], [1, 74, 0.221], [2, 74, 0.253], [3, 74, 0.274], [4, 74, 0.284], [5, 74, 0.294], [6, 74, 0.303], [0, 75, 0.163], [1, 75, 0.222], [2, 75, 0.255], [3, 75, 0.275], [4, 75, 0.286], [5, 75, 0.296], [6, 75, 0.305], [0, 76, 0.167], [1, 76, 0.229], [2, 76, 0.263], [3, 76, 0.282], [4, 76, 0.295], [5, 76, 0.305], [6, 76, 0.314], [0, 77, 0.115], [1, 77, 0.22], [2, 77, 0.292], [3, 77, 0.33], [4, 77, 0.35], [5, 77, 0.37], [6, 77, 0.39], [0, 78, 0.099], [1, 78, 0.156], [2, 78, 0.191], [3, 78, 0.212], [4, 78, 0.225], [5, 78, 0.237], [6, 78, 0.246], [0, 79, 0.097], [1, 79, 0.155], [2, 79, 0.19], [3, 79, 0.211], [4, 79, 0.224], [5, 79, 0.236], [6, 79, 0.245], [0, 80, 0.098], [1, 80, 0.155], [2, 80, 0.191], [3, 80, 0.212], [4, 80, 0.224], [5, 80, 0.236], [6, 80, 0.246], [0, 81, 0.099], [1, 81, 0.156], [2, 81, 0.192], [3, 81, 0.213], [4, 81, 0.225], [5, 81, 0.237], [6, 81, 0.247], [0, 82, 0.098], [1, 82, 0.155], [2, 82, 0.191], [3, 82, 0.212], [4, 82, 0.224], [5, 82, 0.237], [6, 82, 0.246], [0, 83, 0.1], [1, 83, 0.157], [2, 83, 0.193], [3, 83, 0.214], [4, 83, 0.226], [5, 83, 0.238], [6, 83, 0.248], [0, 84, 0.098], [1, 84, 0.155], [2, 84, 0.191], [3, 84, 0.212], [4, 84, 0.224], [5, 84, 0.236], [6, 84, 0.245], [0, 85, 0.098], [1, 85, 0.156], [2, 85, 0.191], [3, 85, 0.212], [4, 85, 0.224], [5, 85, 0.237], [6, 85, 0.246], [0, 86, 0.098], [1, 86, 0.156], [2, 86, 0.191], [3, 86, 0.212], [4, 86, 0.224], [5, 86, 0.237], [6, 86, 0.246], [0, 87, 0.098], [1, 87, 0.155], [2, 87, 0.192], [3, 87, 0.213], [4, 87, 0.225], [5, 87, 0.237], [6, 87, 0.246], [0, 88, 0.1], [1, 88, 0.158], [2, 88, 0.193], [3, 88, 0.214], [4, 88, 0.227], [5, 88, 0.239], [6, 88, 0.249], [0, 89, 0.087], [1, 89, 0.155], [2, 89, 0.202], [3, 89, 0.231], [4, 89, 0.247], [5, 89, 0.263], [6, 89, 0.278], [0, 90, 0.098], [1, 90, 0.154], [2, 90, 0.191], [3, 90, 0.214], [4, 90, 0.228], [5, 90, 0.241], [6, 90, 0.251], [0, 91, 0.107], [1, 91, 0.149], [2, 91, 0.176], [3, 91, 0.193], [4, 91, 0.205], [5, 91, 0.214], [6, 91, 0.224], [0, 92, 0.106], [1, 92, 0.149], [2, 92, 0.175], [3, 92, 0.192], [4, 92, 0.204], [5, 92, 0.213], [6, 92, 0.223], [0, 93, 0.107], [1, 93, 0.149], [2, 93, 0.176], [3, 93, 0.193], [4, 93, 0.205], [5, 93, 0.214], [6, 93, 0.224], [0, 94, 0.107], [1, 94, 0.15], [2, 94, 0.177], [3, 94, 0.194], [4, 94, 0.206], [5, 94, 0.216], [6, 94, 0.226], [0, 95, 0.106], [1, 95, 0.149], [2, 95, 0.176], [3, 95, 0.192], [4, 95, 0.205], [5, 95, 0.214], [6, 95, 0.224], [0, 96, 0.107], [1, 96, 0.151], [2, 96, 0.177], [3, 96, 0.194], [4, 96, 0.207], [5, 96, 0.216], [6, 96, 0.226], [0, 97, 0.106], [1, 97, 0.149], [2, 97, 0.175], [3, 97, 0.192], [4, 97, 0.204], [5, 97, 0.213], [6, 97, 0.223], [0, 98, 0.106], [1, 98, 0.149], [2, 98, 0.176], [3, 98, 0.192], [4, 98, 0.204], [5, 98, 0.213], [6, 98, 0.223], [0, 99, 0.106], [1, 99, 0.149], [2, 99, 0.176], [3, 99, 0.192], [4, 99, 0.205], [5, 99, 0.214], [6, 99, 0.224], [0, 100, 0.108], [1, 100, 0.151], [2, 100, 0.178], [3, 100, 0.195], [4, 100, 0.207], [5, 100, 0.216], [6, 100, 0.226], [0, 101, 0.109], [1, 101, 0.153], [2, 101, 0.181], [3, 101, 0.198], [4, 101, 0.21], [5, 101, 0.22], [6, 101, 0.23], [0, 102, 0.073], [1, 102, 0.144], [2, 102, 0.193], [3, 102, 0.223], [4, 102, 0.238], [5, 102, 0.254], [6, 102, 0.272], [0, 103, 0.103], [1, 103, 0.154], [2, 103, 0.184], [3, 103, 0.204], [4, 103, 0.217], [5, 103, 0.228], [6, 103, 0.239], [0, 104, 0.061], [1, 104, 0.102], [2, 104, 0.135], [3, 104, 0.155], [4, 104, 0.165], [5, 104, 0.174], [6, 104, 0.184], [0, 105, 0.168], [1, 105, 0.19], [2, 105, 0.201], [3, 105, 0.207], [4, 105, 0.211], [5, 105, 0.213], [6, 105, 0.216], [0, 106, 0.16], [1, 106, 0.178], [2, 106, 0.187], [3, 106, 0.192], [4, 106, 0.194], [5, 106, 0.196], [6, 106, 0.198], [0, 107, 0.165], [1, 107, 0.182], [2, 107, 0.191], [3, 107, 0.196], [4, 107, 0.199], [5, 107, 0.2], [6, 107, 0.202], [0, 108, 0.16], [1, 108, 0.178], [2, 108, 0.187], [3, 108, 0.192], [4, 108, 0.194], [5, 108, 0.196], [6, 108, 0.198], [0, 109, 0.163], [1, 109, 0.185], [2, 109, 0.196], [3, 109, 0.202], [4, 109, 0.206], [5, 109, 0.208], [6, 109, 0.21], [0, 110, 0.193], [1, 110, 0.234], [2, 110, 0.254], [3, 110, 0.265], [4, 110, 0.271], [5, 110, 0.276], [6, 110, 0.28], [0, 111, 0.16], [1, 111, 0.18], [2, 111, 0.191], [3, 111, 0.196], [4, 111, 0.2], [5, 111, 0.202], [6, 111, 0.205], [0, 112, 0.163], [1, 112, 0.185], [2, 112, 0.196], [3, 112, 0.201], [4, 112, 0.205], [5, 112, 0.207], [6, 112, 0.21], [0, 113, 0.163], [1, 113, 0.185], [2, 113, 0.196], [3, 113, 0.202], [4, 113, 0.206], [5, 113, 0.208], [6, 113, 0.21], [0, 114, 0.175], [1, 114, 0.203], [2, 114, 0.218], [3, 114, 0.227], [4, 114, 0.232], [5, 114, 0.236], [6, 114, 0.24], [0, 115, 0.185], [1, 115, 0.222], [2, 115, 0.242], [3, 115, 0.253], [4, 115, 0.26], [5, 115, 0.264], [6, 115, 0.269], [0, 116, 0.116], [1, 116, 0.221], [2, 116, 0.292], [3, 116, 0.33], [4, 116, 0.35], [5, 116, 0.37], [6, 116, 0.389], [0, 117, 0.163], [1, 117, 0.221], [2, 117, 0.254], [3, 117, 0.274], [4, 117, 0.285], [5, 117, 0.295], [6, 117, 0.303], [0, 118, 0.099], [1, 118, 0.156], [2, 118, 0.192], [3, 118, 0.213], [4, 118, 0.225], [5, 118, 0.237], [6, 118, 0.247], [0, 119, 0.107], [1, 119, 0.15], [2, 119, 0.177], [3, 119, 0.194], [4, 119, 0.206], [5, 119, 0.215], [6, 119, 0.225]],
        name: 'correlation',
        borderWidth: 1,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]

    });
});
