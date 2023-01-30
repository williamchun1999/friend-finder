import { Profile } from "#common/types/profile";
import { ActionType } from "../action_types";

export type ProfileAction = {
    type: ActionType.update
    payload: Profile;
  };