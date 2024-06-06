interface PrintableEnum<T> {
    printAllEnums(): void;
}

enum WeekDays {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

class WeekDaysPrinter implements PrintableEnum<WeekDays> {
    printAllEnums(): void {
        for (let day in WeekDays) {
            if (isNaN(Number(day))) {
                console.log(day);
            }
        }
    }
}

const printer = new WeekDaysPrinter();
printer.printAllEnums();