"use strict";

class CheckingAccount extends Account{

    constructor(number, overdraftLimit) {
        super(number);
        this.overdraftLimit = overdraftLimit;
    }
    get overdraftLimit(){
        return this._overdraftLimit;
    }
    set overdraftLimit(overdraftLimit){
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.getBalance()+this.overdraftLimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }
    endOfMonth(){
        return this.toString();
    }

    toString() {
        return (this._balance<0?"Warning, low balance ":"")+ "CheckingAccount "+this.getNumber()+": balance: "+this.getBalance()+" overdraft limit: "+this.overdraftLimit;
    }

}