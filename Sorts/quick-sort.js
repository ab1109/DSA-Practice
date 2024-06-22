function quickSort(a) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (a.length <= 1) {
        return a;
    }

    // Choose the pivot (last element in this case)
    let n = a.length - 1;
    let pivot = a[n];

    // Arrays to hold elements less than and greater than the pivot
    let left = [];
    let right = [];

    // Partitioning step
    for (let i = 0; i < n; i++) {
        if (pivot > a[i]) {
            left.push(a[i]);
        } else {
            right.push(a[i]);
        }
    }

    // Recursively apply quickSort to the left and right partitions
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test the function with an example array
const ar = quickSort([6, 2, 3, 7]);
console.log(ar); // Output: [2, 3, 6, 7]
