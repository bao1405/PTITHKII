class ShopItem {
    protected id: number;
    protected name: string;
    protected price: number;
    protected isAvailable: boolean;

    constructor(id: number, name: string, price: number, isAvailable: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }

    getInfo(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Price:", this.price);
        console.log("Available:", this.isAvailable);
    }
}

class LendingItem extends ShopItem {
    private customerNames: string[] = [];
    private stock: number;

    constructor(id: number, name: string, price: number, isAvailable: boolean, stock: number) {
        super(id, name, price, isAvailable);
        this.stock = stock;
    }

    lendItem(customerName: string): void {
        if (this.stock > 0) {
            this.customerNames.push(customerName);
            this.stock--;
            if (this.stock === 0) {
                this.isAvailable = false;
                console.log("The lending item", this.name, "is out of stock.");
            }
        } else {
            console.log("The lending item", this.name, "is out of stock.");
        }
    }

    getInfo(): void {
        super.getInfo();
        console.log("Stock:", this.stock);
        console.log("Customers who borrowed:", this.customerNames.join(", "));
    }
}

let lendingItem: LendingItem = new LendingItem(1, "Book", 10, true, 3);

lendingItem.lendItem("Alice");
lendingItem.lendItem("Bob");
lendingItem.lendItem("Charlie");

console.log("Information after lending:");
lendingItem.getInfo();
