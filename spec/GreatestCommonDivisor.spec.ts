import {Fraction} from "../src/AddFractions";

describe("GreatestCommonDivisorTest", () => {

    function gcd(a: number, b: number): number {
        while (b !== 0) {
            let t: number = b;
            b = a % t;
            a = t;
        }
        return a;
    }

    it("one and one", () => {
        expect(gcd(1, 1)).toEqual(1);
    });
});