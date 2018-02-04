import TsDeepCopy from '@src/ts/main';

import * as mocha from 'mocha';
import * as chai from 'chai';

function test(): void {
	const tgt = TsDeepCopy;
	let master: c.I1 = c.obj;
	let copy: c.I1;
	describe('@src/ts/main', () => {
		describe('Deepcopied object\'s child value changed', () => {
			it('should be different from master\'s.', () => {
				copy = TsDeepCopy<c.I1>(master);
				master.a = 2;
				chai.assert.notStrictEqual(master.a, copy.a);
			});
		});
		describe('Deepcopied object\'s child date changed', () => {
			it('should be different from master\'s.', () => {
				copy = TsDeepCopy<c.I1>(master);
				master.j.setDate(master.j.getDate() + 1);
				chai.assert.notStrictEqual(master.j.getDate(), copy.j.getDate());
			});
		});
		describe('Deepcopied object\'s grandchild value changed', () => {
			it('should be different from master\'s.', () => {
				copy = TsDeepCopy<c.I1>(master);
				master.i.a = 3;
				chai.assert.notStrictEqual(master.i.a, copy.i.a);
			});
		});
		describe('Deepcopied object\'s grandchild array changed', () => {
			it('should be different from master\'s.', () => {
				copy = TsDeepCopy<c.I1>(master);
				master.c.a[0].a = 'changed';
				chai.assert.notStrictEqual(master.c.a[0].a, copy.c.a[0].a);
			});
		});
		describe('Deepcopied object\'s child function changed', () => {
			it('should be different from master\'s.', () => {
				copy = TsDeepCopy<c.I1>(master);
				master.h = (): string => { return 'changed'; };
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
		c: {
			a: { a: string }[],
		};
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
		j: Date;
	}
	export const obj: c.I1 = {
		// Primitive value
		a: 1,
		b: 'b',
		c: {
			a: [
				{ a: 'caa1' },
				{ a: 'caa2' },
			],
		},
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
		j: new Date(),
	};
}

test();
