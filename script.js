alert('Hello!,JavaScript!');
//「myBottun」という名前のボタンを見つけて、buttonという変数に保存する
const button=document.getElementById('myButton');
//そのボタンが「クリック」されたら、alertの命令を実行する
button.addEventListener('click',()=>{alert('ボタンが押されたよ！');});
//HTMLから「myTitle」というIDを持つ要素を探して、title変数に入れる
const title=document.getElementById('myTitle');
title=document.addEventListener('click',()=>{alert('ボタンが押されたよ！');});
