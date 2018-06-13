import currency from "currency.js";

const RMB = (value, withSymbol = true) =>
  value >= 0
    ? (withSymbol ? "+ " : "") +
      currency(value, { symbol: "¥", precision: 2 }).format(true)
    : (true /*负数的情况下withSymbol必为true*/ ? "- " : "") +
      currency(-value, { symbol: "¥", precision: 2 }).format(true);

export default RMB;
