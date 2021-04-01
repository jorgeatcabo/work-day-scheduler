
function init(){
    var currentDay=moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDay)
    var currentHour=moment().hour();
    var numHours = $('.description').length
    arrHours=$('.description')
    var startWork=9
    coloring(numHours,startWork,currentHour); 
    fillDescriptions()   
}

function coloring(numHours,startWork,currentHour){
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
}

function fillDescriptions(){
    if (localStorage.length!=0){
        var arrayOfKeys = Object.keys(localStorage);
        var arrayOfValues = Object.values(localStorage);
        var localstorage = {};

        for (var i = 0; i < localStorage.length; i++){
            localstorage[arrayOfKeys[i]] = arrayOfValues[i]
        }

        var descriptions = [];

        for (var item in localstorage) {
            descriptions.push([item, localstorage[item]]);
        }

        var numFilledDescriptions =descriptions.length

        for (var i=0; i<numFilledDescriptions;i++){ 
            $('[data-hour="'+descriptions[i][0]+'"]').text(descriptions[i][1])    
        }    
        console.log(descriptions)
    }
}

$('.btn').click(function(){
    let hour=$( this ).prev().attr( "data-hour" );
    let descriptionText=$( this ).prev().val();
    localStorage.setItem(hour, descriptionText);    
})

init();