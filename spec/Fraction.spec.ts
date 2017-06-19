import {Fraction} from "../src/Fraction";
describe("AddFractionsTest", () => {
    it("zero plus zero", () => {
        let sum: Fraction = new Fraction(0).plus(new Fraction(0));
        expect(sum.intValue()).toEqual(0);
    });
});