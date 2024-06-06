"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Đã gửi tiền", amount, "tính toán", this.accountNumber);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Đã rút", amount, "Từ tài khoản", this.accountNumber);
        }
        else {
            console.log("Số dư trong tài khoản không đủ", this.accountNumber);
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        const monthlyInterest = (this.balance * this.interestRate) / 100;
        return monthlyInterest;
    }
}
let savingsAccount = new SavingsAccount("SA123456", 1000, 0.5);
let monthlyInterest = savingsAccount.calculateInterest();
console.log("Lãi hàng tháng:", monthlyInterest);
savingsAccount.deposit(500);
monthlyInterest = savingsAccount.calculateInterest();
console.log("Cập nhật lãi hàng tháng:", monthlyInterest);
