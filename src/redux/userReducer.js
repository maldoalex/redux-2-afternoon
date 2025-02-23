import axios from "axios";

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};
export const requestUserData = () => {
  let data = axios.get("/auth/user-data").then(res => res.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data
  };
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case `${REQUEST_USER_DATA}_FULFILLED`:
      return {
        ...state,
        email: action.payload.user.email,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName
      };
    default:
      return state;
  }
}
