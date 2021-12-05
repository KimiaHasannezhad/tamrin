import React from "react";

const Login = (email: any, password: any) => {
  return (
    <div className="d-flex flex-di-row justify-c-center">
      <div className="form-body">
        <h3>ورود</h3>
        <div className="form-item">
          <input type="text" placeholder="&#xf0e0; email"></input>
        </div>
        <div className="form-item">
          <input type="text" placeholder="&#xf13e; password"></input>
          <a href="#">فراموشی رمز عبور</a>
        </div>
        <div className="auth-btn-section">
          <button className="auth-primary-btn">ورود</button>
          <p>عضو نیستید ؟</p>
          <button className="auth-outline-btn">ثبت نام</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
