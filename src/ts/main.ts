/**
 * Deepcopy function for TypeScript.
 * @param Tp Generic type of target/copied value.
 * @param tgt Target value to be copied.
 */
export default function TsDeepCopy<Tp>(tgt: Tp): Tp {
	return c.execute<Tp>(tgt);
}
/**
 * Constants.
 *
 */
namespace c {
	/**
	 * Executes deepcopy.
	 * @param Tp Generic type of target/copied value.
	 * @param tgt Target value to be copied.
	 */
	export function execute<Tp>(tgt: Tp): Tp {
		let cp: Tp;
		let ptn: number = 0;
		if (tgt === null) {
			cp = tgt;
		} else if (Array.isArray(tgt)) {
			cp = [] as any;
			(tgt as any[]).forEach((v, i, arr) => { (cp as any).push(v); });
			cp = (cp as any).map((n: any) => c.execute<any>(n));
		} else if ((typeof(tgt) === 'object') && (tgt !== {})) {
			cp = { ...(tgt as Object) } as Tp;
			Object.keys(cp).forEach(k => {
				(cp as any)[k] = c.execute<any>((cp as any)[k]);
			});
		} else {
			cp = tgt;
		}
		return cp;
	}
	export function isPrimitive() {

	}
}
