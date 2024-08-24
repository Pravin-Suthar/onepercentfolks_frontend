import DefaultLayout from "@/layouts/default";
import style from "@/styles/auth/login.module.css";
import { Button, Input } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    setEmail(e.target.value);4
    console.log(email);
  };

  return (
    <DefaultLayout>
      <div className={style.main_container}>
        <div className={style.login_form_main_container}>
          <div className={style.login_form_field_container}>
            {" "}
            <Input size="md" type="name" label="Name *" />
          </div>
          <div className={style.login_form_field_container}>
            {" "}
            <Input
              size="md"
              type="email"
              label="Email *"
              onChange={handleChange}
            />
          </div>
          <div className={style.login_form_field_container}>
            <Button size="sm">Register</Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
