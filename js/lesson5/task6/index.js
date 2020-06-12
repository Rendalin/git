function getPrimes(n) {
    for (const i = 2; i <= n; i++) {
        for (const j = 2; j < i; j++) {
            if (i % j == 0) continue getPrimes;
        }
    }
    alert(i)
}

const n = 10;