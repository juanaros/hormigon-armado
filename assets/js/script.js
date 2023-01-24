const calculate = document.querySelector('#boton');
calculate.addEventListener('click', () => {
    const wBeam = document.querySelector('#anchoB').value;
    const hBeam = document.querySelector('#alturaD').value;
    resist = document.querySelector('#calidad').value;
    const momSol = document.querySelector('#momento').value;
    aMax = hBeam*(3/8)*0.85;
    fzCc = resist*wBeam*aMax;
    if (resist < 280) {
        cteFi = 0.9
    } else {
        cteFi = 0.85 - 0.5*((resist - 280)/70)
    }
    if (wBeam== '') {
        alert('Rellene todos los campos por favor')
    } else if (hBeam=='') {
        alert('Rellene todos los campos por favor')
    } else if (momSol=='') {
        alert('Rellene todos los campos por favor')
    } else {
        moUltLim = fzCc*cteFi*(hBeam-(aMax/2));
        document.querySelector("#result").innerHTML = moUltLim.toFixed(2);
    }
    if (momSol < (fzCc*cteFi*(hBeam-(aMax/2)))) {
        document.querySelector('#tipo-armadura').innerHTML = 'Solo a tracción'
    } else {
        document.querySelector('#tipo-armadura').innerHTML = 'A tracción y a compresión'
    }
});
