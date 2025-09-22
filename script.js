alert('Hello!,JavaScript!');
//「myBottun」という名前のボタンを見つけて、buttonという変数に保存する
const button=document.getElementById('myButton');
//そのボタンが「クリック」されたら、alertの命令を実行する
button.addEventListener('click',()=>{alert('ボタンが押されたよ！');});
