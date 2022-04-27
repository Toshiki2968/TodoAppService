import {useState} from "react";

import { ListItem,Button,Textarea,Input,FormControl,FormLabel} from "@chakra-ui/react";

export const EditTodoItem =
  ({
      todo,
      editCancel,
      editTodoName
    }) => {

  // 編集フォームへ初期値セット
  const [text, setText] = useState(todo.name);
  const [textError, setTextError] = useState("");

  const [date, setDate] = useState(todo.planedDate);
  const [dateError, setDateError] = useState("");

  // 編集キャンセル
  const handleEditCancel = () => editCancel(todo.id, "editing", false);

  // タスク名編集
  const handleEditTodoName = () => editTodoName(todo.id,text, date);

  // 入力フォーム編集
  const handleChangeInputTodoName = (e) => setText(e.currentTarget.value);
  const handleChangeInputTodoDate = (e) => setDate(e.currentTarget.value);

  // タスク名エラーチェック
  const handleBlurText = () => {
    if (!text){
      setTextError("タスク名を入力してください")
    }else if (text.length > 100){
      setTextError("タスク名は100文字以内で入力してください")
    } else {
      setTextError("")
    }
  }

  // 予定日エラーチェック
  const _d = new Date();
  const nowDate = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
  const handleBlurDate = () => {
    const inputDate = new Date(date.substr(0,10));
    if (!date){
      setDateError("予定日を入力してください")
    }else if (inputDate < nowDate){
      setDateError("予定日は現在以降の日付を入力してください")
    } else {
      setDateError("")
    }
  }

  return(
    <ListItem
      borderWidth="1px"
      p="4"
      mt="4"
      bg="white"
      borderRadius="md"
      borderColor="gray.300"
    >
      {/* タスク名 */}
      <FormControl>
        <FormLabel htmlFor='name'>タスク名：</FormLabel>
        <Textarea
          bgColor="white"
          borderColor="gray.400"
          value={text}
          onBlur={handleBlurText}
          onChange={handleChangeInputTodoName}
        />
      </FormControl>
      {textError && <p style={{color: "red"}}>{textError}</p>}

      {/* 予定日 */}
      <FormControl>
        <FormLabel htmlFor='date' mt="3">予定日：</FormLabel>
        <Input
          type="date"
          bgColor="white"
          borderColor="gray.400"
          value={date.substr(0,10)}
          onBlur={handleBlurDate}
          onChange={handleChangeInputTodoDate}
        />
      </FormControl>      
      {dateError && <p style={{color: "red"}}>{dateError}</p>}

      {/* 更新ボタン */}
      <Button
        colorScheme="blue"
        variant="outline"
        size="sm"
        mt="4"
        onClick={handleEditTodoName}
        disabled={textError || dateError}
      >
        更新
      </Button>

      {/* キャンセルボタン */}
      <Button
        variant="outline"
        size="sm"
        mt="4"
        ml="2"
        onClick={handleEditCancel}
      >
        キャンセル
      </Button>
    </ListItem>
  );
};