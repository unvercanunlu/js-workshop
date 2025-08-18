function calculateMaxProfit(prices) {
    if (prices === null || prices === undefined || !Array.isArray(prices) || prices.length < 2) {
        throw new Error("input must a array with at least 2 non-negative numbers!");
    }

    let maxProfit = Number.MIN_VALUE;
    let buy = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < 0) {
            continue;
        }

        let profit = prices[i] - buy;
        maxProfit = Math.max(profit, maxProfit);
        buy = Math.min(buy, prices[i]);
    }

    return Math.max(0, maxProfit);
}
