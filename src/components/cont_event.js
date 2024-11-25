import React from "react";
import Aside from "./Aside";
import Header from "./Header";

class cont_event extends React.Component {
  constructor(props) {
    super(props);
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
                컨텐츠 관리 - <span>이벤트/할인</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">컨텐츠 관리 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">이벤트/할인</a>
                </li>
                <li className="common_set">
                  <a href="#">
                    <i className="icon_set_off"></i>
                    <div>초기화</div>
                  </a>
                  <a href="#">
                    <i className="icon_set_on"></i>
                    <div>초기화</div>
                  </a>
                </li>
              </ul>
            </div>
            <section className="sub_contents sub_notice">
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
                <div className="delete_btn">
                  <button>
                    <i className="icon_delete_close"></i>선택 삭제
                  </button>
                </div>
              </div>
              <div className="sub_cont_table sub_notice_table">
                <div className="tab_active sub_order_item">
                  <table className="sub_cont_card">
                    <thead>
                      <tr>
                        <th className="inquiry_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th>아이디</th>
                        <th>점포명</th>
                        <th>이름</th>
                        <th>등록일</th>
                        <th>수정일</th>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>남해회관</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              냉삼 6인분 이상 주문 시 차돌된장찌개가 무료!
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>칼국수는너무너무맛있어</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              옛날식 수타 칼국수를 즐겨보세요. 1주년 이벤트를
                              진행합니다
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>남해회관</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              냉삼 6인분 이상 주문 시 차돌된장찌개가 무료!
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>칼국수는너무너무맛있어</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              옛날식 수타 칼국수를 즐겨보세요. 1주년 이벤트를
                              진행합니다
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>남해회관</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              냉삼 6인분 이상 주문 시 차돌된장찌개가 무료!
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>칼국수는너무너무맛있어</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              옛날식 수타 칼국수를 즐겨보세요. 1주년 이벤트를
                              진행합니다
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>남해회관</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              냉삼 6인분 이상 주문 시 차돌된장찌개가 무료!
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>칼국수는너무너무맛있어</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              옛날식 수타 칼국수를 즐겨보세요. 1주년 이벤트를
                              진행합니다
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>남해회관</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              냉삼 6인분 이상 주문 시 차돌된장찌개가 무료!
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
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
                        <td>
                          <a href="store_inquiry.html">01234567890</a>
                        </td>
                        <td>
                          <span>칼국수는너무너무맛있어</span>
                        </td>
                        <td>
                          <span>
                            <a href="cont_main_menu.html">
                              옛날식 수타 칼국수를 즐겨보세요. 1주년 이벤트를
                              진행합니다
                            </a>
                          </span>
                        </td>
                        <td>22-09-22 17:37:45</td>
                        <td>22-09-23 11:34:54</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pagination">
                <a href="#">
                  <i className="icon_pg_left_off"></i>
                  <i className="icon_pg_left_on"></i>
                </a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                <a href="#">10</a>
                <a href="#">
                  <i className="icon_pg_right_off"></i>
                  <i className="icon_pg_right_on"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default cont_event;
