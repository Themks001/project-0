import "./auth.css";
const auth = () => {
  return (
    <div className="authentication">
      <div className="auth-container">
        <div className="auth-header">
          <div className="login-button auth-button">Login</div>
          <div className="register-button auth-button">Register</div>
        </div>
      {/*  <LoginPage />*/}
        <RegisterPage />
      </div>
    </div>
  );
};
const LoginPage = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "30px" }}>
        {" "}
        Welcome back, <br/> Please login
      </h2>
      <form action="">
        <div className="input-container">
          <input type="text" placeholder="username" className="auth-input" />
        </div>
        <div className="input-container">
          <input placeholder="password" type="text" className="auth-input" />
        </div>
        <div style={{ margin: "0px" }}>
          <button type="submit" className="auth-submit">
            login
          </button>
        </div>
      </form>
    </>
  );
};
const RegisterPage = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: "30px" }}>
        {" "}
        Welcome
      </h2>
      <form action="">
        <div className="input-container-name">
          <input type="text" placeholder="firstname" className="auth-input" />
          <input type="text" placeholder="lastname" className="auth-input" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="username" className="auth-input" />
        </div>
        <div className="input-container">
          <input placeholder="password" type="text" className="auth-input" />
        </div>
        <div style={{ margin: "0px" }}>
          <button type="submit" className="auth-submit">
            login
          </button>
        </div>
      </form>
    </>
  );
};
export default auth;
