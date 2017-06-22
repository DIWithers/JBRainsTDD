import {Fraction} from "../src/AddFractions";

describe("GreatestCommonDivisorTest", () => {

    function gcd(a: number, b: number): number {
        while (b !== 0) {
            let t: number = b;
            b = a % t;
            a = t;
        }
        return Math.abs(a);
    }

    it("reflexive examples", () => {
        expect(gcd(1, 1)).toEqual(1);
        expect(gcd(2, 2)).toEqual(2);
        expect(gcd(-1, -1)).toEqual(1);
    });
    it("relatively prime examples", () => {
        expect(gcd(2, 3)).toEqual(1);
        expect(gcd(4, 7)).toEqual(1);
        expect(gcd(-2, -3)).toEqual(1);
    });
    it("examples of one being multiple of other", () => {
        expect(gcd(3, 9)).toEqual(3);
        expect(gcd(5, 30)).toEqual(5);
    });
    it("common factor examples", () => {
        expect(gcd(6, 8)).toEqual(2);
        expect(gcd(49, 315)).toEqual(7);
        expect(gcd(-24, -28)).toEqual(4);
    });

    it("negative examples", () => {
        expect(gcd(-24, 28)).toEqual(4);
        expect(gcd(24, -28)).toEqual(4);


    });
});