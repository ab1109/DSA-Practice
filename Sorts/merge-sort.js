function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from the left or right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Function to perform merge sort on an array
function mergeSort(array) {
    // Base case: arrays with less than 2 elements are already sorted
    if (array.length < 2) {
        return array;
    }

    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively sort the left and right halves, then merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Test the function with an example array
const ar = mergeSort([6, 2, 3,3, 7]);
console.log(ar); 
