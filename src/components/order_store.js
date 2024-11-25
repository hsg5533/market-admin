import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import orderservice from "../service/orderservice";

class order_store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 5,
      word: "",
      field: "상점명",
      store_orders: [],
    };
  }

  componentDidMount() {
    orderservice.getOrderStore().then((res) => {
      this.setState({ store_orders: res.data });
    });
  }

  search() {
    switch (this.state.field) {
      case "상점명":
        return this.state.store_orders.filter((order) =>
          order.storename.toString().toLowerCase().includes(this.state.word)
        );
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
              <h2>
                주문 조회 - <span>주문 조회(점포별)</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">주문 조회 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">주문 조회(점포별)</a>
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
            <section className="order_inquiry">
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
                            상점명
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
              </div>
              <div className="order_store_card sub_inquiry_card">
                <div className="inquiry_txt">
                  전체 주문 건 수<span>{this.state.store_orders.length}</span>
                </div>
                <div className="sub_inquiry_item">
                  <table>
                    <thead>
                      <tr>
                        <th>상점명</th>
                        <th>주문 건</th>
                        <th>주문 금액</th>
                        <th>상세</th>
                      </tr>
                    </thead>
                    {this.search()
                      .slice(
                        (this.state.page - 1) * this.state.limit,
                        (this.state.page - 1) * this.state.limit +
                          this.state.limit
                      )
                      .map((store_order) => (
                        <tbody>
                          <tr>
                            <td>{store_order.storename}</td>
                            <td>{store_order.count}</td>
                            <td>
                              {store_order.total
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </td>
                            <td>
                              <div className="inquiry_detail">
                                <a
                                  href={`/order_store_detail?storename=${store_order.storename}`}
                                >
                                  상세
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
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
export default order_store;
