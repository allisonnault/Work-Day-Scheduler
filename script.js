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
  var savedCal = JSON.parse(localStorage.getItem("savedItem")) || [];

  var timeList = $('.time-list');
  timeList.on('click', '.saveBtn', function (e) {
    
          var calItem = {
            comment: $.trim($(this).siblings('.description').val()),
            id: $(this).attr("id")
          };

    savedCal.push(calItem);
    localStorage.setItem("savedItem", JSON.stringify(savedCal));
    var enteredCal = JSON.parse(localStorage.getItem("savedItem"));

  
     

        
      }
    
  


    
  );



});

  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  
   
   
