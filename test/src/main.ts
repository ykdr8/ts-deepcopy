import TsDeepCopy from '@src/ts/main';

import * as mocha from 'mocha';
import * as chai from 'chai';

function test(): void {
	const tgt = TsDeepCopy;
	let master: c.I1 = c.obj;
	let copy: c.I1 = TsDeepCopy<c.I1>(c.obj);
	describe('@src/ts/main', () => {
		describe('Deepcopied object\'s child value changed', () => {
			master.a = 2;
			it('should be different from master\'s.', () => {
				chai.assert.notStrictEqual(master.a, copy.a);
			});
		});
		describe('Deepcopied object\'s grandchild value changed', () => {
			master.i.a = 3;
			it('should be different from master\'s.', () => {
				chai.assert.notStrictEqual(master.i.a, copy.i.a);
			});
		});
		describe('Deepcopied object\'s child function changed', () => {
			master.h = (): string => { return 'hh'; };
			it('should be different from master\'s.', () => {
				chai.assert.notStrictEqual(master.h(), copy.h());
			});
		});
	});
}

/**
 * Constants.
 *
 */
namespace c {
	export interface I1 {
		// Primitive value
		a: number;
		b: string;
		c: string;
		d: number;
		e?: number;
		f: boolean;
		// Reference value
		g: number[];
		h(): string;
		i: {
			a: number;
			b: string;
			c: string;
			d: number;
			e: number;
			f: boolean;
			g: number[];
			h(): string;
			i: {
				a: number;
				b?: string;
			};
		};
	}
	export const obj: c.I1 = {
		// Primitive value
		a: 1,
		b: 'b',
		c: '',
		d: null,
		e: undefined,
		f: true,
		// Reference value
		g: [1, 2, 3],
		h: () => { return 'h'; },
		i: {
			a: 1,
			b: 'i.b',
			c: '',
			d: null,
			e: undefined,
			f: true,
			g: [1, 2, 3],
			h: () => { return 'i.h'; },
			i: { a: 1 },
		},
	};
}

test();
