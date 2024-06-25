/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // If there are no prices, return 0 as no profit can be made.
    if (prices.length === 0) {
        return 0;
    }
    
    // Initialize the maximum profit to 0, as no transactions mean no profit.
    let maxProfit = 0;
    
    // Initialize the minimum price to the first price in the array.
    let minPrice = prices[0];
    
    // Iterate over the prices starting from the second day.
    for (let i = 1; i < prices.length; i++) {
        // If the current price is lower than the minimum price observed so far,
        // update the minimum price to the current price.
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate the profit if selling at the current price and buying at the minimum price.
            let profit = prices[i] - minPrice;
            
            // If this profit is greater than the maximum profit observed so far,
            // update the maximum profit.
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    
    // Return the maximum profit obtained.
    return maxProfit;
};
