var currentDay=moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay)
var currentHour=moment().hour();
var numHours = $('.event').length
arrHours=$('.event')

var dataSetHour=0
var startWork=9
$("[data-hour=9]").css("background-color","red")
for (var i=0; i<numHours;i++){   
    
    dataSetHour=arrHours[i].dataset.hour
    if (dataSetHour<currentHour){
        
        $('[data-hour="'+startWork+'"]').css("background-color","red")
        console.log("menor")
        console.log(dataSetHour)
        
    }
    if (dataSetHour==currentHour){
        console.log("igual")
        console.log(dataSetHour)
    }
    if (dataSetHour>currentHour){
        console.log("mayor")
        console.log(dataSetHour)
    }
    startWork++
}