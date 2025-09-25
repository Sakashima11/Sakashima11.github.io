//======================================================
//Webサイトの要素をまとめて取得する
//======================================================
const title=document.getElementById('myTitle');
const button1=document.getElementById('myButton');
const button2=document.getElementById('button2');
//=======================================================
//クリックされたときの命令
//=======================================================
button1.addEventListener('click',()=>{title.innerHTML='ボタンが押されました！';});
button2.addEventListener('click',()=>{alert('ボタンが押されたよ！');});
