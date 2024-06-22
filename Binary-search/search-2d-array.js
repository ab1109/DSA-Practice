/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {

    let row = 0
    let col = matrix[0].length - 1

    while (row < matrix.length && col >= 0) {

        if (matrix[row][col] === target) {
            return true
        }
        else if (matrix[row][col] > target) {
            col--
        }
        else {
            row++
        }
    }
    return false
};



//If the current element is greater than the target:

// Move left by decrementing the column index (col--).
// This is because all elements in the current column below the current element are greater (in a sorted matrix), so they can't be the target.

// If the current element is less than the target:
// Move down by incrementing the row index (row++).
// This is because all elements in the current row to the left of the current element are smaller (in a sorted matrix), so they can't be the target.
