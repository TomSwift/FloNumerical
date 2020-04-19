
import { assert, expect } from 'chai';
import { describe } from 'mocha';

import { twoSum } from '../../src/double-expansion/two-sum';
import { expansionDiv } from '../../src/double-expansion/expansion-div';
import { expansionProduct, isNonOverlapping } from '../../src';


describe('expansionDiv', function() {
	it('should divide two numbers without any error if the division is exact or to within the given bitlength if not exact', 
	function() {/*
        {
			let a = [2458624];
			let b = [784];
			expect(expansionDiv(a,b,0)).to.eql([
				3136
			]);
        }
        
		{
			let a = [0.2];
			let b = [0.1];
			expect(expansionDiv(a,b,20)).to.eql([
				2
			]);
        }

		{
			let a = [1];
			let b = [3];
			for (let i=1; i<20; i++) {
				let c = expansionDiv(a,b,i); // === 1/3
				let d = expansionProduct([3], c); // === 3 * 1/3 === 1
				assert(d[0] < Number.EPSILON**i);
				assert(d[1] === 1);
			}
		}
		
		{
			// 6.596335828304291 === 110668151*2**-24
			// 0.000017464160919189453 === 293*2**-24
			// 110668151 / 293 === 377707
			// => 6.596335828304291 / 0.000017464160919189453 === 377707 (exactly)
			// Also, 293*2**-14 === 0.01788330078125
			// => 6.596335828304291 / 0.01788330078125 === 368.8544921875 (exactly)

			let n1 = [6.596335828304291*(2**24)] // === 110668151
			let n2 = [293*(2**51)]; // 659777345409777700
			let n3 = [n1[0], n2[0]];

			let d = [0.01788330078125*(2**14)]; // === 293
			
			let res = expansionDiv(n3,d,20*2**3);
			expect(res).to.eql([
				2251799814062955
			]);
		}
		
		{
			// 6.596335828304291 === 110668151*2**-24
			// 0.000017464160919189453 === 293*2**-24
			// 110668151 / 293 === 377707
			// => 6.596335828304291 / 0.000017464160919189453 === 377707 (exactly)
			// Also, 293*2**-14 === 0.01788330078125
			// => 6.596335828304291 / 0.01788330078125 === 368.8544921875 (exactly)

			let n1 = [6.596335828304291*(2**0)] // === 110668151
			let n2 = [293*(2**27)]; // 659777345409777700
			let n3 = [n1[0], n2[0]];

			let d = [0.01788330078125*(2**14)]; // === 293
			
			let res = expansionDiv(n3,d,20*2**3);
			expect(res).to.eql([
				134217728.0225131
			]);
		}

		{
			// 6.596335828304291 === 110668151*2**-24
			// 0.000017464160919189453 === 293*2**-24
			// 110668151 / 293 === 377707
			// => 6.596335828304291 / 0.000017464160919189453 === 377707 (exactly)
			// Also, 293*2**-14 === 0.01788330078125
			// => 6.596335828304291 / 0.01788330078125 === 368.8544921875 (exactly)

			let n1 = [6.596335828304291*(2**0)] // === 6.596335828304291
			let n2 = [293*(2**27)]; // === 39325794304
			let n3 = [n1[0], n2[0]]; // 

			let d = [0.01788330078125*(2**0)]; // === 293/16384 (293/2**14)
			
			//let res = expansionDiv(n1,d,20*2**3); // === 368.8544921875
			//let res = expansionDiv(n2,d,20*2**3); // === 2199023255552
			//let res = expansionDiv(n3,d,20*2**3);
			let res = expansionDiv(n3,d,0);
			//console.log('------------------');
			//console.log(res);
			//console.log('------------------');
			//console.log('non-overlapping', isNonOverlapping(6.596335828304291, 39325794304));
			expect(res).to.eql([
				2199023255920.8545
			]);
		}*/

		{
			// a = (2**22 * 163*167*173*179*181*191*193) + (2*2*163*193) // <= prime numbers
			//   = (2**22 * 5624351580503521) + (125836)
			// b = 163*193 = 31459
			let a = [125836, 2**22 * 5624351580503521];
			let b = [31459];
			// 528068099487215
			console.log(expansionDiv(a,b,0)); // =>  52806810
			/*expect(expansionDiv(a,b,0)).to.eql([
				3136
			]);*/
        }	
	});
});