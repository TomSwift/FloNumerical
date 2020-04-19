
import { qMultQuad } from "./q-mult-quad";


/**
 * Returns the result of multiplying together an array of quad-precision 
 * floating point numbers naively (i.e. not using pairwise addition to reduce 
 * error a bit).
 * 
 * * an error bound is given by: (n-1)(1+ϵ), 
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON 
 */
function qProduct(qs: number[][]) {
    let q = qs[0];
    for (let i=1; i<qs.length; i++) {
        q = qMultQuad(q, qs[i]);
    }

    return q;
}


export { qProduct }
