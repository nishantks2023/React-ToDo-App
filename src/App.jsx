import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMassage from "./WelcomeMassage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemclassName, itemDueDate) => {
    const newTodoItmes = [...todoItems, { className: itemclassName, dueDate: itemDueDate }];
    setTodoItems(newTodoItmes);
  };

  const handleDeleteItem = (todoItemclassName) => {
    const newTodoItems = todoItems.filter((item) => item.className !== todoItemclassName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMassage />}
      <TodoItems TodoItems={todoItems} onDeleteClick={handleDeleteItem} />

    </center>
  );
};

export default App;
