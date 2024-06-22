function sort(a) {
    // Get the length of the array
    let n = a.length;

    // Outer loop to iterate through each element in the array
    // i = 1 because we assume that the first element is sorted
    for (let i = 1; i < n; i++) {
        // Store the current element to be inserted in the correct position
        let numberToInsert = a[i];
        // Initialize the index for comparison
        let j = i - 1;

        // Inner loop to find the correct position for numberToInsert
        while (j >= 0 && a[j] > numberToInsert) {
            // Shift elements to the right to make space for numberToInsert
            a[j + 1] = a[j];
            // Move to the previous element
            j--;
        }

        // Insert the element at the correct position
        a[j + 1] = numberToInsert;
    }

    // Return the sorted array
    return a;
}

// Test the function with an example array
const ar = sort([6, 2, 3, 7, -9]);
console.log(ar); // Output: [-9, 2, 3, 6, 7]
