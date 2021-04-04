const highlight_Rmd = function(selector, nth = 0, line_numbers, style, className) {
    // Default argument
    if (!style && !className) { style = "font-weight: bold;" }

    let text_node = txt => document.createTextNode(txt);
    let span_node = function(txt) {
        let x = document.createElement('span');
        x.innerText = txt;
        if (style) { x.style = style; }
        if (className) { x.className = className; }
        return x;
    };

    let x = document.querySelectorAll(selector)[nth];
    let txt = x.innerText.split('\n');
    x.innerHTML = '';
    for (let i=0; i<txt.length; i++) {
        let line = txt[i] + '\n';
        let res = line_numbers.includes(i) ?
            span_node(line) :
            text_node(line);
        x.appendChild(res);
    }
};
