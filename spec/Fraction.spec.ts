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
});