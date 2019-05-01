const initialState = {
  list: JSON.parse(localStorage.getItem('todo')) || [],
  count: 0
};

export default function Todo(state = initialState, action) {

  switch (action.type) {
    case "ADD_TO_STORAGE":
      return {
        list: action.list,
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
