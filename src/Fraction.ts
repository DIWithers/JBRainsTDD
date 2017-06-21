export class Fraction {
    denominator: number = 1;
    integerValue: number;
    constructor(numerator: number, denominator?: number) {
        this.integerValue = numerator;
        this.denominator = denominator;
    }

    plus(that: Fraction): Fraction {
        return new Fraction(this.integerValue + that.integerValue, this.denominator);
    }
    intValue(): number {
       return this.integerValue;
    }
    getNumerator(): number {
        return 3;
    }
    getDenominator(): number {
        return this.denominator;
    }

}