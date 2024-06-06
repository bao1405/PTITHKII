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
    getBalance() {
        return this.balance;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            console.log("Đã rút", amount, "Từ tài khoản", this.accountNumber);
        }
        else {
            console.log("Số tiền rút vượt quá hạn mức thấu chi trong tài khoản:", this.accountNumber);
        }
    }
}
let checkingAccount = new CheckingAccount("CHK123456", 1000, 500);
checkingAccount.withdraw(1500);
checkingAccount.withdraw(2000);
