import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import orderservice from "../service/orderservice";

class order_inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 5,
      date: "",
      word: "",
      field: "주문번호",
      orders: [],
      order_products: [],
    };
  }

  componentDidMount() {
    orderservice.getOrder().then((res) => {
      this.setState({ orders: res.data });
    });
    orderservice.getOrderProduct().then((res) => {
      this.setState({ order_products: res.data });
    });
  }

  search() {
    const search = this.state.orders.filter((order) =>
      order.orderdate.toLowerCase().includes(this.state.date)
    );
    switch (this.state.field) {
      case "주문번호":
        return search.filter((order) =>
          order.orderid.toLowerCase().includes(this.state.word)
        );
      case "주문자":
        return search.filter((order) =>
          order.order_name.toLowerCase().includes(this.state.word)
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
                주문 조회 - <span>주문 조회(주문자)</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">주문 조회 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">주문 조회(주문자)</a>
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
                            주문번호
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            주문자
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
                    <li className="calendar_bar">
                      <input
                        type="date"
                        onChange={(event) => {
                          this.setState({ date: event.target.value });
                        }}
                      />
                    </li>
                    <li className="notification">
                      ※검색어를 입력하면 자동으로 검색됩니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order_inquiry_card sub_inquiry_card">
                <div className="inquiry_txt">
                  전체 주문 건 수<span>{this.state.orders.length}</span>
                </div>
                <div className="sub_inquiry_item">
                  <table>
                    <thead>
                      <tr>
                        <th>주문번호</th>
                        <th>주문 일자</th>
                        <th rowSpan="2">상품명</th>
                        <th rowSpan="2">상태</th>
                        <th rowSpan="2">상세</th>
                      </tr>
                      <tr>
                        <th>주문자</th>
                        <th>주문자 연락처</th>
                      </tr>
                    </thead>
                    {this.search()
                      .slice(
                        (this.state.page - 1) * this.state.limit,
                        (this.state.page - 1) * this.state.limit +
                          this.state.limit
                      )
                      .map((order) => (
                        <tbody>
                          <tr>
                            <td>{order.orderid}</td>
                            <td className="inquiry_num">
                              {moment(order.orderdate).format(
                                "YYYY-MM-DD a hh:mm:ss"
                              )}
                            </td>
                            <td className="order_product_name" rowSpan="2">
                              {this.state.order_products.map((order_product) =>
                                order.orderid === order_product.orderid ? (
                                  <ul>
                                    <li>{order_product.storename}</li>
                                    <li>
                                      {order_product.product_name}
                                      &nbsp;X&nbsp;
                                      {order_product.product_amount}
                                    </li>
                                  </ul>
                                ) : null
                              )}
                            </td>
                            <td className="order_state" rowSpan="2">
                              <ul>
                                {this.state.order_products.map((orderproduct) =>
                                  order.orderid === orderproduct.orderid ? (
                                    <li>{orderproduct.status}</li>
                                  ) : null
                                )}
                              </ul>
                            </td>
                            <td rowSpan="2">
                              <div className="inquiry_detail">
                                <a
                                  href={`/order_detail?orderid=${order.orderid}`}
                                >
                                  상세
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>{order.order_name}</td>
                            <td className="inquiry_num">{order.order_tel}</td>
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
export default order_inquiry;
