function daysdiff()
{
	let initialDate = new Date(2020, 8, 1); 
    let now = Date.now();
    let diff = now - initialDate;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let daysSince = Math.floor(diff / millisecondsPerDay);
    document.getElementById('show').innerHTML = daysSince.toString();
}