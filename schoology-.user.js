// ==UserScript==
// @name         Schoology Minus
// @description  Mod the interface
// @version      8.8.8.5
// @author       weeklyd3
// @match        https://bins.schoology.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=schoology.com
// @grant        none
// ==/UserScript==
function save_settings(img, resources, grades, homehref) {
    localStorage.setItem('img_url', img);
    localStorage.setItem('resources', resources);
    localStorage.setItem('grades', grades);
    localStorage.setItem('homehref', homehref);
}
function letterGrade(grade) {
    if (grade > 100) return 'IDK why you are so good at this';
    if (90 <= grade && grade <= 100) return 'A - AVERAGE and AWFUL!';
    if (80 <= grade && grade < 90) return 'B - STOOBID';
    if (70 <= grade && grade < 80) return 'C - REDO IT';
    if (60 <= grade && grade < 70) return 'D - I AM SO MAD';
    return 'F - YOU ARE A FALIURE. Find a new family.';
}
function getGradeColor(letterGrade) {
    switch (letterGrade.charAt(0)) {
        case 'I':
            return 'green';
            break;
        case 'A':
            return '#69b34c';
            break;
        case 'B':
            return '#acb334';
            break;
        case 'C':
            return '#fab733';
            break;
        case 'D':
            return '#ff8e15';
            break;
        case 'F':
            return '#ff4e11';
            break;
    }
}
window.letterGrade = letterGrade;
window.save_settings = save_settings;
(function() {
    'use strict';
    if (window.parent !== window) {
        // Probably an iframe.
        return;
    }
    if (window.location.href.includes('grades')) {
        // Probably a grades page
        if (document.querySelector('[class="gradebook-course-title"]')) {
             var grades = document.querySelectorAll('[class="grade-column"]');
            for (var j = 0; j < grades.length; j++) {
                var gradeTd = grades[j];
                if (!gradeTd.children[0].children[0]) continue;
                if (!gradeTd.children[0].children[1]) continue;
                console.log(gradeTd);
                var received = parseFloat(gradeTd.children[0].children[0].textContent);
                var total = parseFloat(gradeTd.children[0].children[1].textContent.slice(2));
                if (received !== received) {
                    // Sounds Cra-Z. That must be NaN.
                    continue;
                }
                gradeTd.children[0].children[2].style.margin = '3px';
                if (!total) {
                    gradeTd.children[0].children[2].textContent = '(ZERO TOTAL POINTS YA BIG NUB)';
                    continue;
                }
                var letter = letterGrade(100 * received / total);
                gradeTd.children[0].children[2].style.color = getGradeColor(letter);
                gradeTd.children[0].children[0].style.color = getGradeColor(letter);
                gradeTd.children[0].children[2].textContent = " (" + (100 * received / total) + "%) (" + letter + ")";
            }
        }
    }
    var actualSettings = document.createElement('div');
    actualSettings.setAttribute('id', 'poologysettings');
    actualSettings.setAttribute('style', 'z-index: 33283328; display: none;position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5);');
    actualSettings.innerHTML = `<div style="color: black; padding: 7px; position: fixed; top: 50%; left: 50%; overflow: scroll; width: 75%; height: 75%; transform: translate(-50%, -50%); background-color: white;"><h2>Schoology Minus Settings</h2>
    <form onsubmit="save_settings(document.getElementById('img').value, document.getElementById('resources').value, document.getElementById('grades').value, document.getElementById('homehref').value)">
    <ul>
    <li><label>Logo image: <input id="img" oninput="document.getElementById('load').style.display = 'block'; document.getElementById('error').style.display = 'none'; document.getElementById('peeview').src = this.value;" /></label>
    <div style="float: right;">
    Preview of image:<br />
    <img id="peeview" src="data:image/png;base64," alt="Preview" style="max-width: 50%; display: block;" onerror="document.getElementById('error').style.display = 'block'; document.getElementById('load').style.display = 'none';" onload="document.getElementById('load').style.display = 'none';" />
    <div id="load" style="display: none;">Loading...</div>
    <div id="error" style="display: none;">An error occurred while loading the image.</div>
    </div>
    </li>
    <li><label>Text of Resources: <input id="resources" /></label></li>
    <li><label>Text of 'Grades' link: <input id="grades" /></label></li>
    <li><label>Where should the logo link to? <input id="homehref" /></label></li>
    </ul>
    <input type="button" value="CANCEL" style="background-color: black; color: white;" onclick="if (confirm('Are you sure you want to exist? WHOOPS I meant exit')) document.getElementById('poologysettings').style.display = 'none';" />
    <input type="submit" value="SAVE" style="font-weight: 700; background-color: black; color: white;" onclick="document.getElementById('poologysettings').style.display = 'none'; location.reload();" />
    <br />
    <h3>Advanced configuration</h3>
    <p>You probably don't want to go here.</p>
    <input type="button" value="RESET ALL SETTINGS" style="background-color: black; color: white;" onclick="if (confirm('Resetting settings - are you sure!?')) { var ids = ['img_url', 'resources', 'grades', 'homehref']; for (var i = 0; i < ids.length; i++) localStorage.removeItem(ids[i]); location.reload(); }" />
    <p>Schoology Minus, version 8.8.8.5. Licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL 3.0 (or at your option any later version)</a>. Copyright &copy; 2022 weeklyd3.</p>
    </form>
    </div>`;
    var img_url = "data:image/png;base64,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";
    var img = localStorage.getItem('img_url') ?? img_url;
    document.body.appendChild(actualSettings);
    document.getElementById('img').value = img;
    document.getElementById('peeview').src = img;
    document.getElementById('resources').value = localStorage.getItem('resources') ?? 'ЯEEEESOURCES';
    document.getElementById('grades').value = localStorage.getItem('grades') ?? 'FALIURE GRADES';
    document.getElementById('homehref').value = localStorage.getItem('homehref') ?? 'https://alanhw.weeklyd3.repl.co/schoology.html';
    var poologyMinusButton = document.createElement('button');
    poologyMinusButton.addEventListener('click', function() { document.getElementById('poologysettings').style.display = 'block'; });
    poologyMinusButton.textContent = 'SCHOOLOGY MINUS SETTINGS';
    document.body.appendChild(poologyMinusButton);

    document.querySelector('a[href="/home"]').style.backgroundImage = `url(${img})`;
    document.querySelector('[href="/resources"]').textContent = localStorage.getItem('resources') ?? 'ЯEEEESOURCES';
      document.querySelector('a[href="/home"]').addEventListener('click', function(ev) {
        ev.stopImmediatePropagation();
        ev.preventDefault();
        location.href = localStorage.getItem('homehref') ?? 'https://alanhw.weeklyd3.repl.co/schoology.html';
    });
    document.querySelector('a[href="/home"]').setAttribute('href', localStorage.getItem('homehref') ?? 'https://alanhw.weeklyd3.repl.co/schoology.html');
    document.querySelector('[href="/grades/grades"]').textContent = localStorage.getItem('grades') ?? 'FALIURE GRADES';
})();