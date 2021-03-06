
import { getLowestSetBit, getHighestSetBit } from "./get-max-set-bit";
import { eCompress } from "../double-expansion/e-compress";
import { exponent } from "./exponent";
import { eSign } from "../double-expansion/e-sign";


/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a A double precision floating point number
 */
function bitLength(a: number) {
    if (a === 0) { return 0; }

    return getHighestSetBit(a) - getLowestSetBit(a) + 1;
}


/**
 * Returns the bit-length of the significand of the given floating point 
 * expansion in such a way that trailing zeros are not counted.
 * * precondition: subnormals not currently supported
 * @param a A double precision floating point expansion
 */
function expBitLength(a: number[]) {
    let a_ = eCompress(a);
    if (eSign(a_) === 0) { return 0; }

    let msbyte = a_[a_.length-1];
    let lsbyte = a_[0];

    return exponent(msbyte) - exponent(lsbyte) + (53 - getLowestSetBit(lsbyte));
}


export { bitLength, expBitLength }
