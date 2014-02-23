var e = prompt("Enter comma-separated list of CSS selectors"),
	f = document.querySelectorAll(e),
	len = f.length,
	rem = document.querySelectorAll('*'),
	remLen = rem.length,
	i=0
	keep = "";

for (i=0;i<len;i++){
	keep =  keep + "<p>" + f[i].textContent + "</p>";
}

for (i=0;i<remLen;i++){
	rem[i].parentNode.removeChild(rem[i]);
}

document.write(keep);

console.log(f);
console.log(keep);