export function dateComparer(a: Date, b: Date) {
	return a.getDate() - b.getDate();
}

export function numberComparer(a: unknown, b: unknown) {
	return (a as number) - (b as number);
}

export function descNumberComparer(a: unknown, b: unknown) {
	return (b as number) - (a as number);
}

export function stringComparer(a: string, b: string) {
	return a.localeCompare(b);
}

export function defaultComparer(a: unknown, b: unknown) {
	const aType = typeof a;
	const bType = typeof b;
	if (aType === bType) {
		switch (aType) {
			case 'string':
				return stringComparer(a as string, b as string);
			case 'number':
			case 'boolean':
				return numberComparer(a, b);
			default:
				if (a instanceof Date && b instanceof Date) {
					return dateComparer(a, b);
				}
		}
	}
	throw new TypeError('Inform a comparer function!');
}
