import React from "react";
import Button from "./Button";
  
function DisplayTodo({
  allTaskAdded,
  setallTask,
  editBtnName,
  editplaceholderName,
  getEditTask,
  getEditIndex,
  getEditMode,
  getAddTaskAlert,
  getDeleteAlert,
  getSwitchHandler,
}) {
  const editTaskHandler = (item, index) => {
    editBtnName("Edit-Task");
    editplaceholderName("Edit-Task");
    getEditTask(item);
    getEditIndex(index);
    getEditMode(true);
  };
  const deleteTaskHandler = (item, index) => {
    if (!getSwitchHandler) {
      let deleteIndex = index;
      let filteredTask = allTaskAdded.filter(
        (task, index) => deleteIndex != index
      );
      setallTask(filteredTask);
    }
    if (allTaskAdded.length == 1) {
      getAddTaskAlert(false);
    } else {
      getAddTaskAlert(true);
    }
    getDeleteAlert(true);
  };
  return (
    <div>
      {allTaskAdded.length !== 0 && (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-lg-2 col-2">S/N</th>
                <th className="col-lg-5 col-4">Task-Added</th>
                <th className="col-lg-2 col-3">Edit Task</th>
                <th className="col-lg-2 col-3">Delete Task</th>
              </tr>
            </thead>
          </table>
          {allTaskAdded?.map((item, index) => (
            <div key={index}>
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td className="col-2">{index + 1}</td>
                    <td className="col-6">{item}</td>
                    <td className="col-2">
                      <Button
                        name="Edit"
                        myFunc={() => editTaskHandler(item, index)}
                        myStyle="bg-warning text-light btn-md rounded-2"
                      />
                    </td>
                    <td className="col-2">
                      <Button
                        name="Delete"
                        myFunc={() => deleteTaskHandler(item, index)}
                        myStyle="bg-danger text-light btn-md rounded-2"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default DisplayTodo;
  