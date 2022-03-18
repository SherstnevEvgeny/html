function openw()
{
	var w1 = window.open('win1.html','','width=100,height=200,top=300, left=700');
}

function closew()
{
	w1 = window.close()
}

function alrt()
{
	let a1 = window.alert('Hello!')
}

function cnfrm()
{
	let c1 = window.confirm('Нажмите ок, если вы нажали на "Confim"')
}

function prmpt()
{
	let p1 = window.prompt('Введите строку', '')
	return p1
}

a=new Array("../images/1.gif","../images/2.gif","../images/3.gif")
i=1

function chng()
{
	if (i>2) i=0
	document.getElementById('ii').src=a[i]
	i++
}

function chngurl()
{
	let n = document.getElementById('text1').value
	if ((n=='1') || (n=='2') || (n=='3'))
	{
		let a = '../images/' + n + '.gif'
		document.getElementById('ii').src = a
	}
}

function btnchng(a)
{
	if (a==1) document.getElementById('b1').value='уводи скорее!' 
	if (a==2) document.getElementById('b1').value='Наведи' 
}


function chngbackfont(backcolor, fontcolor)
{
	document.getElementById('f1').style.color=fontcolor
	document.body.style.backgroundImage="none"
	document.body.style.backgroundColor=backcolor
}

function chngt(wid, col)
{
	document.getElementById('t1').style.borderColor=col
	document.getElementById('t1').style.borderWidth=wid + 'px'
}

function tover(a)
{
	if (a==1) 
	{
		document.getElementById('p1').style.fontStyle='italic'
		document.getElementById('p1').style.fontWeight='bold'
	}
	if (a==2)
	{
		document.getElementById('p1').style.fontStyle='normal'
		document.getElementById('p1').style.fontWeight='normal'
	}
	if (a==3)
	{
		document.getElementById('p1').style.opacity='0.3'
	}
	if (a==4)
	{
		document.getElementById('p1').style.opacity='1'
	}
}

function calc()
{
	let res = parseInt(document.getElementById('text1').value)+parseInt(document.getElementById('text2').value)
	document.getElementById('t1').innerHTML=res
}
