import TsDeepCopy from "@src/ts/main";

import * as mocha from "mocha";
import * as chai from "chai";

function test():void {
    const tgt = TsDeepCopy;
	let master:c.I1 = c.obj;
	let copy:c.I1 = TsDeepCopy<c.I1>(c.obj);
	describe("@src/ts/main", function () {
		describe("Deepcopied object\'s child value changed", function () {
			master.a = 2;
			it("should be different from master\'s.", function() {
				chai.assert.notStrictEqual(master.a, copy.a);
			});
		});
		describe("Deepcopied object\'s grandchild value changed", function () {
			master.i.a = 3;
			it("should be different from master\'s.", function() {
				chai.assert.notStrictEqual(master.i.a, copy.i.a);
			});
		});
		describe("Deepcopied object\'s child function changed", function () {
			master.h = function():string { return "hh" };
			it("should be different from master\'s.", function() {
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
		h():string;
		i: {
			a: number;
			b: string;
			c: string;
			d: number;
			e: number;
			f: boolean;
			g: number[];
			h():string;
			i: {
				a: number;
				b?: string;
			};
		};
	}
	export const obj:c.I1 = {
		// Primitive value
		a: 1,
		b: "b",
		c: "",
		d: null,
		e: undefined,
		f: true,
		// Reference value
		g: [1, 2, 3],
		h: function () { return "h"; },
		i: {
			a: 1,
			b: "i.b",
			c: "",
			d: null,
			e: undefined,
			f: true,
			g: [1, 2, 3],
			h: function () { return "i.h"; },
			i: { a: 1 }
		}
	}
}

test();
