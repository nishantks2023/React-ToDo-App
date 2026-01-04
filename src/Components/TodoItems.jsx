import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ TodoItems, onDeleteClick }) => {
  return (
    <div classNameclassName={styles.itemsContainer}>
      {TodoItems.map((item) => (
        <Todoitem key={item.className} TodoDate={item.dueDate} TodoclassName={item.className} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
};

export default TodoItems;