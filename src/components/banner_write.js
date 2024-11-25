import React from "react";
import Aside from "./Aside";
import Header from "./Header";

class banner_write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Aside />
        <main class="banner_write">
          <div class="container">
            <div class="sub_page">
              <div class="sub_common">
                <h2>배너 등록</h2>
                <ul>
                  <li>
                    <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                  </li>
                  <li>
                    <a href="#">배너 관리 &nbsp; &gt; &nbsp;</a>
                  </li>
                  <li>
                    <a href="#">배너 등록</a>
                  </li>
                </ul>
              </div>
              <section class="sub_notice sub_notice_write">
                <div class="notice_post_box">
                  <div class="notice_input">
                    <input type="text" placeholder="제목을 입력해주세요" />
                  </div>
                </div>
                <ul class="notice_write_file">
                  <li>
                    <span>링크</span>
                    <p>사이트 주소를 기입해 주세요.</p>
                  </li>
                  <li>
                    <span>첨부파일</span>
                    <p class="file_btn">
                      <button>파일 선택</button>선택된 파일 없음
                    </p>
                  </li>
                </ul>
                <ul class="notice_btn">
                  <li class="delete_btn">
                    <button>취소</button>
                  </li>
                  <li>
                    <div class="white_btn">
                      <button onclick="location.href='banner.html'">
                        등록 완료
                      </button>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default banner_write;
