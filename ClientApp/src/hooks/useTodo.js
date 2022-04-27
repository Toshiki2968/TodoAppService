import { useState, useEffect } from "react";
import * as todoData from "../apis/todos";
import * as completedtodoData from "../apis/completedtodos";
import * as notcompletedtodoData from "../apis/notcompletedtodos";

// 他のファイルで使用できるようにエクスポート
export const useTodo = () => {
    const [todoList, setTodoList] = useState([]);

    // コンポーネントのマウント後、アンマウント後に実行
    // データ取得後、新しい順に並び替え
    useEffect(() => {
        todoData.getAllTodosData().then((todo) => {
            setTodoList([...todo].reverse());
        });
    },[]);
    // 完了⇔未完了
    const toggleTodoListItemStatus = (id, isCompleted) => {
        const todoItem = todoList.find((item) => item.id === id);
        
        // 未完了→ 完了の場合、完了日に現在日時を編集
        // 完了  → 未完了の場合、完了日にNULLを編集
        const date = isCompleted ? null : new Date();
        
        const newTodoItem = { ...todoItem,
            isCompleted: !isCompleted,
            completedDate: date
        };

        // todoリストを更新するためnewtodoListを作成
        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            // タスク一覧から１件ずつ取り出して、更新データのみ置き換え
            const newTodoList = todoList.map((item) =>
                item.id !== updatedTodo.id ? item : updatedTodo
            );
            // todoリストを更新
            setTodoList(newTodoList);
        });
    };

    // 新規TODOを追加
    const addTodoListItem = (todoContent,date) => {
        const newTodoItem = {
            name: todoContent,
            isCompleted: false,
            planedDate: date,
            editing: false,
            completedDate: null
        };

        // todoList更新
        return todoData.addTodoData(newTodoItem).then((addTodo) => {
            setTodoList([addTodo, ...todoList]);
        });
    };

    // TODO削除
    const deleteTodoListItem = (id) => {
        todoData.deleteTodoData(id).then((deleteListItemId) => {
            // 削除したid以外で新しいリストを作成
            const newTodoList = todoList.filter(
                (item) => item.id !== deleteListItemId
            );

            // リスト更新
            setTodoList(newTodoList);
        });
    };

    // すべてのタスク取得
    const handleGetTodoListItem = () => {
        todoData.getAllTodosData().then((todo) => {
            setTodoList([...todo].reverse());
        });
    }

    // 完了タスク取得
    const handleGetCompletedTodoListItem = () => {
        completedtodoData.getAllTodosData().then((todo) => {
            setTodoList([...todo].reverse());
        });
    }

    // 未完了タスク取得
    const handleGetNotCompletedTodoListItem = () => {
        notcompletedtodoData.getAllTodosData().then((todo) => {
            setTodoList([...todo].reverse());
        });
    }

    // 編集キャンセル
    const editCancel = (id, key, value) => {
        const todoItem = todoList.find((item) => item.id === id);
        const newTodoItem = { ...todoItem,
            [key]: value
        };
        const newTodoList = todoList.map((item) =>
            item.id !== newTodoItem.id ? item : newTodoItem
        );

        // リスト更新
        setTodoList(newTodoList);
    };

    // タスク名編集送信処理
    const editTodoName = (id, text, date) => {
        const todoItem = todoList.find((item) => item.id === id);
        const newTodoItem = { ...todoItem,
            name: text,
            planedDate: date
        };
        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            const newTodoList = todoList.map((item) => 
                item.id !== updatedTodo.id ? item : updatedTodo
            );
            
            // editingをfalseにする
            const todoItem = newTodoList.find((item) => item.id === id);
            const newTodoItem = { ...todoItem,
                editing: false
            };
            const newTodoList2 = newTodoList.map((item) =>
                item.id !== newTodoItem.id ? item : newTodoItem
            );

            // todoリストを更新
            setTodoList(newTodoList2);
        });

    };

    // 編集モードオン
    const editTodoListItem = (id) =>{
        const todoItem = todoList.find((item) => item.id === id);
        const newTodoItem = { ...todoItem,
            editing: true
        };
        const newTodoList = todoList.map((item) =>
            item.id !== newTodoItem.id ? item : newTodoItem
        );
        // リスト更新
        setTodoList(newTodoList);
    }

    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem,
        handleGetTodoListItem,
        handleGetCompletedTodoListItem,
        handleGetNotCompletedTodoListItem,
        editCancel,
        editTodoName,
        editTodoListItem
    };
};