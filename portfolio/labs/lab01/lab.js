/*

*/


function start(e) {
var name = [
   {
       char: '李  ',
       big5: 'A7F5  ',
       cns: '1-4A57  ',
       unicode: '674E  '
   },
   {
       char:'冠  ',
       big5:'AB61  ',
       cns:'1-5025  ',
       unicode:'51A0  '
   },
   {
       char:'霆  ',
       big5:'BE5E  ',
       cns:'1-6F67  ',
       unicode:'9706  '
   }
  ];

var ele = document.getElementById("div1");

for (var i = 0; i<3; i++) {
     ele.innerHTML += name[i].char;
     ele.innerHTML += 'big5 =';
     ele.innerHTML += name[i].big5;
     ele.innerHTML += 'cns =';
     ele.innerHTML += name[i].cns;
     ele.innerHTML += 'unicode =';
     ele.innerHTML += name[i].unicode;
     ele.innerHTML += '<br>';
     }
}


window.addEventListener( "load", start, false );
