/**
 * Sorts an array of numbers, strings, or objects based on specified criteria
 * @template T - The type of elements in the array
 * @param {T[]} arrayOrParams - Array of numbers or strings to sort
 * @param {"asc" | "desc"} [direction="asc"] - Sort direction, ascending or descending
 * @returns {T[]} Sorted array
 */
function sortBy<T>(arrayOrParams: T[], direction?: "asc" | "desc"): T[];

/**
 * Sorts an array of objects based on a specific key
 * @template T - Type extending Record<string, any>
 * @param {Object} params - Sort parameters
 * @param {T[]} params.array - Array of objects to sort
 * @param {keyof T} params.key - Object key to sort by
 * @param {"asc" | "desc"} [params.direction="asc"] - Sort direction, ascending or descending
 * @returns {T[]} Sorted array of objects
 */

function sortBy<T extends Record<string, any>>(params: {
	array: T[];
	key: keyof T;
	direction?: "asc" | "desc";
}): T[];

function sortBy<T>(
	arrayOrParams: T[] | { array: T[]; key: keyof T; direction?: "asc" | "desc" },
	direction: "asc" | "desc" = "asc",
): T[] {
	let arrayResult: T[] = [];
	// array of numbers or strings
	if (Array.isArray(arrayOrParams)) {
		arrayResult = arrayOrParams.sort((a, b) => {
			if (!Number.isNaN(Number(a)) && !Number.isNaN(Number(b))) {
				const aValue = a as number;
				const bValue = b as number;
				return direction === "asc" ? aValue - bValue : bValue - aValue;
			}

			const aValue = a as string;
			const bValue = b as string;
			if (direction === "asc") {
				return aValue?.localeCompare(bValue);
			}
			return bValue?.localeCompare(aValue);
		});
	} else {
		// array of objects
		const sortDirection = arrayOrParams.direction ?? "asc";
		arrayResult = arrayOrParams.array.sort((a, b) => {
			const aValue = a[arrayOrParams.key] as string | number;
			const bValue = b[arrayOrParams.key] as string | number;

			if (!Number.isNaN(Number(aValue)) && !Number.isNaN(Number(bValue))) {
				const aValueNumber = aValue as number;
				const bValueNumber = bValue as number;
				return sortDirection === "asc"
					? aValueNumber - bValueNumber
					: bValueNumber - aValueNumber;
			}
			const aValueString = aValue as string;
			const bValueString = bValue as string;
			if (sortDirection === "asc") {
				return aValueString?.localeCompare(bValueString);
			}
			return bValueString?.localeCompare(aValueString);
		});
	}
	return arrayResult;
}

export { sortBy };
