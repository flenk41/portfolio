import { readFileSync } from "node:fs";
import { isAsset, type Asset } from "./asset.js"

const json = readFileSync("portfolio.json", "utf-8");

const data: unknown = JSON.parse(json);
if (!Array.isArray(data)) throw new Error("Ожидался массив активов");

const assets: Asset[] = [];
for (let i = 0; i < data.length; i++) {
    const item: unknown = data[i];
    if (!isAsset(item)) throw new Error(`Элемент ${i + 1}: неверный формат актива: ${JSON.stringify(item)}`);
    assets.push(item);
}
console.log(`Портфель загружен: ${assets.length}`);

let total = 0;
for (const asset of assets) {
    const value = asset.price * asset.amount;
    total += value;
    console.log(`${asset.ticker}:${value}`);
}
console.log(`Итого: ${total}`);