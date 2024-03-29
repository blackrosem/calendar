// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var myHours = $('#hours');
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17').click(function(event) {
    console.log(this.id);
    console.log($("#this.id textarea.value"));
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var timeSlots = myHours.children('div');
  for(var k = 0; k < timeSlots.length; k++){
    let theId = timeSlots[k].id;
    let myArray = theId.split("-");
    let myNum = parseInt(myArray[1]);
    if(myNum < dayjs().hour()) {
      timeSlots[k].className = "row time-block past";
    } else if (myNum > dayjs().hour()) {
      timeSlots[k].className = "row time-block future";
    } else {timeSlots[k].className = "row time-block present";}
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMMM D YYYY");
  $('#currentDay').text(currentDate);
});
