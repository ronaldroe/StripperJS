var e=document.querySelectorAll('p, div, span');
console.log(e);
for (i=0, len=e.length; i<len; i++){
	var t="<p>" + e[i].textContent + "</p>";
	e[i].parentNode.removeChild(e[i]);
	document.write(t);
}