// Write a function that will print the first 100 prime numbers

function printPrime() {
    let count = 0;
    let isPrime = true;
    for (let i = 1; count <= 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i%j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
            count++;
        }
        
        isPrime = true;
    }
}

printPrime();