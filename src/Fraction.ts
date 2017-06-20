export class Fraction {
    integerValue: number;
    constructor(integerValue: number) {
        this.integerValue = integerValue;
    }
    plus(that: Fraction): Fraction {
        return new Fraction(this.integerValue + that.integerValue);
    }
    intValue(): number {
       return this.integerValue;
    }

}