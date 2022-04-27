import {ListItem, Text, Flex, Button, IconButton} from "@chakra-ui/react";

import {DeleteIcon,EditIcon} from "@chakra-ui/icons";

export const TodoItem =
  ({
      todo,
      toggleTodoListItemStatus,
      deleteTodoListItem,
      editTodoListItem
    }) => {

  // todo状態(完了・未完了)を反転
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.isCompleted);

  // todo削除
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  // todo編集
  const handleEditTodoListItem = () => editTodoListItem(todo.id);

  const planedDateTemp = new Date(todo.planedDate);
  const completedDateTemp = new Date(todo.completedDate);

  const label = todo.isCompleted ? "完了済み" : "未完了"
  const setColorScheme = todo.isCompleted ? "pink" : "blue";

  const _d = new Date();
  const nowDate = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
  const checkPlanedDate = new Date(todo.planedDate.substr(0,10));
  const planedDateStyleColor = checkPlanedDate < nowDate && !todo.completedDate ? "red" : "black";

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
      <Text mb="6">タスク：{todo.name}</Text>

      {/* 予定日(現在日時を過ぎていれば強調) */}
      <>
        予定日：
        <span style={{color: planedDateStyleColor}}>
          {planedDateTemp.getFullYear() +
          "/" + (planedDateTemp.getMonth()+1) +
          "/" + planedDateTemp.getDate()}
        </span>
      </>
      <br/>

      {/* 完了日 */}
        <span>
          完了日：
          {todo.completedDate !== null && (
            completedDateTemp.getFullYear() +
            "/" + (completedDateTemp.getMonth()+1) +
            "/" + completedDateTemp.getDate()
          )}
        </span>

      <Flex align="center" justify="flex-end">
        {/* 未完了完了ボタン */}
        <Button
          colorScheme={setColorScheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>

        {/* 編集ボタン */}
        <IconButton
          icon={<EditIcon/>}
          variant="unstyled"
          aria-label="edit"
          onClick={handleEditTodoListItem}
        />

        {/* 削除ボタン */}
        <IconButton
          icon={<DeleteIcon/>}
          variant="unstyled"
          aria-label="delete"
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </ListItem>
  );
};