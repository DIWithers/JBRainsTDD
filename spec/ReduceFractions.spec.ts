import {Fraction} from "../src/AddFractions";

describe("ReduceFractionsTest", () => {

    it("fraction already in lowest terms", () => {
        expect(new Fraction(3, 4)).toEqual(new Fraction(3, 4));
    });
    it("reduce to non-whole numbers", () => {
        expect(new Fraction(6, 8)).toEqual(new Fraction(3, 4  ));
    });
});