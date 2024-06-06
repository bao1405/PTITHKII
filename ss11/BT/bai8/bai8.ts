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

    getBalance(): number {
        return this.balance;
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            console.log("Đã rút", amount, "Từ tài khoản", this.accountNumber);
        } else {
            console.log("Số tiền rút vượt quá hạn mức thấu chi trong tài khoản:", this.accountNumber);
        }
    }
}

let checkingAccount: CheckingAccount = new CheckingAccount("CHK123456", 1000, 500);

checkingAccount.withdraw(1500);

checkingAccount.withdraw(2000);
