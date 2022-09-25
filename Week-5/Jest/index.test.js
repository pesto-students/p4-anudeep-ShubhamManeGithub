const { sum, diff, product } = require("./index");

test("Returns The Sum Of The Two Numbers", () => {
    expect(sum(5, 5)).toBe(10);
});

test("Returns The Difference Of The Two Numbers", () => {
    expect(diff(5, 5)).toBe(5);
});
test("Returns The Product Of The Two Numbers", () => {
    expect(product(5, 5)).toBe(25);
});