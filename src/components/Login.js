import React from "react";
import adminservice from "../service/adminservice";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="login_page">
        <div className="login_box">
          <div className="login_tit">
            <h1>
              로그인
              <br />
            </h1>
          </div>
          <div className="login_cont">
            <div>
              <input type="text" id="id" placeholder="아이디" />
            </div>
            <div className="pw_disabled">
              <input type="password" id="password" placeholder="비밀번호" />
            </div>
          </div>
          <div className="login_ck">
            <label className="check_box">
              <input type="checkbox" />
              <span className="check_box_icon"></span>
              <span className="check_box_txt">자동로그인</span>
            </label>
          </div>
          <div className="login_btn">
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                adminservice
                  .login(
                    document.getElementById("id").value,
                    document.getElementById("password").value
                  )
                  .then(() => {
                    let sessionStorage = window.sessionStorage;
                    sessionStorage.setItem(
                      "id",
                      document.getElementById("id").value
                    );
                    sessionStorage.setItem(
                      "password",
                      document.getElementById("password").value
                    );
                    window.location.reload();
                  })
                  .catch(() => {
                    alert("입력된 정보를 확인해주세요");
                  });
              }}
            >
              로그인
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default Login;
