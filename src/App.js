import logo from "./logo.svg";
import "./App.css";
import Button from "../src/component/Button";
import Input from "../src/component/Input";
import Display from "../src/component/DisplayTodo";
import { useState } from "react";

function App() {
  const [addTask, setaddTask] = useState("");
  const [allTaskAdded, setallTaskAdded] = useState([]);
  const [taskBtnName, settaskBtnName] = useState("Add-Task");
  const [taskPlaceholderName, settaskPlaceholderName] = useState("Add-Task");
  const [deleteAlert, setdeleteAlert] = useState(false);
  const [addTaskNof, setaddTaskNof] = useState(false);
  const [editIndex, seteditIndex] = useState("");
  const [editMode, seteditMode] = useState(false);
  const [compareEditTask, setcompareEditTask] = useState(true);
  const [switchHandler, setswitchHandler] = useState(true);
  const [ifEmpty, setifEmpty] = useState(true);
  const addTaskHandler = () => {
    let newTask = addTask;
    {
      addTask !== "" && setallTaskAdded([...allTaskAdded, newTask]);
    }
    setaddTask("");
    if (addTask == "") {
      setifEmpty(false);
    } else {
      setifEmpty(true);
    }
    setaddTaskNof(true);
    setswitchHandler(true);
    setdeleteAlert(false);
  };
  const editTaskHandler = () => {
    let copyOfAllTaskAdded = [...allTaskAdded];
    if (copyOfAllTaskAdded[editIndex] == addTask) {
      setcompareEditTask(true);
    } else {
      setcompareEditTask(false);
      copyOfAllTaskAdded[editIndex] = addTask;
      setallTaskAdded(copyOfAllTaskAdded);
      settaskBtnName("Add-Task");
      settaskPlaceholderName("Add-Task");
      setswitchHandler(false);
      setaddTask("");
      setdeleteAlert(false);
      setdeleteAlert(false);
      seteditMode(false);
    }
  };

  const getInputValueHandler = (e) => {
    setaddTask(e.target.value);
  };
  return (
    <div className="App">
      {addTask == "" && allTaskAdded != "" && taskBtnName == "Add-Task" ? (
        <div class="fw-medium text-light col-lg-5 col-12 mx-auto bg-success">
          {switchHandler &&
            !deleteAlert &&
            ifEmpty &&
            "Task Added Successfully"}
          {deleteAlert && "Task delete succesfully"}
          {!switchHandler && !deleteAlert && "Task Edit succesfully"}
        </div>
      ) : null}

      {addTask == "" && taskBtnName == "Add-Task" && (
        <div
          className="alert-sm fw-bold col-lg-5 col-12 mx-auto alert-danger"
          role="alert"
        >
          {!addTaskNof ? "Kindly add task" : "Kindly add another task"}
        </div>
      )}
      <div className="bg-light shadow-md mt-4 col-lg-5 col-12 mx-auto">
        <h4>Todo-App</h4>
        {taskBtnName == "Edit-Task" && (
          <div>
            <div class="fw-medium text-light col-lg-12 mx-auto bg-warning">
              {" "}
              {compareEditTask && "Task are the same, kindly make your changes"}
            </div>
            <div class="fw-medium text-light col-lg-12 mx-auto bg-danger">
              {" "}
              {deleteAlert &&
                "You are in edit mode u can't delete kindly finish your editing before deleting"}
            </div>
          </div>
        )}
        <div className="bg-light rounded-5 col-lg-9 mx-auto col-12 p-2 shadow-lg d-flex">
          <Input
            placeholder={taskPlaceholderName}
            myFunc={getInputValueHandler}
            value={addTask}
          />
          <Button
            name={taskBtnName}
            myFunc={
              taskBtnName == "Add-Task" ? addTaskHandler : editTaskHandler
            }
            myStyle="bg-dark text-light btn-md ms-2 rounded-2"
          />
        </div>
        <Display
          allTaskAdded={allTaskAdded}
          setallTask={setallTaskAdded}
          editBtnName={settaskBtnName}
          editplaceholderName={settaskPlaceholderName}
          getEditTask={setaddTask}
          getEditIndex={seteditIndex}
          getAddTaskAlert={setaddTaskNof}
          getDeleteAlert={setdeleteAlert}
          getSwitchHandler={editMode}
          getEditMode={seteditMode}
        />
      </div>
    </div>
  );
}
export default App;
