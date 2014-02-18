var e = prompt("Enter comma-separated list of CSS selectors"),
	f = e.replace(/\s+/g,""),
	f = f.split(","),
	len = f.length,
	i = 0;

for(i=0; i<len; i++){
	f[i] = "body :not(" + f[i] + ")";
}

var f = f.toString(),
	rem = document.querySelectorAll(f);

for(i=0; i<len; i++){
	rem[i].parentNode.removeChild(rem[i]);
}

/*for(i=0, len=e.length; i<len; i++){
	var text = '<p>' + e[i].textContent + '<p>';
	e[i].parentNode.removeChild(e[i]);
	document.write(text);
}*/
console.log(rem);
console.log(f);