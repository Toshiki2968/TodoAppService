import { Textarea, Button, Input,FormControl,FormLabel} from "@chakra-ui/react"
import { useState } from "react"

export const TodoAdd = ({
    placeholder,
    leftIcon,
    buttonText,
    inputTodo,
    inputDate,
    handleAddTodoListItem
  }) =>{
    const [nameError, setNameError] = useState("");
    const [dateError, setDateError] = useState("");

    // タスク名エラーチェック
    const handleBlurName = () => {
      if (!inputTodo.current.value){
        setNameError("タスク名を入力してください")
      }else if (inputTodo.current.value.length > 100){
        setNameError("タスク名は100文字以内で入力してください")
      } else {
        setNameError("")
      }
    }

  // 予定日エラーチェック
  const _d = new Date();
  const nowDate = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
  const handleBlurDate = () => {
    const checkInputDate = new Date(inputDate.current.value.substr(0,10));
    if (!inputDate.current.value){
      setDateError("予定日を入力してください")
    }else if (checkInputDate < nowDate){
      setDateError("予定日は現在以降の日付を入力してください")
    } else {
      setDateError("")
    }
  }

    return(
      <>
        <FormControl>
          <FormLabel htmlFor='name' mt="5">タスク名：</FormLabel>
          <Textarea
            placeholder={placeholder}
            bgColor="white"
            // mt="8"
            borderColor="gray.400"
            ref={inputTodo}
            onBlur={handleBlurName}
          />
        </FormControl>
        {nameError && <p style={{color: "red"}}>{nameError}</p>}
        <FormControl>
          <FormLabel htmlFor='date' mt="3">予定日：</FormLabel>
          <Input
            type="date"
            bgColor="white"
            borderColor="gray.400"
            // mt="8"
            ref={inputDate}
            onBlur={handleBlurDate}
            label="テスト"
          />
        </FormControl>
        {dateError && <p style={{color: "red"}}>{dateError}</p>}
        <Button
          onClick={handleAddTodoListItem}
          colorScheme="blue"
          leftIcon={leftIcon}
          mt="5"
          width={"100%"}
          disabled={nameError || dateError}
          >
          {buttonText}
        </Button>
      </>
    )
  }