class Account {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Đã gửi tiền", amount, "tính toán", this.accountNumber);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Đã rút", amount, "Từ tài khoản", this.accountNumber);
        } else {
            console.log("Số dư trong tài khoản không đủ", this.accountNumber);
        }
    }
}

class SavingsAccount extends Account {
    private interestRate: number;

    constructor(accountNumber: string, balance: number, interestRate: number) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        const monthlyInterest = (this.balance * this.interestRate) / 100;
        return monthlyInterest;
    }
}

let savingsAccount: SavingsAccount = new SavingsAccount("SA123456", 1000, 0.5);

let monthlyInterest: number = savingsAccount.calculateInterest();
console.log("Lãi hàng tháng:", monthlyInterest);

savingsAccount.deposit(500);

monthlyInterest = savingsAccount.calculateInterest();
console.log("Cập nhật lãi hàng tháng:", monthlyInterest);
