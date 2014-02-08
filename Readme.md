#StripperJS

This is the early formation of a bookmarklet script that will strip unnecessary content from a web page, leaving only relevant content in the form of paragraphs. The script is intended for front-end devs to be able to easily copy content from a client's existing website for use in their new website.

##Get the bookmarklet

Drag/drop the link below onto your bookmarks bar.

#<a href="javascript:var rem=document.querySelectorAll("nav, *.nav, *.menu, footer, aside, header, body script, body style, body noscript, hr, img, iframe, embed, object, video, audio, canvas, map, area, svg, math, form, details, summary, menuitem, menu"),elem=document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");for(console.log(rem),i=0,len=rem.length;len>i;i++)rem[i].parentNode.removeChild(rem[i]);for(console.log(elem),i=0,len=elem.length;len>i;i++){var textContent="<p>"+elem[i].textContent+"</p>";elem[i].parentNode.removeChild(elem[i]),document.write(textContent)}" title="StripperJS">StripperJS</a>