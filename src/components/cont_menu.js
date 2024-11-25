import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import config from "../json/config.json";
import producservice from "../service/producservice";

class cont_menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    producservice
      .getProductDetail(queryString.parse(window.location.search).code)
      .then((res) => {
        this.setState({ product: res.data });
      });
  }

  render() {
    return (
      <main>
        <Header />
        <Aside />
        <div className="container">
          <div className="sub_page">
            <div className="sub_common">
              <h2>
                컨텐츠 관리 - <span>메뉴</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">컨텐츠 관리 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">메뉴</a>
                </li>
              </ul>
            </div>
            <section className="sub_cont_menu">
              <div className="cont_menu_box">
                <div className="cont_menu_list">
                  <ul className="cont_item">
                    <li>아이디</li>
                    <li>{this.state.product.regnumber}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>가맹점명</li>
                    <li>{this.state.product.storename}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>상품명</li>
                    <li>{this.state.product.name}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>가격</li>
                    <li>{this.state.product.price}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>원산지 및 설명</li>
                    <li>{this.state.product.origin}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>할인가격</li>
                    <li>{this.state.product.discount_price || "-"}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>이미지</li>
                    <li>
                      <img
                        style={{ width: "500px" }}
                        src={
                          config.host +
                          `/getProductImg/${this.state.product.code}`
                        }
                        onError={(event) => {
                          event.target.src = require("../resource/img/icon/no_img.png");
                        }}
                      />
                    </li>
                  </ul>
                  <ul className="cont_item">
                    <li>등록일</li>
                    <li>
                      {moment(this.state.product.regdate).format(
                        "YYYY-MM-DD a hh:mm:ss"
                      )}
                    </li>
                  </ul>
                  <ul className="cont_item">
                    <li>수정일</li>
                    <li>22-09-28 11:21:54</li>
                  </ul>
                  <ul className="cont_item">
                    <li>관리자 댓글</li>
                    <li className="cont_comment">
                      <div>
                        <textarea
                          type="text"
                          placeholder="댓글을 작성해주세요"
                        ></textarea>
                      </div>
                    </li>
                  </ul>
                  <ul className="cont_item">
                    <li>승인처리</li>
                    <li>
                      <div className="cont_option">
                        <div className="search_option_box">
                          <div className="search_select">
                            <a href="#">Y</a>
                          </div>
                          <ul className="search_option">
                            <li>
                              <a href="#">Y</a>
                            </li>
                            <li>
                              <a href="#">N</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <span>승인 시간 22-09-29 15:12:03</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="notice_btn">
                  <li className="delete_btn">
                    <button>취소</button>
                  </li>
                  <li>
                    <div className="list_btn">
                      <button
                        onClick={() => {
                          window.location.href = "/contents";
                        }}
                      >
                        목록
                      </button>
                    </div>
                    <div className="white_btn">
                      <button
                        onClick={() => {
                          window.location.href = "/contents";
                        }}
                      >
                        확인
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default cont_menu;
