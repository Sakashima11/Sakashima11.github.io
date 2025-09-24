//HTMLから「myTitle」というIDを持つ要素を探して、title変数に入れる
const title=document.getElementById('myTitle');
//ボタンの情報を取得する
const button=document.getElementById('myButton');
//buttonがクリックされたら、以下の命令を実行する
button.addEventListener('click',()=>{
  //titleの中身の文章を「ボタンが押されました！」に変更する
  title.innerHTML='ボタンが押されました！';
  //以前のalert()のコードはコメントアウトしておきます
  //alert('ボタンが押されたよ！');
});
