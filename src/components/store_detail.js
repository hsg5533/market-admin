import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import config from "../json/config.json";
import storeservice from "../service/storeservice";
import categoryservice from "../service/categoryservice";

class store_detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regnumber: queryString.parse(window.location.search).regnumber,
      store: {},
      category: {},
    };
  }

  componentDidMount() {
    storeservice.getStoreReg(this.state.regnumber).then((res) => {
      this.setState({ store: res.data });
      categoryservice.getCategoryDetail(res.data.category_code).then((res) => {
        this.setState({ category: res.data });
      });
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
              <h2>점포 조회 - 상세</h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">점포 관리 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">점포 조회</a>
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
            <section className="sub_store_detail">
              <div className="store_detail_box">
                <div className="detail_table">
                  <ul>
                    <li>점포명</li>
                    <li>{this.state.store.name}</li>
                  </ul>
                  <ul>
                    <li>사업자 번호</li>
                    <li className="inquiry_num">
                      {this.state.store.regnumber}
                    </li>
                  </ul>
                  <ul>
                    <li>주소</li>
                    <li>{this.state.store.address}</li>
                  </ul>
                  <ul>
                    <li>검색어</li>
                    <li></li>
                  </ul>
                </div>
                <div className="detail_table_card">
                  <div>
                    <ul>
                      <li>전화번호</li>
                      <li className="inquiry_num">{this.state.store.tel}</li>
                    </ul>
                    <ul>
                      <li>카테고리</li>
                      <li>{this.state.category.name}</li>
                    </ul>
                    <ul>
                      <li>생년월일</li>
                      <li className="inquiry_num">
                        {this.state.store.birthday || "입력된 정보가 없습니다."}
                      </li>
                    </ul>
                    <ul>
                      <li>오픈시간</li>
                      <li className="inquiry_num">{this.state.store.open}</li>
                    </ul>
                    <ul>
                      <li>브레이크 타임</li>
                      <li>
                        {this.state.store.pause} ~ {this.state.store.resume}
                      </li>
                    </ul>
                    <ul>
                      <li>설치 가능일</li>
                      <li className="inquiry_num">
                        2022-11-11<span>17:10:00</span>
                      </li>
                    </ul>
                    <ul>
                      <li>계약일</li>
                      <li className="inquiry_num">
                        2022-10-31<span>15:30:00</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>대표자명</li>
                      <li>{this.state.store.owner}</li>
                    </ul>
                    <ul>
                      <li>휴대전화</li>
                      <li className="inquiry_num">
                        {this.state.store.phone || "입력된 정보가 없습니다."}
                      </li>
                    </ul>
                    <ul>
                      <li>검색어</li>
                      <li>영양상회</li>
                    </ul>
                    <ul>
                      <li>태그 갯수 (테이블 수)</li>
                      <li className="inquiry_num">4</li>
                    </ul>
                    <ul>
                      <li>클로즈 시간</li>
                      <li className="inquiry_num">{this.state.store.close}</li>
                    </ul>
                    <ul>
                      <li>휴무일</li>
                      <li>{this.state.store.holiday}</li>
                    </ul>
                    <ul>
                      <li>약관 동의 여부</li>
                      <li>동의</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contract_txt detail_set">
                <div className="main_menu_set">
                  <h3>메인 메뉴 설정</h3>
                  <div></div>
                </div>
                <div className="signature">
                  <h3>서명</h3>
                  <div>
                    <img
                      src={
                        config.host + `/getStoreSign/${this.state.regnumber}`
                      }
                      alt="서명"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default store_detail;
