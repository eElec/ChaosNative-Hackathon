export function dateToStr(date) {
	return `${('0' + date.getUTCDate()).slice(-2)}/${('0' + date.getUTCMonth()).slice(-2)}/${date.getUTCFullYear()}`;
}

export function timeToStr(date) {
  let hours = date.getUTCHours();
  let mins = date.getUTCMinutes();
	return `${('0' + (hours%12)).slice(-2)}:${('0' + mins).slice(-2)} ${(hours/12 == 0)?'AM':'PM'}`;
}