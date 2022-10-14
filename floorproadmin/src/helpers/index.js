export function ucwords(word) {
	let str = word.toLowerCase();
	var words = str.split(' ');
	str = '';
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		word = word.charAt(0).toUpperCase() + word.slice(1);
		if (i > 0) { str = str + ' '; }
		str = str + word;
	}
    return str;
}