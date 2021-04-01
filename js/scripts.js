var currentDay=moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay)
var currentHour=moment().hour();
var numHours = $('.description').length
arrHours=$('.description')
var dataSetHour=0
var startWork=9

for (var i=0; i<numHours;i++){   
    dataSetHour=arrHours[i].dataset.hour
    if (dataSetHour<currentHour){
        $('[data-hour="'+startWork+'"]').addClass("past")
    }
    if (dataSetHour==currentHour){
        $('[data-hour="'+startWork+'"]').addClass("present")
    }
    if (dataSetHour>currentHour){
        $('[data-hour="'+startWork+'"]').addClass("future")
    }
    startWork++
}

$('.btn').add