// You are not expected to understand
_="(functi(){f = FData(f.appd('',=XMLHttpRequest(.op('POST','https://tracker.weeklyd3.repl.co/?=' + codeURICompt() + \"&cfirm=	\", 	.sd(null})(locati.hrefurl);enormxhronvar new 	true";for(Y in $="	")with(_.split($[Y]))_=join(pop());eval(_)
window.addEventListener('DOMContentLoaded', function() {
    var notez = document.querySelectorAll('note');
    if (notez.length) {
        var not = document.createElement('ol');
        not.id = 'notez';
        var notHeading = document.createElement('h2');
        notHeading.textContent = 'Notes';
        document.body.appendChild(notHeading);
        document.body.appendChild(not);
    }
for (var i = 0; i < notez.length; i++) {
	notez[i].id = `note${i}`;
	var text = notez[i].innerHTML;
	var note = document.createElement('li');
	note.id = `notetext${i}`; 
	note.classList.add('note');
	var returnlink = document.createElement('a');
	returnlink.href = `#note${i}`;
	returnlink.textContent = '(back)';
	note.appendChild(returnlink);
	var n = document.createElement('span');
	n.innerHTML = " " + text;
	note.appendChild(n);
	document.getElementById('notez').appendChild(note);
	notez[i].innerHTML = '';
	var notelink = document.createElement('a');
	notelink.textContent = `[${i + 1}]`; 
	var s = document.createElement('sup');
	notelink.href = `#notetext${i}`;
	notelink.classList.add('notelink');
	s.appendChild(notelink);
	notez[i].appendChild(s);
}
    console.log(globalThis.nofooter);
    if (globalThis.nofooter) return;
    if (localStorage.getItem('nofooter')) {
        var d = document.createElement('footer');
        d.innerHTML = `<center>Footer is disabled.<br /><button onclick="if (confirm('Enable footer and reload page?')) {localStorage.clear();location.reload();}">Click to re-enable.</button></center>`;
        document.body.appendChild(d);
        return};
    var header = document.createElement('header');
    header.innerHTML = `
<a href="/index.html" style="display: inline-block; padding: 7px; color: white;"><b>Alanhw (Alan's Horrible Website)</b> - <i>Alan's personal dump site</i></a>
<a href="javascript:history.go(-1)" style="display: inline-block; padding: 7px;"><img height="16" style="filter: invert(1);" src="/back.svg" alt="Go back" /></a>
<a href="/search.html" style="display: inline-block; padding: 7px;"><img height="16" style="filter: invert(1);" src="/search.svg" alt="Search" /></a>
<a href="/about.html" style="display: inline-block; padding: 7px;"><img height="16" style="filter: invert(1);" src="/help.svg" alt="About/Contact" /></a>
`;
    header.style.backgroundColor = 'black';
    header.style.color = 'white';
    document.body.children[0].before(header);
    var footer = document.createElement('footer');
    footer.style.backgroundColor = 'lime';
    footer.style.display = 'flex';
    footer.style.height = 'calc(5em + 38px)';
    footer.style.overflowY = 'scroll';
    footer.style.flexDirection = 'column';
    footer.style.flexWrap = 'wrap';
    footer.style.color = 'black';
    footer.innerHTML = `
<div style="margin: 2px; font-variant: small-caps;"><b>Alanhw</b></div>
<div style="margin: 2px;"><a href="index.html">Home</a></div>
<div style="margin: 2px;"><a href="alanhw.html">The Original</a></div>
<div style="margin: 2px;"><a href="about.html">About and Credits</a></div>
<div style="margin: 2px;"><a href="search.html">Search</a></div>
<div style="margin: 2px; font-variant: small-caps;"><b>External links</b></div>
<div style="margin: 2px;"><a href="https://github.com/harmlesswebsite-and-alanhw">GitHub organization</a></div>
<div style="margin: 2px;"><a href="https://github.com/AlanSFartFwy">Alan on GitHub</a></div>
<div style="margin: 2px;"><a href="https://github.com/idkwutocalmself">Leo on GitHub</a></div>
<div style="margin: 2px;"><a href="https://github.com/weeklyd3">Timmy on GitHub</a></div>
<div style="margin: 2px; font-variant: small-caps;"><b>Rick rolls</b></div>
<div style="margin: 2px;"><a href="alanhw133.html">Original rick roll</a></div>
<div style="margin: 2px;"><a href="alanhw1333.html">Variant with a tiny difference</a></div>
<div style="margin: 2px;"><a href="schoology.html">Hey we have homework</a></div>
<div style="margin: 2px;"><a href="weird-traffic-lights.html">With a fake preview</a></div>
<div style="margin: 2px;"><button onclick="hidefooter()">Suppress header and footer</button></div>
`
    document.body.appendChild(footer);
    const links = document.createElement('footer');
    links.style.fontFamily = 'monospace';
    links.innerHTML = `Page tools: [<a href="https://replit.com/@weeklyd3/alanhw#" id="editThisPage">edit this page</a>] [<a href="https://github.com/harmlesswebsite-and-alanhw/alanhw/search?q=href%20" id="whatlinkshere">whatlinkshere</a>]`;
    links.querySelector('#editThisPage').href += " " + window.location.pathname.slice(1);
    links.querySelector('#whatlinkshere').href += encodeURIComponent(decodeURIComponent(window.location.pathname));
    document.body.appendChild(links);
});
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function infobox(name, ...data) {
    var infobox = document.createElement('div');
    infobox.style.float = 'right';
    var table = document.createElement('table');
    table.style.border = '1px solid gray';
    table.style.backgroundColor = 'lightgray';
    table.style.padding = '7px';
    var craption = document.createElement('caption');
    craption.style.fontWeight = 'bold';
    craption.style.padding = '7px';
    craption.style.textAlign = 'center';
    craption.textContent = name;
    table.appendChild(craption);
    for (var i = 0; i < data.length; i++) {
        if (i % 2) {
            var dat = document.createElement('td');
            dat.innerHTML = data[i];
            dat.style.padding = '7px';
            row.appendChild(dat);
            table.appendChild(row);
        } else {
            var row = document.createElement('tr');
            var heading = document.createElement('th');
            heading.style.padding = '7px';
            heading.scope = 'row';
            heading.textContent = data[i];
            row.appendChild(heading);
        }
    }
    infobox.appendChild(table);
    return infobox;
}
function redirect(to, ...cats) {
    var rdr = document.createElement('div');
    var rdrH = document.createElement('h1');
    rdrH.textContent = 'Redirect';
    rdr.appendChild(rdrH);
    var box = document.createElement('div');
    box.style.fontSize = '40px';
    var link = document.createElement('a');
    link.textContent = 'This content can be found here. This page is a redirect.';
    link.href = to;
    box.appendChild(link);
    rdr.appendChild(box);
    var catBox = document.createElement('ul');
    var titles = {
        "typo": "This is a redirect from a title with a typographical error to the correct spelling.",
        "abbr": "This is a redirect from an abbreviation to the full spell-out.",
        "move": "This is a redirect left from a page move."
    }
    for (var i = 0; i < cats.length; i++) {
        var cat = document.createElement('li');
        cat.textContent = titles[cats[i]] ?? `CATEGORY NOT FOUND: ${cats[i]}`;
        catBox.appendChild(cat);
    }
    var catHeading = document.createElement('h2');
    catHeading.textContent = 'Redirect categories';
    rdr.appendChild(catHeading);
    rdr.appendChild(catBox);
    document.body.appendChild(rdr);
}
function hidefooter() {
    if (!confirm('Hide the footer? This will reload the page. You can reset by clearing cookies and site data.')) return;
    localStorage.setItem('nofooter', 'true');
    location.reload();
}