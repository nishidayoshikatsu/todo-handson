console.log("test");

// index.htmlのaddListButtonクラスを取得
const addTask = document.getElementsByClassName("addListButton")[0];

// TODO: 削除ボタンを追加してみよう
addTask.addEventListener("click", (event) => {
  const task = "タスク追加";

  const viewTask = document.getElementsByClassName("viewTask")[0];
  const listItem = document.createElement("li"); // liタグを生成
  listItem.innerText = task; // listItemにtaskという変数の中身を入力
  viewTask.appendChild(listItem); // viewTaskの要素の中身の最後にlistItemを追加
});
