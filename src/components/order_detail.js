import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import orderservice from "../service/orderservice";

class order_detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderid: queryString.parse(window.location.search).orderid,
      sum: "",
      order: {},
      order_products: [],
    };
  }

  componentDidMount() {
    orderservice.getOrderDetail(this.state.orderid).then((res) => {
      this.setState({ order: res.data });
    });
    orderservice.getOrderProductDetail(this.state.orderid).then((res) => {
      this.setState({ order_products: res.data });
    });
    orderservice.orderPrice(this.state.orderid).then((res) => {
      this.setState({ sum: res.data.total });
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
                주문 조회 - <span>주문 상세 내역(주문자)</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">주문 조회 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">주문 상세 내역(주문자)</a>
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
              <div className="order_detail_card sub_inquiry_card">
                <ul className="order_num_txt inquiry_txt">
                  <li>
                    주문번호
                    <span>{this.state.orderid}</span>
                  </li>
                  <li>
                    전체 주문 건 수
                    <span>{this.state.order_products.length}</span>
                  </li>

                  <li>
                    총 합계
                    <span>
                      {this.state.sum
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      &nbsp;원
                    </span>
                  </li>
                </ul>
                <div className="sub_inquiry_item">
                  <table>
                    <thead>
                      <tr>
                        <th rowSpan="2">상태</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>단위 가격</th>
                        <th>총 가격</th>
                        <th rowSpan="2">점포명</th>
                      </tr>
                      <tr>
                        <th>배송회사</th>
                        <th colSpan="2">운송장 번호</th>
                        <th>배송일지</th>
                      </tr>
                    </thead>
                    {this.state.order_products.map((order_product) => (
                      <tbody>
                        <tr>
                          <td rowSpan="2" className="accent_color">
                            {order_product.status}
                          </td>
                          <td>{order_product.product_name}</td>
                          <td>{order_product.product_amount}</td>
                          {order_product.discount === "y" ? (
                            <td>
                              <s>
                                {order_product.price
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </s>
                              →
                              {order_product.discount_price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </td>
                          ) : (
                            <td>
                              {order_product.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </td>
                          )}
                          {order_product.discount === "y" ? (
                            <td>
                              {(
                                order_product.product_amount *
                                order_product.discount_price
                              )
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </td>
                          ) : (
                            <td>
                              {(
                                order_product.product_amount *
                                order_product.price
                              )
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </td>
                          )}
                          <td rowSpan="2">{order_product.storename}</td>
                        </tr>
                        <tr>
                          <td>나이스캡</td>
                          <td colSpan="2">12345678901234</td>
                          <td>2022-11-11 12:12:45</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
              <div className="payment_history">
                <div className="order_tit">
                  <h3>결제 내역</h3>
                </div>
                <ul>
                  <li>
                    <span>주문 번호</span>
                    <span>{this.state.orderid}</span>
                  </li>
                  <li>
                    <span>주문 일시</span>
                    <span>
                      {moment(this.state.order.orderdate).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </span>
                  </li>
                  <li>
                    <span>결제방식</span>
                    <span>신용카드</span>
                  </li>
                  <li>
                    <span>결제금액</span>
                    <span>
                      {this.state.sum
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      &nbsp;원
                    </span>
                  </li>
                </ul>
              </div>
              <ul className="payment_history">
                <li>
                  <div className="order_tit">
                    <h3>주문하신 분</h3>
                  </div>
                  <ul>
                    <li>
                      <span>이름</span>
                      <span>{this.state.order.order_name}</span>
                    </li>
                    <li>
                      <span>핸드폰</span>
                      <span>{this.state.order.order_phone}</span>
                    </li>
                    <li>
                      <span>주소</span>
                      <span>
                        ({this.state.order.order_postcode})&nbsp;
                        {this.state.order.order_address}&nbsp;
                        {this.state.order.order_address_detail}
                      </span>
                    </li>
                    <li>
                      <span>이메일</span>
                      <span>{this.state.order.email}</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="order_tit">
                    <h3>받으시는 분</h3>
                  </div>
                  <ul>
                    <li>
                      <span>이름</span>
                      <span>{this.state.order.receive_name}</span>
                    </li>
                    <li>
                      <span>핸드폰</span>
                      <span>{this.state.order.receive_phone}</span>
                    </li>
                    <li>
                      <span>주소</span>
                      <span>
                        ({this.state.order.receive_postcode})&nbsp;
                        {this.state.order.receive_address}&nbsp;
                        {this.state.order.receive_address_detail}
                      </span>
                    </li>
                    <li>
                      <span>전달메세지</span>
                      <span>{this.state.order.message || "-"}</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="notice_btn">
                <div className="list_btn">
                  <button
                    onClick={() => {
                      window.location.href = "/order_inquiry";
                    }}
                  >
                    목록
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default order_detail;
