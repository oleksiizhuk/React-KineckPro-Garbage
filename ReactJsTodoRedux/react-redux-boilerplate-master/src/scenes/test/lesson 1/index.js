import {createStore} from "redux";

const initialState = {
  name: 'lesha',
  secondName: 'zhuk'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME" :
      return {
        ...state,
        name: action.payload
      };
    case "CHANGE_SECOND_NAME" :
      return {
        ...state,
        secondName: action.payload
      };
  }
  return state;
}

const store = createStore(reducer, initialState);



const changeName = {
  type: "CHANGE_NAME",
  payload: 'Ivan'
};

const changeSecondName = {
  type: "CHANGE_SECOND_NAME",
  payload: "Opel"
};

store.dispatch(changeName);


store.dispatch(changeSecondName);

