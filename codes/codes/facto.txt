function facto(n) {
    // precondition P = > n >= 0
    console.assert(n >= 0, " n must be >= 0");
    let f = 1;
    let i = 1;
    while (i <= n) {
        // loop invariant Q = > f = i !
        console.assert(f > 0);
        f = f * i;
        i++;
    }
    // postcondition Q = > f >0 or f >= n
    console.assert(f > 0 || f >= n);
    return f;
}
console.log(facto(5)); // 120
console.log(facto(0)); // 1