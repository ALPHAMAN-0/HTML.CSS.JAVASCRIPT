
let myTime = Date.now();
console.log("Current Timestamp: " + myTime);

let myDate = new Date();
console.log("Current Date and Time: " + myDate.toString());

let specificDate = new Date('2023-12-25T10:00:00');
console.log("Specific Date and Time: " + specificDate.toString());

let year = myDate.getFullYear();
let month = myDate.getMonth() + 1; // Months are zero-based
let day = myDate.getDate();
console.log(`Current Date: ${year}-${month}-${day}`);

let hours = myDate.getHours();
let minutes = myDate.getMinutes();
let seconds = myDate.getSeconds();
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

myDate.setFullYear(2025);
console.log("Updated Year: " + myDate.getFullYear());

myDate.setMonth(11); // December
console.log("Updated Month: " + (myDate.getMonth() + 1));

myDate.setDate(31);
console.log("Updated Date: " + myDate.getDate());

myDate.setHours(23);
console.log("Updated Hours: " + myDate.getHours());

myDate.setMinutes(59);
console.log("Updated Minutes: " + myDate.getMinutes());

myDate.setSeconds(59);
console.log("Updated Seconds: " + myDate.getSeconds());

let isoString = myDate.toISOString();
console.log("ISO String: " + isoString);

let dateString = myDate.toDateString();
console.log("Date String: " + dateString);

let timeString = myDate.toTimeString();
console.log("Time String: " + timeString);

let localeString = myDate.toLocaleString();
console.log("Locale String: " + localeString);

let utcString = myDate.toUTCString();
console.log("UTC String: " + utcString);                