setInterval( function() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var secs = date.getSeconds();

  var hrs = (hr < 10) ? ('0' + hr) : hr;
  var mins = (min < 10) ? ('0' + min) : min;
  var seconds = (secs < 10) ? ('0' + secs) : secs;

  var hexHrs = hrs.toString(16);
  var hexMins = mins.toString(16);
  var hexSeconds = seconds.toString(16);

  var hexHours = (hexHrs.value > 9) || (hexHrs === 'a') || (hexHrs === 'b') || (hexHrs === 'c') || (hexHrs === 'd') || (hexHrs === 'e') || (hexHrs === 'f') ? ('0' + hexHrs) : hexHrs;
  var hexMinutes = (hexMins === 'a') || (hexMins === 'b') || (hexMins === 'c') || (hexMins === 'd') || (hexMins === 'e') || (hexMins === 'f') ? ('0' + hexMins) : hexMins;
  var hexSecs = (hexSeconds === 'a') || (hexSeconds === 'b') || (hexSeconds === 'c') || (hexSeconds === 'd') || (hexSeconds === 'e') || (hexSeconds === 'f') ? ('0' + hexSeconds) : hexSeconds;

  var hexTimeBg = '#' + hexHours + hexMinutes + hexSecs;
  var hexTime = hexHours + hexMinutes + hexSecs;


  $('#timestamp').text(hexTime).css('background-color', hexTimeBg);

}, 1000);



