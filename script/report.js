$(document).ready(function(){
    $('.reports-list span').on('click', function(){
    var report_title = $(this).text().replace(/ /g, '-');
      getAjaxData(report_title);

    });
});

function getAjaxData(id){
        
        //use getJSON to get the dynamic data via AJAX call
        $.getJSON('script/data.json',{id:id}, function(chartData) {
            var options = {
                chart: {
                    renderTo: 'chart-container',
                    type: chartData[0].chart
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ['One', 'Two', 'Three']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Value'
                    }
                },
                series: chartData
            };
             chart = new Highcharts.Chart(options);
            
        });
    }

