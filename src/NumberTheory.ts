export class NumberTheory {

    static gcd(a: number, b: number): number {
    while (b !== 0) {
        let t: number = b;
        b = a % t;
        a = t;
    }
    return Math.abs(a);
}
}