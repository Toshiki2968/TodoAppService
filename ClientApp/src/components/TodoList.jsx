import {List} from "@chakra-ui/react";

import { TodoItem } from "./TodoItem";
import { EditTodoItem } from "./EditTodoItem";

export const TodoList = ({
    // 現状タスク一覧
    todoList,

    // 完了⇔未完了
    toggleTodoListItemStatus,

    // タスク削除
    deleteTodoListItem,

    // 編集キャンセル
    editCancel,

    // タスク名更新
    editTodoName,

    // 編集フォームへ変換
    editTodoListItem
}) => {
    return (
      <>
        {todoList.length !== 0 && (
          <>
            <ul style={{width: "100%"}}>
              <List w="full">
                {/* タスク一覧から取り出し */}
                {todoList.map((todo) => (
                  // 編集モードかどうか
                  todo.editing ? (
                    <EditTodoItem
                      // 編集するタスク情報
                      todo={todo}
                      key={todo.id}
  
                      // 編集キャンセル
                      editCancel={editCancel}
  
                      // 編集処理
                      editTodoName={editTodoName}
                    />
                  ) : (
                    <TodoItem
                      // タスク情報
                      todo={todo}
                      key={todo.id}
  
                      // 完了⇔未完了
                      toggleTodoListItemStatus={toggleTodoListItemStatus}
  
                      // 削除
                      deleteTodoListItem={deleteTodoListItem}
  
                      // 編集フォームへ変換
                      editTodoListItem={editTodoListItem}
                    /> 
                  )
                ))}
              </List>
            </ul>
          </>
        )}
      </>
    );
};

