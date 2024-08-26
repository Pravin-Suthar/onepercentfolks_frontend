import { useAppDispatch } from "@/hooks/useAppDispatch";
import DefaultLayout from "@/layouts/default";
import { signupUser } from "@/redux/actions/auth/loginSignup";
import {
  setUserEmail,
  setUserName,
  setUserPassword,
} from "@/redux/reducers/auth/loginSignupSlice";
import { RootState } from "@/store/store";
import style from "@/styles/auth/login.module.css";
import { Button, Input } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

export default function login() {
  const dispatch = useAppDispatch();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserPassword(e.target.value);
  };

  interface SignUpData {
    name: String;
    email: String;
    password: String;
  }
  const data = {
    name: "aaaa",
    email: "aaa@g.com",
    password: "mypass",
  };

  const submitFrom = () => {
    dispatch(signupUser(data));
    console.log("Aaaaaaaaaaa");
  };

  return (
    <DefaultLayout>
      <div className={style.main_container}>
        <div className={style.login_form_main_container}>
          <div className={style.login_form_field_container}>
            {" "}
            <Input
              size="md"
              type="name"
              label="Name *"
              onChange={handleNameChange}
            />
          </div>
          <div className={style.login_form_field_container}>
            {" "}
            <Input
              size="md"
              type="email"
              label="Email *"
              onChange={handleEmailChange}
            />
          </div>
          <div className={style.login_form_field_container}>
            {" "}
            <Input
              size="md"
              type="pass"
              label="Password *"
              onChange={handlePasswordChange}
            />
          </div>
          <div className={style.login_form_field_container}>
            <Button size="sm" onClick={submitFrom}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
