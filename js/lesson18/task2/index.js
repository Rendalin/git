export const wallet = {
    transactions: [num],
    getMax() {
        return Math.max.apply(null, this.transactions)
    },
    getMin() {
        return Math.min.apply(null, this.transactions)
    },
}