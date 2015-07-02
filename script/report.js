$(document).ready(function(){
    $('#chart-section').hide();
    $('.reports-list span').on('click', function(){
        $('#chart-section').show();
        var report_title = $(this).text().replace(/ /g, '-');
        // console.log(report_title);
        getAjaxData(report_title);
    });
});

function getAjaxData(id){
        
        //use getJSON to get the dynamic data via AJAX call
        $.getJSON('script/json/'+id+'.json', function(chartData) {

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

