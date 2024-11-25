import React from "react";
import Aside from "./Aside";
import Header from "./Header";

class tourism extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
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
                관광지 설정-<span>관광지 관리</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">관광지 설정 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">관광지 관리</a>
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
            <section className="sub_store_inquiry">
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
                <div className="sub_store_set">
                  <div>
                    <i className="icon_plus"></i>
                    <a href="/tourism_edit">관광지 추가</a>
                  </div>
                </div>
              </div>
              <div className="sub_inquiry_card">
                <div className="sub_inquiry_item">
                  <table className="tourism_table">
                    <thead>
                      <tr>
                        <th className="inquiry_ck" rowSpan="2">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th rowSpan="2">지역</th>
                        <th rowSpan="2">관광지명</th>
                        <th>미리보기</th>
                        <th rowSpan="2">상태</th>
                        <th rowSpan="2">관리</th>
                        <th rowSpan="2">QR코드</th>
                      </tr>
                      <tr>
                        <th>주소</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>행복</p>
                          <p>행복시</p>
                        </td>
                        <td rowSpan="2">행복시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_01.png"
                                    alt="관광"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_02.png"
                                    alt="축제·행사"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_03.png"
                                    alt="음식점"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_04.png"
                                    alt="숙박"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_05.png"
                                    alt="액티비티"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_06.png"
                                    alt="전통시장"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_01.png"
                                    alt="중앙로고"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_02.png"
                                    alt="하단로고"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_03.png"
                                    alt="배경"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_04.png"
                                    alt="배너1"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_05.png"
                                    alt="배너2"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_06.png"
                                    alt="배너3"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_07.png"
                                    alt="GMP배너"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          설치
                          <br />
                          완료
                        </td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="qr_icon_btn">
                            <img src="img/image/qr_mid_img.png" alt="QR코드" />
                          </a>
                          {this.state.modal === true ? (
                            <div className="qr_modal">
                              <div className="qr_modal_box"></div>
                              <div className="qr_modal_card">
                                <img
                                  src="img/image/qr_big_img.png"
                                  alt="QR코드"
                                />
                              </div>
                            </div>
                          ) : null}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          행복 행복시 행복구 행복로 7, 행복시장 (행복동)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>경남</p>
                          <p>창원시</p>
                        </td>
                        <td rowSpan="2">마산어시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td id="uninstall">미설치</td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td>
                          <div className="inquiry_detail">
                            <a href="#">QR 생성</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          경남 창원시 마산합포구 복요리로 7, 마산어시장 (동성동,
                          어시장유료주차장)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>행복</p>
                          <p>행복시</p>
                        </td>
                        <td rowSpan="2">행복시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_01.png"
                                    alt="관광"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_02.png"
                                    alt="축제·행사"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_03.png"
                                    alt="음식점"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_04.png"
                                    alt="숙박"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_05.png"
                                    alt="액티비티"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_06.png"
                                    alt="전통시장"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_01.png"
                                    alt="중앙로고"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_02.png"
                                    alt="하단로고"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_03.png"
                                    alt="배경"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_04.png"
                                    alt="배너1"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_05.png"
                                    alt="배너2"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_06.png"
                                    alt="배너3"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_07.png"
                                    alt="GMP배너"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          설치
                          <br />
                          완료
                        </td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          행복 행복시 행복구 행복로 7, 행복시장 (행복동)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>경남</p>
                          <p>창원시</p>
                        </td>
                        <td rowSpan="2">마산어시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td id="uninstall">미설치</td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td>
                          <div className="inquiry_detail">
                            <a href="#">QR 생성</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          경남 창원시 마산합포구 복요리로 7, 마산어시장 (동성동,
                          어시장유료주차장)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>행복</p>
                          <p>행복시</p>
                        </td>
                        <td rowSpan="2">행복시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_01.png"
                                    alt="관광"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_02.png"
                                    alt="축제·행사"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_03.png"
                                    alt="음식점"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_04.png"
                                    alt="숙박"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_05.png"
                                    alt="액티비티"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_06.png"
                                    alt="전통시장"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_01.png"
                                    alt="중앙로고"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_02.png"
                                    alt="하단로고"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_03.png"
                                    alt="배경"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_04.png"
                                    alt="배너1"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_05.png"
                                    alt="배너2"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_06.png"
                                    alt="배너3"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_07.png"
                                    alt="GMP배너"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          설치
                          <br />
                          완료
                        </td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          행복 행복시 행복구 행복로 7, 행복시장 (행복동)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>경남</p>
                          <p>창원시</p>
                        </td>
                        <td rowSpan="2">마산어시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td id="uninstall">미설치</td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td>
                          <div className="inquiry_detail">
                            <a href="#">QR 생성</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          경남 창원시 마산합포구 복요리로 7, 마산어시장 (동성동,
                          어시장유료주차장)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>행복</p>
                          <p>행복시</p>
                        </td>
                        <td rowSpan="2">행복시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_01.png"
                                    alt="관광"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_02.png"
                                    alt="축제·행사"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_03.png"
                                    alt="음식점"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_04.png"
                                    alt="숙박"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_05.png"
                                    alt="액티비티"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_06.png"
                                    alt="전통시장"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_01.png"
                                    alt="중앙로고"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_02.png"
                                    alt="하단로고"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_03.png"
                                    alt="배경"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_04.png"
                                    alt="배너1"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_05.png"
                                    alt="배너2"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_06.png"
                                    alt="배너3"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_07.png"
                                    alt="GMP배너"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          설치
                          <br />
                          완료
                        </td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          행복 행복시 행복구 행복로 7, 행복시장 (행복동)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>경남</p>
                          <p>창원시</p>
                        </td>
                        <td rowSpan="2">마산어시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td id="uninstall">미설치</td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td>
                          <div className="inquiry_detail">
                            <a href="#">QR 생성</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          경남 창원시 마산합포구 복요리로 7, 마산어시장 (동성동,
                          어시장유료주차장)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>행복</p>
                          <p>행복시</p>
                        </td>
                        <td rowSpan="2">행복시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_01.png"
                                    alt="관광"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_02.png"
                                    alt="축제·행사"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_03.png"
                                    alt="음식점"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_04.png"
                                    alt="숙박"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_05.png"
                                    alt="액티비티"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_img_06.png"
                                    alt="전통시장"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_01.png"
                                    alt="중앙로고"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_02.png"
                                    alt="하단로고"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_03.png"
                                    alt="배경"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_04.png"
                                    alt="배너1"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_05.png"
                                    alt="배너2"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_06.png"
                                    alt="배너3"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/tourism_label_img_07.png"
                                    alt="GMP배너"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          설치
                          <br />
                          완료
                        </td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          행복 행복시 행복구 행복로 7, 행복시장 (행복동)
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td rowSpan="2" className="inquity_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </td>
                        <td rowSpan="2">
                          <p>경남</p>
                          <p>창원시</p>
                        </td>
                        <td rowSpan="2">마산어시장</td>
                        <td>
                          <div className="tourism_cont">
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>관광</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>축제·행사</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>음식점</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>숙박</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>액티비티</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>전통시장</span>
                              </li>
                            </ul>
                            <ul className="tourism_disable">
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>중앙로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>하단로고</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배경</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너1</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너2</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>배너3</span>
                              </li>
                              <li>
                                <div>
                                  <img
                                    src="img/image/no_img.png"
                                    alt="이미지없음"
                                  />
                                </div>
                                <span>GMP배너</span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td id="uninstall">미설치</td>
                        <td>
                          <div className="inquiry_edit">
                            <a href="tourism_edit.html">수정</a>
                          </div>
                        </td>
                        <td>
                          <div className="inquiry_detail">
                            <a href="#">QR 생성</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          경남 창원시 마산합포구 복요리로 7, 마산어시장 (동성동,
                          어시장유료주차장)
                        </td>
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
export default tourism;
