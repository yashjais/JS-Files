// constructor function called as customer
// 3 properties - name, accNo, balance
// 2 methods - getBalance() - return the current balance
//             - transaction(amt,code)

/*
    const c1 = new Customer('m','sbi',500)
    c1.transaction(500,1) // 1000
    c1.transaction(500,1) // 750
    c1.transaction(500,1) // insufficient funds
*/

class Customer {
    constructor(data){
        this.name = data.name
        this.accNo = data.accNo
        this.balance = data.balance
    }

    getBalance() {
        return `your balance as on ${new Date()} is ${this.balance}`
    }

    trasaction(amount, code) {
        if(code == 1){
            this.balance += amount
            return this.balance
        }else{
            if(amount > this.balance){
                return `hey, you don't have the money, you are ${Math.abs(this.balance - amount)} rs short`
            }else{
                this.balance -= amount
                return this.balance
            }
        }
    }
}

const c1 = new Customer({name: 'mani', accNo: 'Sbi123', balance: 1000})
console.log(c1)
console.log(c1.trasaction(1000,1))
console.log(c1.trasaction(500,0))
console.log(c1.trasaction(2000,0))