const initialState = {
  list: JSON.parse(localStorage.getItem('todo')) || [],
  count: 1
};

export default function Todo(state = initialState, action) {

  switch (action.type) {
    case "ADD_TO_STORAGE":
      return {
        ...state,
        list: action.list
      };
    case "COUNT_PLUS":
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
}
