dayjs().format();

var currentHour = dayjs().hour();

var nine = $('#hour-9');
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

  function assignColor (){  //  color change
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
    }}

    function displayCalendar () {

    for (var i = 0; i < calDisplay.length; i++) {
      for (var x = 0; x < timeBlock.length; x++) {
        if (timeBlock[x].data().time == calDisplay[i].id) {
          timeBlock[x].children('textarea').text(calDisplay[i].comment);
        }
      }
    }
    }

    var calItems = JSON.parse(localStorage.getItem("textInput")) || [];

    var calDisplay = JSON.parse(localStorage.getItem("textInput"));

$(function () {
  assignColor();
  // event listener
  var timeList = $('.time-list');
  timeList.on('click', '.saveBtn', function (e) {

    var calItem = {
      comment: $.trim($(this).siblings('.description').val()),
      id: $(this).attr("id")
    };

    calItems.push(calItem);
    localStorage.setItem("textInput", JSON.stringify(calItems));})

    displayCalendar();
    
  });



 








