import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo } from "./TodoSlice";
import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const dispatch = useDispatch();
  const uId = uuidv4();

  const userList = useSelector((store) => store.todoSlice);
  const name = useRef(null);
  console.log(userList.list);

  const { list } = userList;
  console.log(list);

  const handleAdd = () => {
    const newTodo = {
      name: name.current.value,
      id: uId, // Assuming you want to use the array length as the id
    };

    dispatch(addTodo(newTodo));
    name.current.value = "";
    name.current.focus();
  };
  const handleDelete = (id) => {
    //console.log(id);
    dispatch(delTodo(id));
  };
  return (
    <div>
      <input type="text" ref={name} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => handleDelete(user.id)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
