"use strict";

class SavingAccount extends Account{

    constructor(number, interest ) {
        super(number);
        this.interest = interest;
    }

    get interest() {
        return this._interest;
    }
    set interest(value) {
        if (value < 0.0) {
            alert("The interest should not be less than 0 !!");
            return;
        }
        this._interest = value;
    }
   
    addInterest(){
        const interest = super.getBalance()  * this.interest / 100;
        super.deposit(interest);
        return interest;
    }
    endOfMonth(){
        const interest = this.addInterest();
        return "Interest added SavingAccount "+this.getNumber()+": balance: "+this.getBalance()+" interest: "+interest;
    }

    toString() {
        return "SavingAccount " + this._number + ": balance: " + this._balance + " interest(%): "+this._interest + "%";
    }


}