// ====== basic iterator creation ======
// one create iterator within the object
// they meet the require of the iterator returning a object which return {done:false, value: current}
//
const range = {
    from: 0,
    to: 20,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },
    next() {
        if (this.current < this.to) {
            return { done: false, value: this.current++ }
        }
        return { done: true, value: this.current }

    }
}

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        end: this.to,
        next() {
            if (this.current < this.end) {
                return { done: false, value: this.current++ }
            }
            return { done: true, value: this.current }
        }
    }

}

for (num of range) {
    console.log(num)
}

// ====================================

const generatorRange = {
    from: 100,
    to: 120,
    // *[Symbol.iterator]() {
    //     for (let i = this.from; i < this.to; i++) {
    //         yield i
    //     }
    // }
}

generatorRange[Symbol.iterator] = function* () {
    for (let i = this.from; i < this.to; i++) {
        yield i + 50
    }
}

for (num of generatorRange) {
    console.log(num)
}
for (num of generatorRange) {
    console.log(num)
}

class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end
    }
    *[Symbol.iterator]() {
        for (let i = this.start; i < this.end; i++) {
            yield i
        }
    }
}

let arrRange = [...new Range(5, 7)]
console.log(arrRange)
