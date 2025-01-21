import React from "react";
import style from "./index.module.scss";
import Dress from "../Dress";
const Home = () => {
  return (
    <>
      <div className={style["home"]}>
        <div className={style["container"]}>
          <div className={style["words"]}>
            <div className={style["word"]}>

            <p>Winter Fasion</p>
            <h2>Fashion Collection 2019</h2>
            <div className="buton">
              <button>Shop now</button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <Dress/>
    </>
  );
};

export default Home;
