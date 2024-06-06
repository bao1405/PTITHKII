"use strict";
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Monday";
    weekDays["Tuesday"] = "Tuesday";
    weekDays["Wednesday"] = "Wednesday";
    weekDays["Thursday"] = "Thursday";
    weekDays["Friday"] = "Friday";
    weekDays["Saturday"] = "Saturday";
    weekDays["Sunday"] = "Sunday";
})(weekDays || (weekDays = {}));
console.log("Ngày trong tuần:");
console.log(weekDays.Monday);
console.log(weekDays.Tuesday);
console.log(weekDays.Wednesday);
console.log(weekDays.Thursday);
console.log(weekDays.Friday);
console.log(weekDays.Saturday);
console.log(weekDays.Sunday);
