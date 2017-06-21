import {Fraction} from "../src/Fraction";
describe("AddFractionsTest", () => {
    it("zero plus zero", () => {
        expect(new Fraction(0).plus(new Fraction(0)).intValue()).toEqual(0);
    });
    it("non-zero plus zero", () => {
        expect(new Fraction(3).plus(new Fraction(0)).intValue()).toEqual(3);
    });
    it("zero plus non-zero", () => {
        expect(new Fraction(0).plus(new Fraction(5)).intValue()).toEqual(5);
    });
    it("non-negative, non-zero operands ", () => {
        expect(new Fraction(3).plus(new Fraction(4)).intValue()).toEqual(7);
    });
    it("negative inputs and negative outputs", () => {
        expect(new Fraction(-3).plus(new Fraction(1)).intValue()).toEqual(-2);
    });
    it("non-trivial denominator of the same value", () => {
        let sum: Fraction = new Fraction(1, 5).plus(new Fraction(2, 5));
        expect(sum.getNumerator()).toEqual(3);
        expect(sum.getDenominator()).toEqual(5);

    });
});