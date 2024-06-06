function greetOrSayGoodbye<T extends boolean>(condition: T): void {
    if (condition) {
        console.log("Xin chào!");
    } else {
        console.log("Tạm biệt!");
    }
}

const isGreeting = true;
greetOrSayGoodbye(isGreeting);

const isFarewell = false;
greetOrSayGoodbye(isFarewell);