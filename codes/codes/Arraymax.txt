// precondition P = > tableau.length > 0
// post condition Q = > max is the maximum element in the table
function max(tableau) {
    console.assert(tableau.length >= 1, " precondition p = > table must have at least one element ");
    let max = tableau[0];

    let i = 1;

    // loop invariant Q = > max == Math . max ( tableau [0.. i -1])
    while (i < tableau.length) {
        console.assert(max == Math.max(...tableau.slice(0, i)), " error at i = $ {i}, max = $ { max } ");

        if (tableau[i] >= max) {
            max = tableau[i];
        }
        i++;
    }
    console.assert(max == Math.max(...tableau), " postcondition Q failed = > max = $ { max } expected value = $ { Math .max(...tableau) } ");
    return max;
}

console.log(max([3, 1, 4, 1, 5, 9])); 