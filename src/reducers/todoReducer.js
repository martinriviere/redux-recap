const initialState = {
  filter: "SHOW_TODO",
  tasks: [
    { id: 1, title: "Learn HTML", done: true },
    { id: 2, title: "Learn React", done: false },
    { id: 3, title: "Learn Redux", done: false }
  ],
  action: "action",
  actionObj: {
    type: "action.type",
    todo: "action.todo",
    filter: "action.filter",
    id: "action.id"
  }
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return { ...state, filter: action.filter };
    case "TOGGLE_TASK":
      const taskToChange = state.tasks.find(task => task.id === action.id);
      return {
        ...state,
        tasks: [
          ...state.tasks.filter(task => task.id !== action.id),
          { ...taskToChange, done: !taskToChange.done }
        ]
      };
    case "ADD_TODO":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.tasks.length + 1, title: action.todo, done: false }
        ]
      };
    case "SET_ACTION":
      return { ...state, action: action.action, actionObj: action.actionObj };
    default:
      return state;
  }
};

export default todoReducer;
