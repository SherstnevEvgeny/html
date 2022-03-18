function sum()
{
	var v1 = parseInt(document.getElementById("la4").value);
	var v2 = parseInt(document.getElementById("la5").value);
	document.getElementById("la6").value = v1 - v2;
}

function check()
{
	
	let inp = document.getElementsByName('rad')
	let t1 = document.getElementsByName('tex1')
	let t2 = document.getElementsByName('tex2')
	let t3 = document.getElementsByName('tex3')
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
        	if (i == 0){
        		t1[0].removeAttribute('disabled')
        		t2[0].setAttribute('disabled', 'disabled')
        		t3[0].setAttribute('disabled', 'disabled')
        	}

        	if (i == 1){
        		t2[0].removeAttribute('disabled')
        		t1[0].setAttribute('disabled', 'disabled')
        		t3[0].setAttribute('disabled', 'disabled')
        	}

        	if (i == 2){
        		t3[0].removeAttribute('disabled')
        		t1[0].setAttribute('disabled', 'disabled')
        		t2[0].setAttribute('disabled', 'disabled')
        	}

            
        }
    }
}

function liste()
{
	let inp = document.getElementsByName('chb')
	let ss = document.getElementsByName('sel')
	if (inp[0].checked == true){
		ss[0].removeAttribute('disabled')
	}
	else{
		ss[0].setAttribute('disabled', '')
	}

}

function lista()
{
	let inp = document.getElementsByName('sel')
	alert('#' + inp[0].selectedIndex + ' ' + inp[0].value)


}

function chgnm()
{
	let inp = document.getElementsByName('tex5')
	let mnp = document.getElementsByName('butt')
	mnp[0].value = inp[0].value
	
}

function foc()
{
	const inp = document.getElementsByName('tex7')
	inp[0].focus();
	inp[0].select();
}

