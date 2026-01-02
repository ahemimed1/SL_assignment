function max(x, y) {
    // precondition : x and y must be numbers
    console.assert(typeof x === " number " && typeof y === " number ");
    let max;
    if (x >= y) {
        max = x;
    }
    else {
        max = y;
    }
    // post condition Q = > max >= x and max >= y
    console.assert(max >= x && max >= y);
    return max;
}




function add(a, b) {
    console.assert(typeof a === 'number', "a should be a number");
    console.assert(typeof b === 'number', "b should be a number");
    
    let result = a + b;
    
    console.assert(typeof result === 'number', "Result should be a number");
    console.assert(result === a + b, "Result should equal a + b");
    
    return result;
}