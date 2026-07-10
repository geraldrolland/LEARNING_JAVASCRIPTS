self.onmessage = (event) => {  // limit 10
    const limit = event.data;
    const primeNum = [];


    if (limit === 1) {
        primeNum.push(1);
    }

    else if (limit === 2) {
        primeNum.push([1, 2]);
    }
    else if (limit > 2) {
        let i = 1;
        while(i <= limit){
            for (let j = 1; j <= i; j++) { // j -> 1 -> 2 -> 3 -> 4 -> 5
                if (i % j === 0) {
                    if (j === 1 && i === 1) {
                        primeNum.push(1);
                    }
                    else if (i === 2 && j === 1) {
                        primeNum.push(2);
                    }

                    else if (i === j) {
                        primeNum.push(i)
                    }

                    else if ( j === 1) {
                        continue;
                    }

                    break;
                }
            };
            i++; // i = 1 -> 2 -> 3 -> 4 -> 5
        };
    }


    self.postMessage(primeNum);
}