import {Fraction} from "../src/AddFractions";
describe("FractionsEqualsTest", () => {
    it("fractions with same numerator and denominator are equal ", () => {
        expect(new Fraction(3, 5)).toEqual(new Fraction(3, 5));
    });
    it("fractions with different numerators are not equal ", () => {
        expect(new Fraction(1, 5)).not.toEqual(new Fraction(2, 5));
    });
    it("fractions with different denominators are not equal ", () => {
        expect(new Fraction(3, 4)).not.toEqual(new Fraction(3, 7));
    });
    it("whole numbers equal corresponding fraction ", () => {
        expect(new Fraction(5, 1)).toEqual(new Fraction(5));
    });
    it("whole numbers not equal to different whole number ", () => {
        expect(new Fraction(6)).not.toEqual(new Fraction(5));
    });
    it("negative denominator", () => {
        expect(new Fraction(1, 2)).toEqual(new Fraction(-1, -2));
        expect(new Fraction(1, -2)).toEqual(new Fraction(-1, 2));
    });
});