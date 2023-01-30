import { Profile } from "#common/types/profile";
import { ProfileAction } from "../actions/profile_actions";

const initialState:Profile = {
    name: "",
    banner: "",
    bio: "",
    favAnimes: [],
    discord: "",
    instagram: "",
};
const profileReducer = (state = initialState, action: ProfileAction) => {
  switch (action.type) {
    case "update":
      return action.payload;
    default:
      return state;
  }
}
export default profileReducer
