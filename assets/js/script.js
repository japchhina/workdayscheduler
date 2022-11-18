$(document).ready(function() {
  $('.saveBtn').on('click', function() {
    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem (value, time);
    $('.notifcation').addClass('show');
    setTimeout(function() {
      $('.notifcation').removeClass('show');
    }, 1000);
  });

  function hourUpdater() {
    var currentH = dayjs().hours();
    $('.time-block').each(function() {
        var hour = parseInt($(this).attr('id').split('-')[1]);
        if (hour < currentH) {
            $(this).addClass('past');
        } else if (hour === currentH) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
      });
    }
    hourUpdater();

    setInterval(hourUpdater, 1000);

    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
   
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
  });