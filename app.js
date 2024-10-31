// if1
let n = 5;
if (n > 0) {
    n++;
}
console.log(n);

// if2
n = -3; 
if (n > 0) {
    n++;
} else {
    n -= 2;
}
console.log(n);

// if3
n = 0;
if (n > 0) {
    n++;
} else if (n < 0) {
    n -= 2;
} else {
    n = 10;
}
console.log(n);

// if4
let a = 1, b = -2, c = 3; 
let count = 0;
if (a > 0) count++;
if (b > 0) count++;
if (c > 0) count++;
console.log(count);

// if5
a = -1, b = 2, c = -3; 
let A = 0, B = 0;
if (a > 0) a++;
if (a < 0) b++;
if (b > 0) a++;
if (b < 0) a++;
if (c > 0) b++;
if (c < 0) a++;
console.log("Musbat sonlar: " + A + ", Manfiy sonlar: " + B);

// if6
a = 7, b = 10; 
console.log(a > b ? a : b);

// if7
a = 4, b = 9; // M
console.log(a < b ? 1 : 2 );

// if8
a = 5, b = 3; 
if (a > b) {
    console.log(a, b);
} else {
    console.log(b, a);
}

// if9
a = 12, b = 7; 
if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
console.log("A:", a, "B:", b);

// if10
a = 6, b = 6; 
if (a !== b) {
    a = b = a + b;
} else {
    a = b = 0;
}
console.log("A:", a, "B:", b);



