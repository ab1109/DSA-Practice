function sort(a) {
    let i;
    let j;
    let n = a.length;

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (a[i] > a[j]) {
                let t = a[i];
                a[i] = a[j];
                a[j] = t;
            }
        }
    }
    return a;
}

const ar = sort([6, 2, 3]);
console.log(ar);
