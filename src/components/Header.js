import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="common_head">
        <div className="container">
          <div className="header">
            <h1 className="head_logo">
              <a href="/">LOGO</a>
            </h1>
            <ul className="gnb">
              <li>
                <a href="/store_inquiry">점포 관리</a>
                <ul className="lnb">
                  <li>
                    <a href="/store_inquiry">점포 조회</a>
                  </li>
                  <li>
                    <a href="/store_rg">점포 등록</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/qr_code">QR코드</a>
                <ul className="lnb">
                  <li>
                    <a href="/qr_code">코드 관리</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/notice">커뮤니티</a>
                <ul className="lnb">
                  <li>
                    <a href="/notice">공지사항</a>
                  </li>
                  <li>
                    <a href="/ask">문의 관리</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">컨텐츠관리</a>
                <ul className="lnb">
                  <li>
                    <a href="/contents">메뉴</a>
                  </li>
                  <li>
                    <a href="/cont_category">카테고리 관리</a>
                  </li>
                  <li>
                    <a href="/cont_main">메인이미지/소개</a>
                  </li>
                  <li>
                    <a href="/cont_event">이벤트·할인</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/banner">배너관리</a>
                <ul className="lnb">
                  <li>
                    <a href="/banner">배너 관리</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/order_inquiry">주문조회</a>
                <ul className="lnb">
                  <li>
                    <a href="/order_inquiry">주문 조회(주문자)</a>
                  </li>
                  <li>
                    <a href="/order_store">주문 조회(점포별)</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/best">추천업소</a>
              </li>
              <li>
                <a href="/tourism">관광지 설정</a>
              </li>
              <li>
                <a href="/system" className="line" target="_blank">
                  관제시스템
                </a>
              </li>
            </ul>
            {sessionStorage?.getItem("id") ? (
              <div className="head_btn">
                <button
                  onClick={() => {
                    sessionStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  로그아웃
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
