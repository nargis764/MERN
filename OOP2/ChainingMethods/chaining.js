class User {
    constructor(name, email, accountBalance = 0) {
        this.name = name;
        this.email = email;
        this.accountBalance = accountBalance;
    }

    makeDeposit(amount) {
        this.accountBalance +=  amount;
        return this;
    }

    makeWithdrawal(amount) {
        this.accountBalance -=  amount;
        return this;
    }

    displayBalance() {
        console.log("User:" + this.name + ", Balance: $" + this.accountBalance)
    }

    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount; 
        
    }
}

const user1 = new User("Ayesha", "ayesha@email.com", 1000);
const user2 = new User("Nargis", "nargis@email.com", 1000);
const user3 = new User("Rashid", "rashid@email.com", 1000);


// first user
user1.makeDeposit(500).makeDeposit(1000).makeDeposit(1000).makeWithdrawal(1500).displayBalance();

// second user
user2.makeDeposit(1000).makeDeposit(1500).makeWithdrawal(1000).makeWithdrawal(500).displayBalance();

// third user
user3.makeDeposit(3000).makeWithdrawal(1000).makeWithdrawal(500).makeWithdrawal(500).displayBalance();

//bonus
// transferMoney
user1.transferMoney(user3, 500);
user1.displayBalance();
user3.displayBalance();