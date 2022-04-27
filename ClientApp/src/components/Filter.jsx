import { Tabs, TabList, Tab } from '@chakra-ui/react'

export const Filter = ({
    handleGetTodoListItem,
    handleGetCompletedTodoListItem,
    handleGetNotCompletedTodoListItem
}) => {
    
  return (
    <>
      <Tabs  isFitted variant='enclosed' mt="8" width={"100%"}>
        <TabList>
          <Tab onClick={handleGetTodoListItem}>ALL</Tab>
          <Tab onClick={handleGetNotCompletedTodoListItem}>TODO</Tab>
          <Tab onClick={handleGetCompletedTodoListItem}>DONE</Tab>
        </TabList>
      </Tabs>
    </>
  );
}