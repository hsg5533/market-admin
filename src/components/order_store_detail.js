import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import queryString from "query-string";
import orderservice from "../service/orderservice";

class order_store_detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storename: queryString.parse(window.location.search).storename,
      page: 1,
      limit: 5,
      total: "",
      orders: [],
      order_details: [],
      order_products: [],
    };
  }

  componentDidMount() {
    orderservice.getOrder().then((res) => {
      this.setState({ orders: res.data });
    });
    orderservice.getOrderStoreDetail(this.state.storename).then((res) => {
      this.setState({ order_details: res.data });
    });
    orderservice.getOrderProductStore(this.state.storename).then((res) => {
      this.setState({ order_products: res.data });
    });
    orderservice.orderPriceStore(this.state.storename).then((res) => {
      this.setState({ total: res.data.total });
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
                주문 조회 - <span>주문 상세 내역(점포별)</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">주문 조회 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">주문 상세 내역(점포별)</a>
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
            <section className="order_store_detail">
              <div className="sub_inquiry_box">
                <ul className="order_num_txt inquiry_txt">
                  <li>
                    <h2 className="accent_color">{this.state.storename}</h2>
                  </li>
                  <li>
                    전체 주문 건 수
                    <span>{this.state.order_details.length}건</span>총 합계
                    <span>
                      {this.state.total
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}
                      &nbsp;원
                    </span>
                  </li>
                </ul>
              </div>
              {this.state.order_details.map((order_detail) => (
                <div className="order_store_history">
                  <ul className="order_num_txt inquiry_txt">
                    <li>
                      주문번호
                      <span className="inquiry_num">
                        {order_detail.orderid}
                      </span>
                    </li>

                    <li>
                      총 합계
                      <span>
                        {order_detail.total
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0}
                        &nbsp;원
                      </span>
                    </li>
                  </ul>
                  <div className="sub_inquiry_item">
                    <table>
                      <thead>
                        <tr>
                          <th>주문 일자</th>
                          <th>상품명</th>
                          <th>금액</th>
                          <th>합계 금액</th>
                          <th>상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="inquiry_num">
                            {this.state.orders.map((order) =>
                              order_detail.orderid === order.orderid
                                ? moment(order.orderdate).format(
                                    "YYYY-MM-DD HH:mm:ss"
                                  )
                                : null
                            )}
                          </td>
                          <td>
                            <ul className="store_history_cont">
                              {this.state.order_products.map((order_product) =>
                                order_detail.orderid ===
                                order_product.orderid ? (
                                  <li>
                                    {order_product.product_name}
                                    &nbsp;X&nbsp;
                                    {order_product.product_amount}
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </td>
                          <td>
                            <ul className="store_history_cont">
                              {this.state.order_products.map((order_product) =>
                                order_detail.orderid ===
                                order_product.orderid ? (
                                  order_product.discount === "y" ? (
                                    <li>
                                      <s>
                                        {(
                                          order_product.price *
                                          order_product.product_amount
                                        )
                                          .toString()
                                          .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ","
                                          )}
                                      </s>
                                      →&nbsp;
                                      {(
                                        order_product.discount_price *
                                        order_product.product_amount
                                      )
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                      &nbsp;원
                                    </li>
                                  ) : (
                                    <li>
                                      {(
                                        order_product.price *
                                        order_product.product_amount
                                      )
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                      &nbsp;원
                                    </li>
                                  )
                                ) : null
                              )}
                            </ul>
                          </td>
                          <td>
                            {order_detail.total
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            &nbsp;원
                          </td>
                          <td>
                            <ul className="store_history_cont">
                              {this.state.order_products.map((order_product) =>
                                order_detail.orderid ===
                                order_product.orderid ? (
                                  <li className="accent_color">
                                    {order_product.status}
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </td>
                        </tr>
                        {this.state.orders.map((order) =>
                          order.orderid === order_detail.orderid ? (
                            <tr>
                              <td colspan="5">
                                <ul className="payment_history">
                                  <li>
                                    <div className="order_tit">
                                      <h3>주문하신 분</h3>
                                    </div>
                                    <ul>
                                      <li>
                                        <span>이름</span>
                                        <span>{order.order_name}</span>
                                      </li>
                                      <li>
                                        <span>핸드폰</span>
                                        <span>{order.order_phone}</span>
                                      </li>
                                      <li>
                                        <span>주소</span>
                                        <span>
                                          ({order.order_postcode})&nbsp;
                                          {order.order_address}&nbsp;,&nbsp;
                                          {order.order_address_detail}
                                        </span>
                                      </li>
                                      <li>
                                        <span>이메일</span>
                                        <span>{order.email}</span>
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
                                        <span>{order.receive_name}</span>
                                      </li>
                                      <li>
                                        <span>핸드폰</span>
                                        <span>{order.receive_phone}</span>
                                      </li>
                                      <li>
                                        <span>주소</span>
                                        <span>
                                          ({order.receive_postcode})&nbsp;
                                          {order.receive_address}&nbsp;,&nbsp;
                                          {order.receive_address_detail}
                                        </span>
                                      </li>
                                      <li>
                                        <span>전달메세지</span>
                                        <span>{order.message || "-"}</span>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ) : null
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <Pagination
                total={this.state.order_details.length}
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
export default order_store_detail;
