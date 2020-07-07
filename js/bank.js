class Bank{
    static nextNumber = 1;
    constructor() {
        this._accounts = [];
    }
    addAccount(){
        let account = new Account(Bank.nextNumber++);
        this._accounts.push(account);
        return account.getNumber();
    }
    addSavingAccount(interest, deposit){
        let account = new SavingAccount(Bank.nextNumber++, interest);
        if(deposit !== null&&deposit!==undefined){
            account.deposit(deposit);
        }
        this._accounts.push(account);
        return account.getNumber();
    }
    addCheckingAccount(overdraftLimit){
        let account = new CheckingAccount(Bank.nextNumber++, overdraftLimit);
        this._accounts.push(account);
        return account.getNumber();
    }
    closeAccount(number){
        for(let i in this._accounts){
            if(this._accounts[i].getNumber() === number){
                this._accounts.splice(i, 1);
                return;
            }
        }
    }
    accountReport (){
        let result = "";
        for(let acc of this._accounts){
            result+=acc.toString()+"\n";
        }
        return result;
    }
    endOfMonth(){
        let result = "";
        for(let acc of this._accounts){
            result += acc.constructor.name + " #"+acc.getNumber()+": \""+ acc.endOfMonth()+"\"\n";
        }
        return result;
    }
}