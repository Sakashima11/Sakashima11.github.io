//HTMLから「myTitle」というIDを持つ要素を探して、title変数に入れる
const title=document.getElementById('myTitle');
//ボタンの情報を取得する
const button1=document.getElementById('myButton');
//ボタン2の情報を取得する
const button2=document.getElementById('button2');
//buttonがクリックされたら、以下の命令を実行する
button1.addEventListener('click',()=>{
  //titleの中身の文章を「ボタンが押されました！」に変更する
  title.innerHTML='ボタンが押されました！';
  //以前のalert()のコードはコメントアウトしておきます
  //alert('ボタンが押されたよ！');
});
//ボタン2がクリックされたら、以下の命令を実行する
button2.addEventListener('click',()=>{alert('ボタンが押されたよ！');});
