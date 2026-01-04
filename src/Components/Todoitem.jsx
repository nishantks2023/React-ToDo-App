import { MdDelete } from "react-icons/md";

function Todoitem({ TodoclassName, TodoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row Ak-Rows">
        <div className="col-6">
          {TodoclassName}
        </div>
        <div className="col-4">
          {TodoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger Ak-BTN" onClick={() => onDeleteClick(TodoclassName)}><MdDelete /></button>
        </div>
      </div>
    </div>
  )
}

export default Todoitem