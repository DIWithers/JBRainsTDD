import {Fraction} from "../src/AddFractions";
describe("FractionsEqualsTest", () => {
    it("fractions with same numerator and denominator are equal ", () => {
        expect(new Fraction(3, 5).equals(new Fraction(3, 5))).toBe(true);
    });
});