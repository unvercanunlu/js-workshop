function checkInputInvalid(input) {
    return input === undefined || input === null
        || !Array.isArray(input)
        || input.length < 2;
}

function checkElementInvalid(element) {
    return element === undefined || element === null
        || typeof input !== 'number'
        || Number.isNaN(element) || !Number.isFinite(element)
        || element < 0;
}

function calculateMaxProfit(prices) {
    if (checkInputInvalid(prices)) {
        console.error("Input invalid! input=" + prices);
        throw new Error("Input must a array with at least 2 non-negative numbers!");
    }

    let maxProfit = Number.MIN_VALUE;
    let buy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (checkElementInvalid(prices[i])) {
            console.warn("Price invalid! price=" + prices[i] + " skipping...");
            continue;
        }

        let profit = prices[i] - buy;
        maxProfit = Math.max(profit, maxProfit);
        buy = Math.min(buy, prices[i]);
    }

    return Math.max(0, maxProfit);
}
