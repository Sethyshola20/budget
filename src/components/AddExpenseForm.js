import React, { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setName("");
    setCost("");
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex-form">
        <div>
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div>
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="save-btn">
        <button type="submit" className="save">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
