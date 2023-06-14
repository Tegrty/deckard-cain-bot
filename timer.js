// **NOTE: There is a 75 minute delay between the start of a Helltide after the previous one ends. A Helltide event will last 1 hour**

function startTimer(responseData) {
    var targetTime = new Date(Date.UTC(2023, 5, 5, 10, 0, 0));
    var now = new Date();
  
    // Calculate the initial delay until the first trigger
    var diff = targetTime - now;
    var initialDelay = diff > 0 ? diff : 0;
  
    setTimeout(function () {
      // Trigger the timer function
      timerFunction(responseData);
  
      // Set the interval for every 135 minutes
      setInterval(function () {
        timerFunction(responseData);
      }, 1000);
    }, initialDelay);
  }
  
  function timerFunction(responseData) {
    var now = new Date();
  
    // Calculate the time difference from the target time
    var diff = now - new Date(Date.UTC(2023, 5, 5, 10, 0, 0));
  
    // Calculate the remaining time until the next interval
    var remainingTime = 135 * 60 * 1000 - (diff % (135 * 60 * 1000));
  
    // Convert remaining time to hours, minutes, and seconds
    var remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));
    var remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    var hellTideProgressTime = remainingTime - 75 * 60 * 1000;
  
    if (hellTideProgressTime > 0) {
      var progressMinutes = Math.floor((hellTideProgressTime % (1000 * 60 * 60)) / (1000 * 60));
      var progressSeconds = Math.floor((hellTideProgressTime % (1000 * 60)) / 1000);
      console.log("The event will end in:", progressMinutes, "minutes", progressSeconds, "seconds");
      responseData.content = "The event will end in: " + progressMinutes + " minutes " + progressSeconds + " seconds";
    } else {
      console.log(remainingHours, "hours", remainingMinutes, "minutes", remainingSeconds, "seconds");
      responseData.content = remainingHours + " hours " + remainingMinutes + " minutes " + remainingSeconds + " seconds";
    }
  
    const startTime = new Date('June 5, 2023 10:00:00 GMT+0000');
    const currentTime = new Date();
    const intervalMilliseconds = 135 * 60 * 1000;
    const intervals = Math.floor((currentTime - startTime) / intervalMilliseconds);
    const latestIntervalEnd = new Date(startTime.getTime() + intervals * intervalMilliseconds);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const localTime = latestIntervalEnd.toLocaleString(undefined, options);
    console.log('Latest Helltide:', localTime);
    responseData.content += " Latest Helltide: " + localTime;
  }
  
  
  module.exports = {
    startTimer,
    timerFunction
  };
  