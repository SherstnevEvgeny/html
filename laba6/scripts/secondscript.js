function replaceLast(input, output)
{
	let s = this.lastIndexOf(input);
	return this.slice(0, s) + output + this.slice(s + input.length);
}	