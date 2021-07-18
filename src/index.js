console.log("test");

// index.htmlのaddListButtonクラスを取得
const addTask = document.getElementsByClassName("addListButton")[0];
const content = document.getElementsByClassName("inputContent")[0];

// TODO: 削除ボタンを追加してみよう
addTask.addEventListener("click", (event) => {
  const task = content.value;

  const viewTask = document.getElementsByClassName("viewTask")[0];
  const listItem = document.createElement("li"); // liタグを生成

  const removeButton = document.createElement("button"); // 削除ボタンを追加
  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => {
    const targetTask = removeButton.closest("li");
    viewTask.removeChild(targetTask);
  });

  listItem.innerText = task; // listItemにtaskという変数の中身を入力
  listItem.append(removeButton);

  viewTask.appendChild(listItem); // viewTaskの要素の中身の最後にlistItemを追加
  // 入力後、入力フォームの値を削除する
  content.value = "";
});

// TODO: 関数を使ってコードを読みやすくしよう
