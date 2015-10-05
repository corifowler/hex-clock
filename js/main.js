setInterval( function() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var secs = date.getSeconds();

  var hrs = (hr < 10) ? ('0' + hr) : hr;
  var mins = (min < 10) ? ('0' + min) : min;
  var seconds = (secs < 10) ? ('0' + secs) : secs;

  var hexHrs = hrs.toString(16).toUpperCase();
  var hexMins = mins.toString(16).toUpperCase();
  var hexSeconds = seconds.toString(16).toUpperCase();

  var hexHours = (hexHrs === 'A') || (hexHrs === 'B') || (hexHrs === 'C') || (hexHrs === 'D') || (hexHrs === 'E') || (hexHrs === 'F') ? ('0' + hexHrs) : hexHrs;
  var hexMinutes = (hexMins === 'A') || (hexMins === 'B') || (hexMins === 'C') || (hexMins === 'D') || (hexMins === 'E') || (hexMins === 'F') ? ('0' + hexMins) : hexMins;
  var hexSecs = (hexSeconds === 'A') || (hexSeconds === 'B') || (hexSeconds === 'C') || (hexSeconds === 'D') || (hexSeconds === 'E') || (hexSeconds === 'F') ? ('0' + hexSeconds) : hexSeconds;

  var hexTimeBg = '#' + hexHours + hexMinutes + hexSecs;
  var hexTime = hexHours + hexMinutes + hexSecs;


  $('#timestamp').text(hexTime).css('background-color', hexTimeBg);

}, 1000);



