export function checkDateWithToDate(today, fromDate, toDate) {
	const todayDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate()
	);
	const fromDateOnly = new Date(
		fromDate.getFullYear(),
		fromDate.getMonth(),
		fromDate.getDate()
	);
	const toDateOnly = new Date(
		toDate.getFullYear(),
		toDate.getMonth(),
		toDate.getDate()
	);

	if (
		fromDateOnly.getTime() >= todayDate.getTime() &&
		toDateOnly.getTime() > todayDate.getTime() &&
		fromDateOnly.getTime() < toDateOnly.getTime()
	) {
		return true;
	}

	return false;
}

export function checkSingularDate(today, fromDate) {
	const todayDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate()
	);
	const fromDateOnly = new Date(
		fromDate.getFullYear(),
		fromDate.getMonth(),
		fromDate.getDate()
	);
	console.log(fromDateOnly.getTime());
	console.log(todayDate.getTime());
	if (fromDateOnly.getTime() >= todayDate.getTime()) {
		return true;
	}

	return false;
}
