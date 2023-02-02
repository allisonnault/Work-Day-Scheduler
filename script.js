dayjs().format();

var currentHour = dayjs().hour();

$(function () {

  var nine = $('#hour-9');
  console.log($(nine).children("button"));
  var ten = $('#hour-10');
  var eleven = $('#hour-11');
  var twelve = $('#hour-12');
  var one = $('#hour-13');
  var two = $('#hour-14');
  var three = $('#hour-15');
  var four = $('#hour-16');
  var five = $('#hour-17');
  var timeBlock = [nine, ten, eleven, twelve, one, two, three, four, five];
  var currentDay = $('#currentDay');
  var today = dayjs();
  var dayWeek = today.format('dddd, MMMM D');
  currentDay.text(dayWeek);

  //  color change
  for (var i = 0; i < timeBlock.length; i++) {
    if ((timeBlock[i].data().time) > (dayjs().hour())) {
      timeBlock[i].attr('class', 'future');
      timeBlock[i].addClass('row');
      timeBlock[i].addClass('time-block');
    } else if ((timeBlock[i].data().time) == (dayjs().hour())) {
      timeBlock[i].attr('class', 'present');
      timeBlock[i].addClass('row');
      timeBlock[i].addClass('time-block');
    } else {
      timeBlock[i].attr('class', 'past');
      timeBlock[i].addClass('row');
      timeBlock[i].addClass('time-block');
    }
  }

  // event listener
  var timeList = $('.time-list');
  timeList.on('click', '.saveBtn', function (e) {
    console.log("hello!"+this);
  });






});

  



 



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  
   
   
