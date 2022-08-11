
/* Basically, what this function does is turn the roman numbers to int numbers. This is a test that FAANG's
corporations make to their job seekers in the interviews. You can check if this work by using the console in
you browser.*/


function romanointeiro(romano) {
    let n = 0;
    const numbers = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };

    for(let i=0;i<romano.length;i++) {
        let current = romano[i];
        let next = romano[i+1];

        if(next && numbers[prox] > numbers[current]) {
            n -= numbers[current];
        } else {
            n += numbers[current];
        }
    }

    return n;
}