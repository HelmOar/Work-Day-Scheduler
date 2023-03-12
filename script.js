// Wrapped code in function that interacts with DOM in call to JQ ensuring code isn't run until browser has rendered all html elements
$(function(){
// code to display the current date in the header of the page.
var scheduleTime = $(".time-block");
var currentHour = dayjs().hour()
var currentTime = dayjs().format('dddd, MMM D, YYYY h:mm A');
var saveBtn = $(".saveBtn");
$('#currentDay').text(currentTime);

function colorTimeMatch(){

  // accessing all class of timeblock which is the div 
  //parsing string to numerical value
  //splitting string at "-"
  $(".time-block").each(function () {
    var scheduleTime = parseInt($(this).attr("id").split("-")[1]);
  //"comparison of scheduleTime and currentHour to allocate color class

  if (scheduleTime === currentHour) {
    $(this)
    .removeClass("past");
    $(this)
    .removeClass("future");
    $(this)
    .addClass("present");
  }

    else if (scheduleTime > currentHour) {
      $(this)
      .removeClass("past");
      $(this)
      .removeClass("present");
      $(this)
      .addClass("future");
    }
      else {
        $(this)
        .removeClass("present");
        $(this)
        .removeClass("future");
        $(this)
        .addClass("past");
      }
    
});


  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 

  saveBtn.on("click", function() {

    console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".description").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});
  //function to get data from local storage and render to page
  function useSheduler() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".description").val(localStorage.getItem(currHour));
        }
    });
}

  useSheduler();
}

colorTimeMatch();
});