import { useRef } from "react"
import { BiAddToQueue } from "react-icons/bi";

function AddTodo({ onNewItem }) {

  const todoclassNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtononClicked
    = (event) => {
      event.preventDefault();
      const tudoclassName = todoclassNameElement.current.value;
      const dueDate = dueDateElement.current.value;
      todoclassNameElement.current.value = "";
      dueDateElement.current.value = "";
      onNewItem(tudoclassName, dueDate);
    };

  return (
    <div className="container text-center Ak-Rows">
      <form className="row Ak-Rows" onSubmit={handleAddButtononClicked}>
        <div className="col-6">
          <input type="text" ref={todoclassNameElement} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success Ak-BTN"  ><BiAddToQueue /></button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo