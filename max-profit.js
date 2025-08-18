function checkInputInvalid(input) {
    return input === undefined || input === null
        || !Array.isArray(input);
}

function checkElementInvalid(element) {
    return element === undefined || element === null
        || typeof element !== 'number'
        || Number.isNaN(element) || !Number.isFinite(element)
        || element < 0;
}

function calculateMaxProfit(prices) {
    if (checkInputInvalid(prices)) {
        console.error("Input invalid! input=" + prices);
        throw new Error("Input must a non-negative number array!");
    }

    if (prices.length <= 1) {
        return 0;
    }

    let maxProfit = Number.NEGATIVE_INFINITY;
    let buy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (checkElementInvalid(prices[i])) {
            console.warn("Price invalid! price=" + prices[i] + " skipping...");
            continue;
        }

        let currentProfit = prices[i] - buy;
        maxProfit = Math.max(currentProfit, maxProfit);
        buy = Math.min(buy, prices[i]);
    }

    return Math.max(0, maxProfit);
}
