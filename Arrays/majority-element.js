/**
 * Finds the majority element in an array of numbers.
 * A majority element is the element that appears more than ⌊n / 2⌋ times.
 * Assumes that the input array always contains a majority element.
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {number} The majority element.
 */
var majorityElement = function(nums) {
    // Initialize votes to 1 and set the first element as the initial majority candidate
    let votes = 1;
    let majority = nums[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If votes drop to 0, update the majority candidate to the current element and reset votes
        if (votes === 0) {
            majority = nums[i];
            votes++;
        }
        // If the current element matches the majority candidate, increment votes
        else if (majority === nums[i]) {
            votes++;
        }
        // If the current element does not match the majority candidate, decrement votes
        else {
            votes--;
        }
    }

    // Return the majority element found
    return majority;
};
