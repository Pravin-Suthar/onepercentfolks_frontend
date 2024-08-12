import DefaultLayout from "@/layouts/default";

import style from './../styles/homepage/homepage.module.css';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className={style.mainContainer}>
        <h1>Hello folks</h1>
      </div>
    </DefaultLayout>
  );
}
