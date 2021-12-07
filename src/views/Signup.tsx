
import React from "react";

interface MyProps {
  displaySignUp: any
}

const Signup = ( props: MyProps ) => {
  return (
    <div className="d-flex flex-di-row justify-c-center">
      <div className="form-body">
        <h3>ثبت نام</h3>
        <div className="form-item">
          <input type="text" placeholder="&#xf0e0; email"></input>
        </div>
        <div className="form-item">
          <input type="text" placeholder="&#xf13e; password"></input>
          <div className="d-flex">
          <input type="checkbox">
          </input>
          <label >اکانت شرکتی</label>
          </div>
        </div>
        <div className="auth-btn-section">
          <button className="auth-primary-btn">ثبت نام</button>
          <p>در حال حاضر اکانت دارید ؟</p>
          <button className="auth-outline-btn" onClick={() => { props.displaySignUp() }}>ورود</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;