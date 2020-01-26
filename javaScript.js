class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log("Balance: " + this.balance + " LKR");
    }
    deposit(amount) {
        console.log("Depositing " + amount + " LKR");
        this.balance += amount;
        this.showBalance();
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawing denied!");
        } else {
            console.log("Withdrawing " + amount + " LKR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}

const newAccount = new BankAccount("Akash Jeganath", 500);

newAccount.showBalance();
newAccount.withdraw(50);
