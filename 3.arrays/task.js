
// ----------------- задача 1 -------------------------//
function compareArrays(arr1, arr2) {
	let result = 0;

	result = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

	return result; // boolean
}

// ----------------- задача 2 -------------------------//

function advancedFilter(arr) {

	let resultArr = 0;

	return resultArr = arr.filter(ithem => ithem > 0).filter(krat => krat % 3 === 0).map((num) => num * 10);
}
