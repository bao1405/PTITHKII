class Vehicle {
    public name: string;
    protected readonly year: number;
    private company: string;
    readonly id: number;

    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("Company:", this.company);
        console.log("ID:", this.id);
    }
}

let vehicle = new Vehicle("Toyota Camry", 2020, "Toyota", 1);
vehicle.printInfo();
