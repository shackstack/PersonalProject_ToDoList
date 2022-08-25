// Action value
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const DELETE_TODO = "DELETE_TODO";
const DETAIL_ID = "DETAIL_ID";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const completeTodo = (payload) => {
  return { type: COMPLETE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const detailId = (payload) => {
  return { type: DETAIL_ID, payload };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다.",
      content: "react",
      isDone: false,
      isDetail: 0,
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
      content: "redux",
      isDone: false,
      isDetail: 0,
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, isDone: !item.isDone }
            : item
        ),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
        }),
      };
    case DETAIL_ID:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, isDetail: !item.isDetail }
            : item
        ),
      };
    default:
      return state;
  }
};

export default todos;
