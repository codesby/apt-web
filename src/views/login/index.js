import React, { useEffect } from "react";
import * as css from "./css.module.scss";
import { LoadingButton } from "components/button";
import Form from "components/form";
const Login = ({ context }) => {
  const _loadingBtn = React.createRef();
  const onLogin = ({ email, password }) => {
    _loadingBtn.current.setLoading(true);
    context.auth
      .login({ email, password })
      .then((user) => {
        if (!user) alert("Login Failed!");
        else window.location.replace("/");
      })
      .catch((err) => {
        alert("Login failed due to an error!");
        console.log(err);
      })
      .finally(() => {
        if (_loadingBtn.current) _loadingBtn.current.setLoading(false);
      });
  };
  const onSignUp = (data) => {};
  useEffect(() => {
    context.loading(false);
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");

    function handleSlideAnimation(e) {
      const parent = e.target.parentNode.parentNode;
      const activeParent = document.querySelector(`form:not(.${css.slideUp})`);

      if (!parent.classList.contains(css.slideUp)) {
        return;
      }

      activeParent.classList.add(css.slideUp);
      parent.classList.remove(css.slideUp);
    }

    loginBtn.addEventListener("click", handleSlideAnimation);
    signupBtn.addEventListener("click", handleSlideAnimation);

    return () => {
      loginBtn.removeEventListener("click", handleSlideAnimation);
      signupBtn.removeEventListener("click", handleSlideAnimation);
    };
  });

  return (
    <div className={`${css.container}`}>
      <Form className={`${css.signup}`} onSubmit={onSignUp}>
        <div>
          <h2 id="signup">
            <span>or</span>Sign up
          </h2>
          <div className={`${css.fields}`}>
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <input
              name="retype-password"
              type="password"
              placeholder="Retype Password"
            />
          </div>

          <LoadingButton ref={_loadingBtn} sematic="primary fluid button">
            Sign up
          </LoadingButton>
        </div>
      </Form>
      <Form className={[css.login, css.slideUp].join(" ")} onSubmit={onLogin}>
        <div className={`${css.center}`}>
          <h2 id="login">
            <span>or</span>Log in
          </h2>
          <div className={`${css.fields}`}>
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
          </div>
          <LoadingButton ref={_loadingBtn} sematic="primary fluid button">
            Log in
          </LoadingButton>
        </div>
      </Form>
    </div>
  );
};
export default Login;
