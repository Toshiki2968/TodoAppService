// 入力フォームで使用
import { useRef } from "react";

import { Container } from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import {Filter} from "./Filter";

// レイアウト


function App(){
  // hooksから使用する関数受け取り
  const {
    todoList, //現在の状態
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
    handleGetTodoListItem,
    handleGetCompletedTodoListItem,
    handleGetNotCompletedTodoListItem,
    editCancel,
    editTodoName,
    editTodoListItem
  } = useTodo();

  // refオブジェクト作成
  const inputTodo = useRef(null);
  const inputDate = useRef(null);

  // タスク追加後、入力フォーム初期化
  const handleAddTodoListItem = () => {

    // 入力フォームに何も入っていない場合、何もしない
    if(inputTodo.current.value === "") return;
    if(inputDate.current.value === "") return;

    // hooksから呼び出し
    // タスク追加
    addTodoListItem(inputTodo.current.value, inputDate.current.value);
    
    // 入力フォーム初期化
    inputTodo.current.value = "";
    inputDate.current.value = "";
  };

  return(
    <Container centerContent p={{base: "4", md: "6"}} maxWidth="3xl">
      {/* タスク追加 */}
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon/>}
        buttonText="TODOを追加"
        inputTodo={inputTodo}
        inputDate={inputDate}
        handleAddTodoListItem={handleAddTodoListItem}
      />

      {/* フィルター */}
      <Filter
        // 全件取得
        handleGetTodoListItem={handleGetTodoListItem}
        // 完了済み取得
        handleGetCompletedTodoListItem={handleGetCompletedTodoListItem}
        // 未完了取得
        handleGetNotCompletedTodoListItem={handleGetNotCompletedTodoListItem}
      />

      {/* タスク一覧 */}
      <TodoList
        // 現状タスク一覧
        todoList={todoList}
        // 完了⇔未完了
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        // タスク削除
        deleteTodoListItem={deleteTodoListItem}
        // 編集キャンセル
        editCancel={editCancel}
        // タスク名更新
        editTodoName={editTodoName}
        // 編集フォームへ変換
        editTodoListItem={editTodoListItem}
      />
    </Container>
  );
}

export default App;