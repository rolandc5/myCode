function sockMerchant(n, ar) {
    let object = {};
    let sock = 0;
    if (n === 0) return
    ar.forEach(value => object[value] = 0)
    for (let i = 0; i < ar.length; i++) {
        object[ar[i]]++;
        if (object[ar[i]] % 2 === 0) {
            sock++;
        }
    }
    return sock;
}

function countingValleys(n, s) {
    //count how many steps before it gets to 0
    //if steps is only and reaches to zero then it did not crosss a valley
    let elevation = 0;
    let walk = 0;
    let valleys = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') elevation++;
        if (s[i] === 'D') elevation--;
        if (elevation === 0 && s[i] === 'U') {
            valleys++
        }
    }
    return valleys;
}

function rotLeft(a, d) {
    //use the counter
    //get the array, get he first item in the array use shift then push to the last
    let cache;
    for (let i = 0; i < d; i++) {
        cache = a.shift()
        a.push(cache);
    }
    return a;
}
