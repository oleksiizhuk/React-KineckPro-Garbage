const initialState = {
  text: ""
};

export default function Todo(state = initialState, action) {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
}
