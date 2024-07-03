const html_code = CodeMirror.fromTextArea(document.getElementById('html-code'), {
    mode: 'htmlmixed',
    theme: '3024-night',
    lineNumbers: true
});
const css_code = CodeMirror.fromTextArea(document.getElementById('css-code'), {
    mode: 'css',
    theme: '3024-night',
    lineNumbers: true
});
const js_code = CodeMirror.fromTextArea(document.getElementById('js-code'), {
    mode: 'javascript',
    theme: '3024-night',
    lineNumbers: true
});
const result = document.querySelector('#result');

function run() {
    localStorage.setItem('html_code', html_code.getValue());
    localStorage.setItem('css_code', css_code.getValue());
    localStorage.setItem('js_code', js_code.getValue());
    result.contentDocument.body.innerHTML = `<style>
    ::-webkit-scrollbar-thumb {
    background: #009ad6;
    }
    ::-webkit-scrollbar-track {
    background: #fff;
    }

    ${localStorage.css_code}
    </style>` 
    + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

html_code.on('change', () => run());
css_code.on('change', () => run());
js_code.on('change', () => run());

html_code.setValue(localStorage.html_code || '');
css_code.setValue(localStorage.css_code || '');
js_code.setValue(localStorage.js_code || '');

document.getElementById('execute').addEventListener('click', run)