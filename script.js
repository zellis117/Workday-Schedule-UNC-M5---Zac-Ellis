$ (document).ready(function(){
    //Saves textarea to local storage by time block Id
    $ ('.saveBtn').on('click', function(){
        var savedText = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        console.log(savedText);
        console.log(time);

        localStorage.setItem(time,savedText);

        //Show notification that item was saved to local storage by adding class'show'
        var notification = document.querySelector('.hide');
        $(notification).addClass('show');

        //Timeout to remove 'show' class after 5 seconds
        setTimeout(function(){
            $('.hide').removeClass('show');
        }, 5000);
    })

    //Checks current hours and updates the colors / classes of time blocks
    function hourUpdater(){
        var x = moment().hour();
        var hoursArr = ["hour0","hour1","hour2","hour3","hour4","hour5","hour6","hour7","hour8","hour9","hour10","hour11",
            "hour12","hour13","hour14","hour15","hour16","hour17","hour18","hour19","hour20","hour21","hour22","hour23"];

        //Loop through each time block 
        $("textarea").each(function(){
            if(x < hoursArr.indexOf(this.name)){
                $(this).addClass("future");
                $(this).addClass("hour");
            } else if(x > hoursArr.indexOf(this.name)){
                $(this).addClass("past");
                $(this).addClass("hour");
            }else if( x == hoursArr.indexOf(this.name)){
                $(this).addClass("present");
                $(this).addClass("hour");
            }
        });
    }

    hourUpdater();

    //Interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    //Loads any saved data into test areas
    $('#9am .description').val(localStorage.getItem('9am'));
    $('#10am .description').val(localStorage.getItem('10am'));
    $('#11am .description').val(localStorage.getItem('11am'));
    $('#12pm .description').val(localStorage.getItem('12pm'));
    $('#1pm .description').val(localStorage.getItem('1pm'));
    $('#2pm .description').val(localStorage.getItem('2pm'));
    $('#3pm .description').val(localStorage.getItem('3pm'));
    $('#4pm .description').val(localStorage.getItem('4pm'));
    $('#5pm .description').val(localStorage.getItem('5pm'));

    //Displays current date and time on the page
    var date = document.querySelector("#currentDay");
    date.innerHTML = moment().format('MMMM Do YYYY, h:mm a');
})