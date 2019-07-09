/*

*/


function update() {
    var x = document.getElementById('in1').value;
    //console.log('x =' + x);
    //console.log('x.length' + x.length);
    //document.getElementById('info2').innerHTML = 'x.length = ' + x.length
    var ele = document.getElementById('info1');
    var y = '';

    for (var i = 0; i < x.length; i++){
        y += x.charAt(i)
        y += ' U+';
        y += x.charCodeAt(i).toString(16).toUpperCase();
        y += '<br>';
    }


    ele.innerHTML = y ;

    document.getElementById('info3').innerHTML =
    document.getElementById('in1').value.replace('幹','X')
}


function start(e) {
    //  http://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
    document.getElementById('in1').addEventListener("input", update);

    update();
}

window.addEventListener( "load", start, false );
