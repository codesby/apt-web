import React, { useEffect } from "react";
import * as css from "./css.module.scss";

const Login = (props) => {
  useEffect(() => {
    console.clear();

    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");

    loginBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode.parentNode;
      console.log(parent);
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== css.slideUp) {
          parent.classList.add(css.slideUp);
        } else {
          signupBtn.parentNode.classList.add(css.slideUp);
          parent.classList.remove(css.slideUp);
        }
        return null
      });
    });

    signupBtn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== css.slideUp) {
          parent.classList.add(css.slideUp);
        } else {
          loginBtn.parentNode.parentNode.classList.add(css.slideUp);
          parent.classList.remove(css.slideUp);
        }
        return null
      });
    });
  });
  return (
    <div class={`${css.container}`}>
      <div class={`${css.signup}`}>
        <h2 id="signup">
          <span>or</span>Sign up
        </h2>
        <div class={`${css.fields}`}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign up</button>
      </div>
      <div class={[css.login, css.slideUp].join(" ")}>
        <div class={`${css.center}`}>
          <h2 id="login">
            <span>or</span>Log in
          </h2>
          <div class={`${css.fields}`}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Log in</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
