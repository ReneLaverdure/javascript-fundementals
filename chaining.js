let calculation = {
    value: 0,
    add: function(x) {
        this.value += x
        return this
    },
    minus(x) {
        this.value -= x
        return this
    },
    multiple(x) {
        this.value *= x
        return this
    },
    divide(x) {
        if (this.value === 0) {
            console.log("cannot divide by 0")
        } else {
            this.value /= x
            return this
        }
    },
    clear() {
        this.value = 0
        return this
    }
}

calculation.add(5).add(5).add(10).minus(4)
console.log(calculation.value)
