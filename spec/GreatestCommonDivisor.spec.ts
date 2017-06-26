import {Fraction} from "../src/AddFractions";
import { NumberTheory } from "../src/NumberTheory";

describe("GreatestCommonDivisorTest", () => {

    it("reflexive examples", () => {
        expect(NumberTheory.gcd(1, 1)).toEqual(1);
        expect(NumberTheory.gcd(2, 2)).toEqual(2);
        expect(NumberTheory.gcd(-1, -1)).toEqual(1);
    });
    it("relatively prime examples", () => {
        expect(NumberTheory.gcd(2, 3)).toEqual(1);
        expect(NumberTheory.gcd(4, 7)).toEqual(1);
        expect(NumberTheory.gcd(-2, -3)).toEqual(1);
    });
    it("examples of one being multiple of other", () => {
        expect(NumberTheory.gcd(3, 9)).toEqual(3);
        expect(NumberTheory.gcd(5, 30)).toEqual(5);
    });
    it("common factor examples", () => {
        expect(NumberTheory.gcd(6, 8)).toEqual(2);
        expect(NumberTheory.gcd(49, 315)).toEqual(7);
        expect(NumberTheory.gcd(-24, -28)).toEqual(4);
    });

    it("negative examples", () => {
        expect(NumberTheory.gcd(-24, 28)).toEqual(4);
        expect(NumberTheory.gcd(24, -28)).toEqual(4);
    });
    it("denominator of zero", () => {
        expect(NumberTheory.gcd(1, 0)).toEqual(1);
        expect(NumberTheory.gcd(0, 5)).toEqual(5);
        expect(NumberTheory.gcd(0, 0)).toEqual(0);
    });
});