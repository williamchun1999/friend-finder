import React, { ChangeEvent, FormEvent, useState } from "react";

import { Button } from "#components/index";
import { Size, Variant } from "#common/types";

import styles from "./edit_profile.module.scss";

export const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    banner: "",
    bio: "",
    favAnimes: [],
    discord: "",
    instagram: "",
  });
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //Make API Call
  };
  // const name = (document.getElementsByClassName('nameField')[0] as HTMLInputElement).value
  return (
    <>
      <div className={styles.EditForm}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Biography:
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
            ></textarea>
          </label>
          <label>
            Discord:
            <input
              type="text"
              name="discord"
              value={formData.discord}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Instagram:
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Banner:
            <select name="banner" value={formData.banner} onChange={handleInputChange}>
              options
            </select>
          </label>
        </form>
      </div>
      <Button
        color="primary"
        size={Size.small}
        text="Update"
        variant={Variant.primary}
        onClick={() => console.log("test")}
      />
    </>
  );
};
