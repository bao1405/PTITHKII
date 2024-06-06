class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    printInfo(): void {
        super.printInfo();
        console.log("Team Size:", this.teamSize);
    }
}

let employee: Employee = new Employee("John Doe", "ABC Company", "123456789");
console.log("Employee Info:");
employee.printInfo();
console.log();

let manager: Manager = new Manager("Jane Smith", "XYZ Company", "987654321", 10);
console.log("Manager Info:");
manager.printInfo();
