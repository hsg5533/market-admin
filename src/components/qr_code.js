import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import config from "../json/config.json";
import linkservice from "../service/linkservice";
import storeservice from "../service/storeservice";
import { CSVLink } from "react-csv";
import { CopyToClipboard } from "react-copy-to-clipboard";

class qr_code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      page: 1,
      limit: 3,
      links: [],
      stores: [],
      word: "",
      field: "코드",
      code: null,
      connect: null,
      storename: null,
      regnumber: null,
      modal: false,
      boolean: false,
    };
  }

  componentDidMount() {
    linkservice.getLink().then((res) => {
      this.setState({ links: res.data });
    });
    storeservice.getStore().then((res) => {
      this.setState({ stores: res.data });
    });
  }

  search() {
    switch (this.state.field) {
      case "코드":
        return this.state.links.filter((link) =>
          link.code.toLowerCase().includes(this.state.word)
        );
      case "설치장소":
        return this.state.links.filter((link) => {
          if (link.storename !== null) {
            return link.storename.toLowerCase().includes(this.state.word);
          }
        });
    }
  }

  render() {
    return (
      <main>
        <Header />
        <Aside />
        <div className="container">
          <div className="sub_page">
            <div className="sub_common">
              <h2>코드 관리</h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">QR 코드 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">코드 관리</a>
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
            <section className="sub_qr_code">
              <div className="sub_inquiry_box">
                <div className="sub_store_search">
                  <ul>
                    <li className="search_option_box">
                      <div className="search_select">
                        <a href="#">{this.state.field}</a>
                      </div>
                      <ul className="search_option">
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            코드
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            설치장소
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="search_bar">
                      <input
                        type="text"
                        placeholder="검색어를 입력해주세요."
                        onChange={(event) => {
                          this.setState({ word: event.target.value });
                        }}
                      />
                    </li>
                    <li className="notification">
                      ※검색어를 입력하면 자동으로 검색됩니다.
                    </li>
                  </ul>
                </div>
                <ul className="qr_code_btn">
                  <li className="excel_btn">
                    <CSVLink
                      data={this.state.links}
                      filename={"my-file.csv"}
                      target="_blank"
                    >
                      <button>
                        <i className="icon_download"></i>EXCEL 다운로드
                      </button>
                    </CSVLink>
                  </li>
                  <li className="code_regist_btn">
                    <button>
                      <i className="icon_code_down"></i>코드 등록
                    </button>
                  </li>
                </ul>
                <div className="code_regist_card">
                  <div className="code_regist_box">
                    <div className="code_regist_tit">
                      <h2>코드 등록</h2>
                    </div>
                    <ul className="code_regist_list">
                      <li>
                        <h3>수동 코드생성</h3>
                        <p>
                          코드 수동 생성 시 1개씩 생성되며,
                          <br />
                          테이블 번호와 코드를 입력하여 생성합니다.
                        </p>
                        <ul className="create_btn">
                          <li>
                            <span>테이블 번호</span>
                            <input type="text" placeholder="예시) 1" />
                            <button>등록</button>
                          </li>
                          <li>
                            <span>생성 코드</span>
                            <input type="text" placeholder="예시) 63E7KV" />
                            <button>등록</button>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3>자동 코드생성</h3>
                        <p>
                          코드 자동 생서 시 입력된 개수만큼 생성되며,
                          <br />
                          테이블 번호와 생성 개수를 입력하여 생성합니다.
                        </p>
                        <ul className="create_btn">
                          <li>
                            <span>테이블 번호</span>
                            <input
                              type="text"
                              id="tablenum"
                              placeholder="예시) 1"
                            />
                            <button>등록</button>
                          </li>
                          <li>
                            <span>생성 갯수</span>
                            <input
                              type="text"
                              id="num"
                              placeholder="예시) 15"
                            />
                            <button
                              onClick={() => {
                                linkservice
                                  .makeCode(
                                    document.getElementById("num").value
                                  )
                                  .then(() => {
                                    window.location.reload();
                                  });
                              }}
                            >
                              등록
                            </button>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3>연속 코드생성</h3>
                        <p>
                          시작번호로부터 연속하여 테이블 개수만큼 생성합니다.
                          &nbsp;
                          <br />
                        </p>
                        <ul className="create_btn">
                          <li>
                            <span>
                              시작
                              <br />
                              테이블 번호
                            </span>
                            <input type="text" placeholder="예시) 1" />
                            <button>등록</button>
                          </li>
                          <li>
                            <span>테이블 갯수</span>
                            <input type="text" placeholder="예시) 15" />
                            <button>등록</button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sub_order_card sub_order_item">
                <div className="sub_tab_box">
                  <ul className="sub_order_tab">
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setState({ tab: 1 });
                          linkservice.getLink().then((res) => {
                            this.setState({ links: res.data });
                          });
                        }}
                        className={this.state.tab === 1 ? "tab_active" : ""}
                      >
                        전체
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setState({ tab: 2 });
                          linkservice.getLinkActive("y").then((res) => {
                            this.setState({ links: res.data });
                          });
                        }}
                        className={this.state.tab === 2 ? "tab_active" : ""}
                      >
                        사용
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.setState({ tab: 3 });
                          linkservice.getLinkActive("n").then((res) => {
                            this.setState({ links: res.data });
                          });
                        }}
                        className={this.state.tab === 3 ? "tab_active" : ""}
                      >
                        미사용
                      </a>
                    </li>
                  </ul>
                  <ul className="sub_page_num">
                    <li>
                      전체 {this.state.links.length}건
                      <span>{this.state.page} 페이지</span>
                    </li>
                    <li className="order_button">
                      <button>
                        <i className="icon_select_ck"></i>선택 발주
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab_active sub_tab_cont">
                  <table>
                    <thead>
                      <tr>
                        <th className="inquiry_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th>
                          <div className="order_option_box">
                            <div className="order_select">
                              <a href="#">
                                발주
                                <i className="icon_order_down"></i>
                              </a>
                            </div>
                            <ul className="order_option">
                              <li>
                                <a href="#">발주</a>
                              </li>
                              <li>
                                <a href="#">미발주</a>
                              </li>
                            </ul>
                          </div>
                        </th>
                        <th>코드</th>
                        <th>URL</th>
                        <th>QR코드</th>
                        <th>가맹점ID</th>
                        <th>설치장소</th>
                        <th>
                          <div className="order_option_box">
                            <div className="order_select">
                              <a href="#">
                                테이블번호
                                <i className="icon_order_down"></i>
                              </a>
                            </div>
                            <ul className="order_option">
                              <li>
                                <a href="#">1번</a>
                              </li>
                              <li>
                                <a href="#">2번</a>
                              </li>
                              <li>
                                <a href="#">3번</a>
                              </li>
                              <li>
                                <a href="#">4번</a>
                              </li>
                              <li>
                                <a href="#">5번</a>
                              </li>
                              <li>
                                <a href="#">6번</a>
                              </li>
                              <li>
                                <a href="#">7번</a>
                              </li>
                              <li>
                                <a href="#">8번</a>
                              </li>
                              <li>
                                <a href="#">9번</a>
                              </li>
                              <li>
                                <a href="#">10번</a>
                              </li>
                            </ul>
                          </div>
                        </th>
                        <th>상태</th>
                        <th>QR생성</th>
                      </tr>
                    </thead>
                    {this.search()
                      .slice(
                        (this.state.page - 1) * this.state.limit,
                        (this.state.page - 1) * this.state.limit +
                          this.state.limit
                      )
                      .map((link) => {
                        return (
                          <tbody>
                            <tr>
                              <td className="inquity_ck">
                                <label className="check_box">
                                  <input type="checkbox" />
                                  <span className="check_box_icon"></span>
                                </label>
                              </td>
                              <td id="uninstall">미발주</td>
                              <td>{link.code}</td>
                              <td>
                                <CopyToClipboard
                                  text={config.host + `?code=${link.code}`}
                                  onCopy={() => alert("복사되었습니다.")}
                                >
                                  <a href="#">?code={link.code}</a>
                                </CopyToClipboard>
                              </td>
                              <td>
                                <a
                                  className="qr_icon_btn"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    this.setState({
                                      modal: true,
                                      code: link.code,
                                    });
                                  }}
                                >
                                  {link.encode_png === null ? (
                                    ""
                                  ) : (
                                    <img
                                      src={config.host + `/qrload/${link.code}`}
                                      alt="QR코드"
                                    />
                                  )}
                                </a>
                                {this.state.modal === true ? (
                                  <div className="qr_modal">
                                    <a
                                      onClick={() => {
                                        this.setState({
                                          code: "",
                                          modal: false,
                                        });
                                      }}
                                    >
                                      <div className="qr_modal_box"></div>
                                      <div className="qr_modal_card">
                                        <img
                                          src={
                                            config.host +
                                            `/qrload/${this.state.code}`
                                          }
                                          alt="QR코드"
                                        />
                                      </div>
                                    </a>
                                  </div>
                                ) : null}
                              </td>
                              <td>{link.store_regnumber}</td>
                              <td>
                                <div className="connect_btn">
                                  {link.storename === null ? (
                                    <button
                                      style={{ zIndex: 1 }}
                                      onClick={() => {
                                        this.setState({ connect: link.code });
                                      }}
                                    >
                                      연결
                                    </button>
                                  ) : (
                                    <span>{link.storename}</span>
                                  )}
                                  {this.state.connect === link.code ? (
                                    <a
                                      onClick={() => {
                                        this.setState({ connect: "" });
                                      }}
                                    >
                                      <ul
                                        className="connect_regist"
                                        style={{ zIndex: 2 }}
                                      >
                                        <h3>점포명</h3>
                                        <div className="connect_regist_card">
                                          <div className="search_option_box">
                                            <div className="search_select">
                                              <a href="#">
                                                {this.state.storename === null
                                                  ? "선택해주세요"
                                                  : this.state.storename}
                                                <i className="icon_id_down"></i>
                                              </a>
                                            </div>
                                            <ul className="search_option">
                                              <li>
                                                <input
                                                  type="text"
                                                  placeholder="검색어 입력"
                                                />
                                              </li>
                                              {this.state.stores.map(
                                                (store) => (
                                                  <li>
                                                    <a
                                                      onClick={() => {
                                                        this.setState({
                                                          storename: store.name,
                                                          regnumber:
                                                            store.regnumber,
                                                        });
                                                      }}
                                                    >
                                                      {store.name}
                                                    </a>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                          <div>
                                            <button
                                              onClick={() => {
                                                linkservice
                                                  .linkUpdate(
                                                    link.code,
                                                    this.state.storename,
                                                    this.state.regnumber
                                                  )
                                                  .then(() => {
                                                    this.setState({
                                                      connect: "",
                                                    });
                                                    window.location.reload();
                                                  });
                                              }}
                                            >
                                              연결 등록
                                            </button>
                                          </div>
                                        </div>
                                      </ul>
                                    </a>
                                  ) : null}
                                </div>
                              </td>
                              <td>1번</td>
                              <td id="uninstall">
                                {link.status === "y" ? "사용" : "미사용"}
                              </td>
                              <td>
                                {link.encode_png === null ? (
                                  <div className="inquiry_detail">
                                    <a
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        linkservice
                                          .qrSave(link.code)
                                          .then(() => {
                                            alert("QR코드가 생성되었습니다.");
                                            window.location.reload();
                                          });
                                      }}
                                    >
                                      생성
                                    </a>
                                  </div>
                                ) : (
                                  <div className="inquiry_edit">
                                    <a
                                      style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        window.location.href =
                                          config.host + "/qrdown/" + link.code;
                                      }}
                                    >
                                      다운
                                    </a>
                                  </div>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </table>
                </div>
              </div>
              <Pagination
                total={this.search().length}
                limit={this.state.limit}
                page={this.state.page}
                setPage={(page) => {
                  this.setState({ page: page });
                }}
              />
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default qr_code;
