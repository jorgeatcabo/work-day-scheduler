
// Starter Function
function init(){
    
    var currentDay=moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDay)
    var currentHour=moment().hour();
    var numHours = $('.description').length
    var startWork=9

    arrHours=$('.description')

    coloring(numHours,startWork,currentHour); 
    fillDescriptions()   

}

//Function For Applying Color Depending The Hour With Respect The Current Hour
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

//Function For Filling Last Saved Descriptions If There Are
function fillDescriptions(){

    if (localStorage.length!=0){

        //Getting Local Storage Key Values Pairs
        var arrayOfKeys = Object.keys(localStorage);
        var arrayOfValues = Object.values(localStorage);
        var localstorage = {};

        //Building An Object From Local Storage Key Values Pairs
        for (var i = 0; i < localStorage.length; i++){
            localstorage[arrayOfKeys[i]] = arrayOfValues[i]
        }

        var descriptions = [];

        //Building A Multidimentional Array From Local Storage Object
        for (var item in localstorage) {
            descriptions.push([item, localstorage[item]]);
        }

        var numFilledDescriptions =descriptions.length

        //Loop For Filling Text Areas Descriptions From Multidimentional Array
        for (var i=0; i<numFilledDescriptions;i++){ 
            $('[data-hour="'+descriptions[i][0]+'"]').text(descriptions[i][1])    
        }    
        
    }
}

//Adding Click Event Listener To Every Saving Button
//In Order To Create Local Storage Key Values Pairs
$('.btn').click(function(){
    
    let hour=$( this ).prev().attr( "data-hour" );
    let descriptionText=$( this ).prev().val();

    localStorage.setItem(hour, descriptionText);    

})

//Start Application
init();