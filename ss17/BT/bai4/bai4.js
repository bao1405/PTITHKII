"use strict";
function greetOrSayGoodbye(condition) {
    if (condition) {
        console.log("Xin chào!");
    }
    else {
        console.log("Tạm biệt!");
    }
}
const isGreeting = true;
greetOrSayGoodbye(isGreeting);
const isFarewell = false;
greetOrSayGoodbye(isFarewell);
