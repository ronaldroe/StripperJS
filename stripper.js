var rem=document.querySelectorAll('nav, *.nav, *.menu, footer, aside, header, body script, body style, body noscript, hr, img, iframe, embed, object, video, audio, canvas, map, area, svg, math, form, details, summary, menuitem, menu');
var elem=document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

console.log(rem);
for (i=0, len=rem.length; i<len; i++){
	rem[i].parentNode.removeChild(rem[i]);
}

console.log(elem);
for (i=0, len=elem.length; i<len; i++){
	var textContent='<p>' + elem[i].textContent + '</p>';
	elem[i].parentNode.removeChild(elem[i]);
	document.write(textContent);
}
div, span, header