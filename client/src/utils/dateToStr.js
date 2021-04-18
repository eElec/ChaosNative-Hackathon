export function dateToStr(date) {
	return `${('0' + date.getUTCDate()).slice(-2)}/${(
		'0' + (date.getUTCMonth()+1)
	).slice(-2)}/${date.getUTCFullYear()}`;
}

export function timeToStr(date) {
	let hours = date.getUTCHours();
	let mins = date.getUTCMinutes();
	return `${('0' + (hours % 12)).slice(-2)}:${('0' + mins).slice(-2)} ${
		hours / 12 === 0 ? 'AM' : 'PM'
	}`;
}

// https://stackoverflow.com/a/23641753
export function parseDateFromInput(s) {
	let b = s.split(/\D/);
	return new Date(Date.UTC(b[0], b[1], b[2]));
}

export function parseTimeFromInput(d, s) {
	let b = s.split(/\D/);
	return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), b[0], b[1]));
}