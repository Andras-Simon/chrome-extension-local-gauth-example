fetch(chrome.extension.getURL('src/auth.js'))
.then(res => res.text())
.then(src => init(src));

function init(src) {
    const myScript = document.createElement('script');
    myScript.innerText = src;
    const script = document.createElement('script');
    const btn = document.createElement('button');
    btn.id='signin';
    btn.innerHTML = 'Sign in with Google';

    script.setAttribute('src', "https://apis.google.com/js/api.js");
    script.setAttribute('onload', "this.onload=function(){};handleClientLoad()");
    script.setAttribute('onreadystatechange', "if (this.readyState === 'complete') this.onload()");
    script.setAttribute('async', "true");
    script.setAttribute('defer', "true");

    document.querySelector('body').appendChild(btn);
    document.querySelector('body').appendChild(myScript);
    document.querySelector('body').appendChild(script);
}