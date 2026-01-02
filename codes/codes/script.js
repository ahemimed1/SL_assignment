// precondition P =>n>1
// postcondition Q => pre is true iff n is prime

function pre(n) {
    console.assert(n > 1, "precondition P => n > 1");

    let div = 2;
    let premier = true;

    // Loop invariant C: n not divisible by any numbeer in [2, divisor-1]
    while (div * div <= n) {
        console.assert(!isDiv(n, 2, div - 1), 
                       `Invariant violated at divisor=${div}`);
        if (n % div === 0) {
            premier = false;
            break;
        }
        div++;
    }

    console.assert(premier === (n > 1 && !isDiv(n, 2, n - 1)), 
                   `Postcondition failed: prime=${premier}, n=${n}`);
    return premier;
}

function isDiv(n, a, b) {
    for (let i = a; i <= b; i++) {
        if (n % i === 0) return true;
    }
    return false;
}


console.log(pre(7));  
console.log(pre(10)); 