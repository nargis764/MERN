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


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        //this.accountBalance = accountBalance;
        this.account1 = new BankAccount(0.02,1000);
        this.account2 = new BankAccount(0.02,2000);
    }

    makeDeposit(amount) {
        //this.accountBalance +=  amount;
        this.account.deposit(amount);
        return this;
    }

    makeWithdrawal(amount) {
        this.account.withdraw(amount);
        return this;
    }

    displayUserBalance() {
        this.account.displayAccountInfo()
    }

}

const user1 = new User("Ayesha", "ayesha@email.com");
const user2 = new User("Nargis", "nargis@email.com");



// first user
user1.makeDeposit(500).makeDeposit(1000).makeDeposit(1000).makeWithdrawal(1500).displayUserBalance();


// second user
user2.makeDeposit(1000).makeDeposit(1500).makeWithdrawal(1500).makeWithdrawal(500).displayUserBalance();


// const account1 = new BankAccount(0.01, 1000);
// const account2 = new BankAccount(0.01, 2000);

// account1.deposit(1000).deposit(1000).deposit(1000).withdraw(500).yieldInterest().displayAccountInfo();
// account2.deposit(1000).deposit(1000).withdraw(1000).withdraw(500).withdraw(500).withdraw(500).yieldInterest().displayAccountInfo();