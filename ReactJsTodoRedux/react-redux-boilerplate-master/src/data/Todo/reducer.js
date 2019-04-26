const initialState = {
  list: JSON.parse(localStorage.getItem('todo')) || []
};

export default function Todo(state = initialState , action) {
  switch (action.type) {
    case "ADD_TO_STORAGE":
      return {
        list: action.list,
      };
    default:
      return state;
  }
}
