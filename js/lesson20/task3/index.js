class Wallet {
    constructor() {
        this.#balsnse = 0;
    }
    getBalance() {
        return this.#balsnse;
    }

    deposit(sum) {
        this.#balsnse += sum;
    }

    withdraw(sum) {
        if (sum > this.#balsnse) {
            console.log('No enough funds');
            return;
        }
        this.#balsnse -= sum;
    }

}
export { Wallet };