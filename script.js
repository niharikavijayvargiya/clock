function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = timeString;

    // Update every second
    setTimeout(updateTime, 1000);
}

// Run the function initially
updateTime();
