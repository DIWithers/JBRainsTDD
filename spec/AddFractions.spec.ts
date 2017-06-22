import {Fraction} from "../src/AddFractions";

describe("AddFractionsTest", () => {
    function checkAddFractionsAsIntegers(addend: number, augend: number, expectedResult: number): void {
        expect(new Fraction(addend).plus(new Fraction(augend))).toEqual(new Fraction(expectedResult));
    }

    it("zero plus zero", () => {
        checkAddFractionsAsIntegers(0, 0, 0);
    });
    it("non-zero plus zero", () => {
        checkAddFractionsAsIntegers(3, 0, 3);
    });
    it("zero plus non-zero", () => {
        checkAddFractionsAsIntegers(0, 5, 5);
    });
    it("non-negative, non-zero operands ", () => {
        expect(new Fraction(3).plus(new Fraction(4))).toEqual(new Fraction(7));
    });
    it("negative inputs and negative outputs", () => {
        expect(new Fraction(-3).plus(new Fraction(1))).toEqual(new Fraction(-2));
    });
    it("non-trivial denominator of the same value", () => {
        let sum: Fraction = new Fraction(1, 5).plus(new Fraction(2, 5));
        expect(new Fraction(3, 5)).toEqual(sum);
    });
});