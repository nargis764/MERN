class BankAccount {
    constructor(intRate = 0, balance = 0) {
        this.intRate = intRate;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }

    withdraw(amount) {
        if(amount >= this.balance) {
            console.log("Insufficient funds: Charging a $5 fee");
            this.balance -= 5;           
        } else {
            this.balance -= amount;
        }
        return this;
    }

    displayAccountInfo() {
        console.log("Balance:$" + this.balance);
    }

    yieldInterest() {
        this.balance += this.balance * this.intRate;   
        return this;     
    }
}

const account1 = new BankAccount(0.01, 1000);
const account2 = new BankAccount(0.01, 2000);

account1.deposit(1000).deposit(1000).deposit(1000).withdraw(500).yieldInterest().displayAccountInfo();
account2.deposit(1000).deposit(1000).withdraw(1000).withdraw(500).withdraw(500).withdraw(500).yieldInterest().displayAccountInfo();