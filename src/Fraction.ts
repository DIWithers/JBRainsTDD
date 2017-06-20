export class Fraction {
    integerValue: number;
    constructor(integerValue: number) {
        this.integerValue = integerValue;
    }
    plus(that: Fraction): Fraction {
        if (that.integerValue != 0) {
            return new Fraction(this.integerValue + that.integerValue);
        }
        else {
            return this;
        }
    }
    intValue(): number {
       return this.integerValue;
    }

}