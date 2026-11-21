export interface Asset {
    ticker: string,
    amount: number,
    price: number
};

export function isAsset(x: unknown): x is Asset {
    if (typeof x === "object" && x !== null) {
        return "ticker" in x && typeof x.ticker === "string"
            && "amount" in x && typeof x.amount === "number"
            && "price" in x && typeof x.price === "number";
    }
    return false;
}