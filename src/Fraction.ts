export class Fraction {
    integerValue: number;
    constructor(integerValue: number) {
        this.integerValue = integerValue;
    }
    plus(that: Fraction): Fraction {
        return this;
    }
    intValue(): number {
       return 0;
    }

}