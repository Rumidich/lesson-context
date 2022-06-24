import React, { useReducer } from "react";

import axios from "axios";

export const todoContext = React.createContext();

const INIT_STATE = {
  todos: [],
  oneTodo: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };
    case "GET_ONE_TODO":
      return { ...state, oneTodo: action.payload };
    default:
      return state;
  }
}

// "GET_TODOS" === "GET_TODOS"  - true
// "GET_TODOS" === "GET_ONE_TODO" - false  сначала сравниваются стейты, а потом пейлоуды

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! CRUD
  const API = " http://localhost:8007/todos";
  //! Create
  async function createTodo(newTodo) {
    await axios.post(API, newTodo);
  }
  //! Read
  async function getTodos() {
    let res = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
    // console.log(res);
  }

  //! Delete
  async function deleteTodo(id) {
    await axios.delete(`${API}/${id}`);
    getTodos();
  }

  //! Get for edit
  async function getOneTodo(id) {
    //отправляем запрос на одну тудушку для редактирования
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_TODO",
      payload: res.data,
    });
    // console.log(res);
  }
  //! Update
  async function updateTodo(id, editedTodo) {
    await axios.patch(`${API}/${id}`, editedTodo);
    getTodos();
  }

  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        oneTodo: state.oneTodo,
        createTodo,
        getTodos,
        deleteTodo,
        getOneTodo,
        updateTodo,
      }}>
      {children}
    </todoContext.Provider>
  );
};
export default TodoContextProvider;
