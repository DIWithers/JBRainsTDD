import {Fraction} from "../src/Fraction";
describe("AddFractionsTest", () => {
    it("zero plus zero", () => {
        let sum: Fraction = new Fraction(0).plus(new Fraction(0));
        expect(sum.intValue()).toEqual(0);
    });
    it("non-zero plus zero", () => {
        let sum: Fraction = new Fraction(3).plus(new Fraction(0));
        expect(sum.intValue()).toEqual(3);
    });
    it("zero plus non-zero", () => {
        let sum: Fraction = new Fraction(0).plus(new Fraction(5));
        expect(sum.intValue()).toEqual(5);
    });
    it("non-negative, non-zero operands ", () => {
        let sum: Fraction = new Fraction(3).plus(new Fraction(4));
        expect(sum.intValue()).toEqual(7);
    });
});