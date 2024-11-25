import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import config from "../json/config.json";

class cont_cg_add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
    };
  }

  render() {
    return (
      <main>
        <Header />
        <Aside />
        <div class="container">
          <div class="sub_page">
            <div class="sub_common">
              <h2>
                컨텐츠 관리 - <span>카테고리 관리</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">컨텐츠 관리 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">카테고리 관리</a>
                </li>
              </ul>
            </div>
            <form
              id="form"
              action={config.host + "/categoryRegist"}
              method="post"
              encType="multipart/form-data"
              target="iframe"
            >
              <section class="sub_cg_set">
                <div class="cont_menu_box sub_order_item">
                  <h3>카테고리 설정</h3>
                  <div class="cont_menu_list">
                    <ul class="cont_item">
                      <li>순번</li>
                      <li>
                        <input type="number" name="code" />
                      </li>
                    </ul>
                    <ul class="cont_item">
                      <li>카테고리명</li>
                      <li>
                        <input type="text" name="name" />
                      </li>
                    </ul>
                    <ul class="cont_item">
                      <li>아이콘</li>
                      <li class="cg_checkbox">
                        <p class="file_btn">
                          <div class="filebox">
                            <input
                              id="upload-name"
                              value={this.state.fileName}
                              placeholder="첨부파일"
                              readOnly
                            />
                            <label htmlFor="file">파일찾기</label>
                            <input
                              type="file"
                              id="file"
                              name="imgUpload"
                              accept="image/*"
                              multiple
                              onChange={(event) => {
                                this.setState({ fileName: event.target.value });
                              }}
                            />
                          </div>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <ul class="notice_btn">
                    <li class="delete_btn">
                      <button
                        onClick={() => {
                          window.location.href = "/cont_category";
                        }}
                      >
                        취소
                      </button>
                    </li>
                    <li>
                      <div class="list_btn">
                        <button
                          onClick={() => {
                            window.location.href = "/cont_category";
                          }}
                        >
                          목록
                        </button>
                      </div>
                      <div class="white_btn">
                        <button
                          onClick={() => {
                            document.getElementById("form").submit();
                            alert("등록되었습니다.");
                            window.location.href = "/cont_category";
                          }}
                        >
                          확인
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </form>
            <iframe name="iframe" style={{ display: "none" }}></iframe>
          </div>
        </div>
      </main>
    );
  }
}
export default cont_cg_add;
