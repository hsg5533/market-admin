import React from "react";
import Aside from "./Aside";
import Header from "./Header";

class banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Header />
        <Aside />
        <div className="container">
          <div className="sub_page">
            <div className="sub_common">
              <h2>배너 관리</h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">배너 관리</a>
                </li>
              </ul>
            </div>
            <section className="sub_banner">
              <div className="sub_inquiry_box">
                <div className="sub_store_search">
                  <ul>
                    <li className="search_option_box">
                      <div className="search_select">
                        <a href="#">아이디</a>
                      </div>
                      <ul className="search_option">
                        <li>
                          <a href="#">아이디</a>
                        </li>
                        <li>
                          <a href="#">점주명</a>
                        </li>
                        <li>
                          <a href="#">전화번호</a>
                        </li>
                        <li>
                          <a href="#">휴대폰 번호</a>
                        </li>
                        <li>
                          <a href="#">가입일시</a>
                        </li>
                      </ul>
                    </li>
                    <li className="search_bar">
                      <input type="text" placeholder="검색어를 입력해주세요." />
                    </li>
                    <li className="btn_search">
                      <button>검색</button>
                    </li>
                  </ul>
                </div>
                <div className="order_button">
                  <button onclick="location.href='banner_write.html'">
                    <i className="icon_select_ck"></i>등록하기
                  </button>
                </div>
              </div>
              <div className="sub_order_card">
                <ul className="sub_page_num">
                  <li>
                    전체 25건<span>1 페이지</span>
                  </li>
                  <li className="common_set">
                    <a href="#">
                      <i className="icon_option_off"></i>
                      <ul>
                        <li>선택 삭제</li>
                        <li>선택 복사</li>
                        <li>선택 이동</li>
                      </ul>
                    </a>
                    <a href="#">
                      <i className="icon_option_on"></i>
                      <ul>
                        <li>선택 삭제</li>
                        <li>선택 복사</li>
                        <li>선택 이동</li>
                      </ul>
                    </a>
                  </li>
                </ul>
                <div className="sub_order_item">
                  <table className="banner_table">
                    <thead>
                      <tr>
                        <th className="inquiry_ck" rowspan="2">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th rowspan="2">순번</th>
                        <th>배너명</th>
                        <th rowspan="2">배너 미리보기</th>
                        <th rowspan="2">상태</th>
                      </tr>
                      <tr>
                        <th>링크</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td>3</td>
                        <td>
                          <ul className="banner_cont">
                            <li>
                              <p>남해 갈화 왕새우 축제</p>
                              <span>2022-11-11</span>
                            </li>
                            <li>
                              <a href="#">
                                https://www.namhae.go.kr/tour/00009/00322/00325.web
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <img
                            src="img/image/banner_img_01.png"
                            alt="남해 갈화 왕새우 축제"
                          />
                        </td>
                        <td>
                          <div className="toggle">
                            <label className="toggler_wrap">
                              <input type="checkbox" />
                              <div className="toggler_slider">
                                <div className="toggler_circle"></div>
                              </div>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td>2</td>
                        <td>
                          <ul className="banner_cont">
                            <li>
                              <p>남해 갈화 왕새우 축제</p>
                              <span>2022-11-11</span>
                            </li>
                            <li>
                              <a href="#">
                                https://www.namhae.go.kr/tour/00009/00322/00325.web
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <img
                            src="img/image/banner_img_01.png"
                            alt="남해 갈화 왕새우 축제"
                          />
                        </td>
                        <td>
                          <div className="toggle">
                            <label className="toggler_wrap">
                              <input type="checkbox" />
                              <div className="toggler_slider">
                                <div className="toggler_circle"></div>
                              </div>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td>1</td>
                        <td>
                          <ul className="banner_cont">
                            <li>
                              <p>남해 갈화 왕새우 축제</p>
                              <span>2022-11-11</span>
                            </li>
                            <li>
                              <a href="#">
                                https://www.namhae.go.kr/tour/00009/00322/00325.web/amode=view&idx=189&category=F0100amode=view&
                              </a>
                            </li>
                          </ul>
                        </td>
                        <td>
                          <div className="banner_img">
                            <img
                              src="img/image/banner_img_01.png"
                              alt="남해 갈화 왕새우 축제"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="toggle">
                            <label className="toggler_wrap">
                              <input type="checkbox" />
                              <div className="toggler_slider">
                                <div className="toggler_circle"></div>
                              </div>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default banner;
