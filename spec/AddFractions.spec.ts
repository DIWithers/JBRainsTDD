import {Fraction} from "../src/AddFractions";

describe("AddFractionsTest", () => {

    it("zero plus zero", () => {
        expect(new Fraction(0).plus(new Fraction(0))).toEqual(new Fraction(0));
    });
    it("non-zero plus zero", () => {
        expect(new Fraction(3).plus(new Fraction(0))).toEqual(new Fraction(3));
    });
    it("zero plus non-zero", () => {
        expect(new Fraction(0).plus(new Fraction(5))).toEqual(new Fraction(5));
    });
    it("non-negative, non-zero operands ", () => {
        expect(new Fraction(3).plus(new Fraction(4))).toEqual(new Fraction(7));
    });
    it("negative inputs and negative outputs", () => {
        expect(new Fraction(-3).plus(new Fraction(1))).toEqual(new Fraction(-2));
    });
    it("non-trivial denominator of the same value", () => {
        expect(new Fraction(3, 5)).toEqual(new Fraction(1, 5).plus(new Fraction(2, 5)));
    });
    it("different denominators without reducing result", () => {
        expect(new Fraction(1, 2).plus(new Fraction(1, 3))).toEqual(new Fraction(5, 6));
    });
    it("reduce result to whole number", () => {
        expect(new Fraction(1, 3).plus(new Fraction(2, 3))).toEqual(new Fraction(1));
    });
    it("one denominator is a multiple of the other", () => {
        expect(new Fraction(3, 4).plus(new Fraction(5, 8))).toEqual(new Fraction(11, 8));
    });
    it("common factor in denominators", () => {
        expect(new Fraction(1, 6).plus(new Fraction(4, 9))).toEqual(new Fraction(11, 18));
    });
    it("reduce result even when denominators are the same", () => {
        expect(new Fraction(3, 4).plus(new Fraction(3, 4))).toEqual(new Fraction(3, 2));
    });
    it("negative fraction and reducing", () => {
        expect(new Fraction(-1, 4).plus(new Fraction(3, 4))).toEqual(new Fraction(1, 2));
        expect(new Fraction(3, 8).plus(new Fraction(-1, 2))).toEqual(new Fraction(-1, 8));
    });
    it("negative signs everywhere", () => {
        expect(new Fraction(1, -4).plus(new Fraction(-3, -4))).toEqual(new Fraction(1, 2));
    }); 
});