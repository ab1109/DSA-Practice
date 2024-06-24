/**
 * Merge two sorted arrays, nums1 and nums2, into one sorted array in-place in nums1.
 * @param {number[]} nums1 - The first sorted array, with enough space to hold the additional elements from nums2.
 * @param {number} m - The number of valid elements in nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of valid elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Initialize three pointers:
    // i points to the end of the combined array,
    // f points to the last valid element in nums1,
    // s points to the last element in nums2.
    let i = nums1.length - 1;
    let f = m - 1;
    let s = n - 1;
    
    // Iterate while there are still elements to merge from nums2.
    while (s >= 0) {
        let fVal = nums1[f]; // Get the current value from nums1.
        let sVal = nums2[s]; // Get the current value from nums2.
        
        // Compare the current elements of nums1 and nums2.
        if (fVal > sVal) {
            // If nums1's element is larger, place it at the current position of nums1.
            nums1[i] = fVal;
            f--; // Move the pointer in nums1 backwards.
        } else {
            // If nums2's element is larger or equal, place it at the current position of nums1.
            nums1[i] = sVal;
            s--; // Move the pointer in nums2 backwards.
        }
        i--; // Move the combined array pointer backwards.
    }
};

// Example usage:
merge([1,2,3,0,0,0], 3, [2,5,6], 3); // nums1 becomes [1,2,2,3,5,6]
