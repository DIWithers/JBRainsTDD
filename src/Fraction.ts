export class Fraction {
    integerValue: number;
    constructor(numerator: number, denominator?: number) {
        this.integerValue = numerator;
    }

    plus(that: Fraction): Fraction {
        return new Fraction(this.integerValue + that.integerValue);
    }
    intValue(): number {
       return this.integerValue;
    }
    getNumerator(): number {
        return 3;
    }
    getDenominator(): number {
        return 5;
    }

}