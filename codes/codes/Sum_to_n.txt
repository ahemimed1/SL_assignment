// precondition  P =>  n >= 0
// postcondition Q => sum == n *( n +1) /2

function sum_to_N(n) {
    console.assert(n >= 0, " Precondition : n must be >= 0 ");

    let sum = 0;
    let i = 0;

    // Loop invariant C=>  sum == i *( i -1) /2 && i <= n
    while (i <= n) {
        console.assert(sum === i * (i - 1) / 2 && i <= n,
            " error at i = $ { i }, sum = $ { sum } ");
        sum += i;
        i++;
    }

    console.assert(sum === n * (n + 1) / 2,

        " postcondition Q => sum = $ { sum }, expected = $ { n *(n + 1) /2} ");
    return sum;
}

// Test
console.log(sum_to_N(5)); // 15