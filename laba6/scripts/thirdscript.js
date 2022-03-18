function sib() {
	let k = document.querySelectorAll('input[type = radio]');
	for (let i = 0; i<k.length; i++){
		k[i].nextElementSibling.style.visibility = 'hidden';
		if (k[i].checked){
		k[i].nextElementSibling.style.visibility = 'visible';
		}
	}
	
}