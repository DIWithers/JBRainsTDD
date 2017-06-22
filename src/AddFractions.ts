export class Fraction {
    numerator: number;
    denominator: number = 1;
    constructor(numerator: number, denominator?: number) {
        this.numerator = numerator;
        if (denominator) {
            this.denominator = denominator;
        }
    }

    plus(that: Fraction): Fraction {
        return new Fraction(this.numerator + that.numerator, this.denominator);
    }
}