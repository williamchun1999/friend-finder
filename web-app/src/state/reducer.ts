import { ProfileAction } from "./actions";

const initialState = {
  profile: {
    name: "",
    banner: "",
    bio: "",
    favAnimes: [],
    discord: "",
    instagram: "",
  },
};

export default (
  state = initialState,
  action: ProfileAction
) => {
  switch (action.type) {
    case "update":
      return action.payload;
    default:
      return state;
  }
}
