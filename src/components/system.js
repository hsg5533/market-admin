import React from "react";
import config from "../json/config.json";
import kakaomap from "../modules/kakaomap";
import storeservice from "../service/storeservice";
import visitservice from "../service/visitservice";
import categoryservice from "../service/categoryservice";
import bujeonmarket from "../json/bujeonmarket.json";
import icon_close from "../resource/img/icon/icon_close.svg";
import icon_arrow_down from "../resource/img/icon/icon_arrow_down.svg";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

class system extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: {},
      stores: [],
      weekData: [],
      monthData: [],
      categories: [],
      category: 0,
      word: "",
      today: "",
      install: null,
      draw: false,
      modal: false,
      roadview: false,
      latitude: 35.16195531792627,
      longitude: 129.06027666678085,
      bujeonmarket: bujeonmarket.features,
      week: ["일", "월", "화", "수", "목", "금", "토"],
      month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    };
  }

  componentDidMount() {
    storeservice.getStore().then((res) => {
      this.setState({ stores: res.data });
      this.map(res.data);
    });
    categoryservice.getCategory().then((res) => {
      this.setState({ categories: res.data });
    });
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      ArcElement,
      Title,
      Tooltip,
      Legend
    );
  }

  search() {
    return this.state.stores.filter((store) =>
      store.name.toString().toLowerCase().includes(this.state.word)
    );
  }

  map(data) {
    let moveLine;
    let clickLine;
    let distanceOverlay;
    let dots = [];
    let drawing = false;
    const { kakao } = window;
    // 지도 컨테이너
    const mapContainer = document.getElementById("map");
    mapContainer.innerHTML = null;
    const mapCenter = new kakao.maps.LatLng(
      this.state.latitude,
      this.state.longitude
    );
    // 카카오 지도
    const map = new kakao.maps.Map(mapContainer, {
      center: mapCenter,
      level: 2,
    });
    // 마커 클러스터러
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 3,
    });
    // 지도 컨트롤러
    const mapTypeControl = new kakao.maps.MapTypeControl();
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // 커스텀 오버레이
    const polygonOverlay = new kakao.maps.CustomOverlay();
    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();
    const infowindow = new kakao.maps.InfoWindow({ zindex: 1 });
    // 카카오 로드뷰
    const roadviewContainer = document.getElementById("roadview");
    const roadview = new kakao.maps.Roadview(roadviewContainer);
    const roadviewClient = new kakao.maps.RoadviewClient();
    // 클릭 마커
    const marker = new kakao.maps.Marker({
      position: mapCenter,
      map: map,
    });
    // 선 지우기
    const deleteClickLine = () => {
      if (clickLine) {
        clickLine.setMap(null);
        clickLine = null;
      }
    };
    // 지점 지우기
    const deleteCircleDot = () => {
      var i;
      for (i = 0; i < dots.length; i++) {
        if (dots[i].circle) {
          dots[i].circle.setMap(null);
        }
        if (dots[i].distance) {
          dots[i].distance.setMap(null);
        }
      }
      dots = [];
    };
    // 총거리 지우기
    const deleteDistnce = () => {
      if (distanceOverlay) {
        distanceOverlay.setMap(null);
        distanceOverlay = null;
      }
    };
    if (this.state.roadview === true) {
      map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
    } else {
      // 로드뷰 도로 오버레이 제거
      map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
      roadviewContainer.style.width = "0%";
      mapContainer.style.width = "100%";
      map.relayout();
      map.setCenter(mapCenter);
    }
    // 지도 드래그 이벤트
    kakao.maps.event.addListener(map, "drag", () => {
      roadviewContainer.style.width = "0%";
      mapContainer.style.width = "100%";
      map.relayout();
      storeservice
        .getStoreControl(
          map.getBounds().getNorthEast().Ma,
          map.getBounds().getNorthEast().La,
          map.getBounds().getSouthWest().Ma,
          map.getBounds().getSouthWest().La,
          this.state.category,
          this.state.install
        )
        .then((res) => {
          this.setState({ stores: res.data });
        });
    });
    // 지도 클릭 이벤트
    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
      const position = mouseEvent.latLng;
      marker.setPosition(position);
      geocoder.coord2Address(
        position.getLng(),
        position.getLat(),
        (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const content =
              '<div class="bAddr">' +
              '<span class="title">법정동 주소정보</span>' +
              kakaomap.getAddress(result) +
              "</div>";
            // 마커 표시
            marker.setPosition(mouseEvent.latLng);
            marker.setMap(map);
            // 상세 주소 표시
            infowindow.setContent(content);
            infowindow.open(map, marker);
          }
        }
      );
      // 로드뷰 활성화
      if (this.state.roadview === true) {
        roadviewClient.getNearestPanoId(position, 50, (panoId) => {
          if (panoId === null) {
            roadviewContainer.style.width = "0%";
            mapContainer.style.width = "100%";
            map.relayout();
          } else {
            roadviewContainer.style.width = "50%";
            mapContainer.style.width = "50%";
            roadview.setPanoId(panoId, position);
            map.relayout();
          }
        });
      } else {
        map.setCenter(position);
      }
      // 거리 활상화
      if (this.state.draw === true) {
        const clickPosition = mouseEvent.latLng;
        // 그리는 중 일때
        if (!drawing) {
          drawing = true;
          deleteClickLine();
          deleteCircleDot();
          deleteDistnce();
          clickLine = new kakao.maps.Polyline({
            map: map,
            path: [clickPosition],
            strokeWeight: 3,
            strokeColor: "#db4040",
            strokeOpacity: 1,
            strokeStyle: "solid",
          });
          moveLine = new kakao.maps.Polyline({
            strokeWeight: 3,
            strokeColor: "#db4040",
            strokeOpacity: 0.5,
            strokeStyle: "solid",
          });
          // 그리는 중이 아니면
        } else {
          const path = clickLine.getPath();
          path.push(clickPosition);
          clickLine.setPath(path);
          const distance = Math.round(clickLine.getLength());
          if (distance > 0) {
            distanceOverlay = new kakao.maps.CustomOverlay({
              content:
                "<div class='dotOverlay'>거리 <span class='number'>" +
                distance +
                "</span>m</div>",
              position: position,
              yAnchor: 1,
              zIndex: 2,
            });
            distanceOverlay.setMap(map);
          }
          dots.push({
            distance: distanceOverlay,
          });
        }
      } else {
        deleteClickLine();
        deleteCircleDot();
        deleteDistnce();
      }
    });
    // 지도 우클릭 이벤트
    kakao.maps.event.addListener(map, "rightclick", function () {
      if (drawing) {
        moveLine.setMap(null);
        moveLine = null;
        const path = clickLine.getPath();
        if (path.length > 1) {
          if (dots[dots.length - 1].distance) {
            dots[dots.length - 1].distance.setMap(null);
            dots[dots.length - 1].distance = null;
          }
          const distance = Math.round(clickLine.getLength());
          distanceOverlay = new kakao.maps.CustomOverlay({
            content: kakaomap.getDistance(distance),
            position: path[path.length - 1],
            xAnchor: 0,
            yAnchor: 0,
            zIndex: 3,
            map: map,
          });
        } else {
          deleteClickLine();
          deleteCircleDot();
          deleteDistnce();
        }
        drawing = false;
      }
    });
    // 지도 마우스 무브 이벤트
    kakao.maps.event.addListener(map, "mousemove", function (mouseEvent) {
      if (drawing) {
        const mousePosition = mouseEvent.latLng;
        const path = clickLine.getPath();
        const movepath = [path[path.length - 1], mousePosition];
        moveLine.setPath(movepath);
        moveLine.setMap(map);
      }
    });
    // 로드뷰 위치변경 이벤트
    kakao.maps.event.addListener(roadview, "position_changed", () => {
      const position = roadview.getPosition();
      geocoder.coord2Address(position.La, position.Ma, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const content =
            "<div class='bAddr'>" +
            "<span class='title'>법정동 주소정보</span>" +
            kakaomap.getAddress(result) +
            "</div>";
          // 마커 표시
          marker.setPosition(position);
          marker.setMap(map);
          map.setCenter(position);
          // 상세 주소 표시
          infowindow.setPosition(position);
          infowindow.setContent(content);
          infowindow.open(map, marker);
        }
      });
    });
    // 부전마켓타운 폴리곤
    this.state.bujeonmarket.forEach((Feature) => {
      const polygon = new kakao.maps.Polygon({
        name: kakaomap.getPolycode(Feature).name,
        path: kakaomap.getPolycode(Feature).path,
        strokeWeight: 2,
        strokeColor: "#b70000",
        strokeOpacity: 0.8,
        fillColor: "#fff",
        fillOpacity: 0.3,
        map: map,
      });
      // 폴리곤 마우스 오버 이벤트
      kakao.maps.event.addListener(polygon, "mouseover", () => {
        polygon.setOptions({ fillColor: "#fd8f8f" });
        polygonOverlay.setPosition(kakaomap.getPoints(Feature));
        polygonOverlay.setContent(
          "<div class='overlaybox'>" +
            kakaomap.getPolycode(Feature).name +
            "</div>"
        );
        polygonOverlay.setMap(map);
      });
      // 폴리곤 마우스 아웃 이벤트
      kakao.maps.event.addListener(polygon, "mouseout", () => {
        polygon.setOptions({ fillColor: "#fff" });
        polygonOverlay.setMap(null);
      });
    });
    const markers = data.map((store) => {
      const position = new kakao.maps.LatLng(store.latitude, store.longitude);
      const imageSize = new kakao.maps.Size(24, 35);
      const markerOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: "<div class='overlaybox'>" + store.name + "</div>",
        yAnchor: 2,
        map: map,
      });
      const marker = new kakao.maps.Marker({
        position: position,
        map: map,
      });
      if (store.link_code === null) {
        const markerImage = new kakao.maps.MarkerImage(
          "https://ap.tdemo.tableong.com/img/map/markerStar1.png",
          imageSize
        );
        marker.setImage(markerImage);
        kakao.maps.event.addListener(marker, "click", function () {
          alert("연결된 주소가 없습니다.");
        });
      } else {
        const markerImage = new kakao.maps.MarkerImage(
          "https://ap.tdemo.tableong.com/img/map/markerStar5.png",
          imageSize
        );
        marker.setImage(markerImage);
        kakao.maps.event.addListener(marker, "click", function () {
          window.open(
            `https://app.tableon.co.kr/?code=${store.link_code}`,
            "_blank",
            "toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=600, height=1200, top=0,left=0"
          );
        });
      }
      return marker;
    });
    clusterer.addMarkers(markers);
  }

  render() {
    return (
      <div className="wrap">
        <div className="system_page">
          <header>
            <div className="logo">
              <h1>
                <a href="/">LOGO</a>
              </h1>
              <div className="cluster_btn">
                <a href="#">클러스터 설명보기</a>
              </div>
            </div>
          </header>
          <main>
            <section className="store_list">
              <div className="store_srch">
                <input
                  type="text"
                  placeholder="상호 검색"
                  onChange={(event) => {
                    this.setState({ word: event.target.value });
                  }}
                />
              </div>
              <div className="store_infor">
                <div className="store_tit">
                  <h2>상가 목록</h2>
                </div>
                <ul className="store_item">
                  {this.search().map((store) => (
                    <li>
                      <div className="list_img">
                        <div className="visit_num img">
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              if (store.link_code === null) {
                                alert("연결되지 않은 가맹점입니다.");
                              } else {
                                window.open(
                                  `https://app.tableon.co.kr/?code=${store.link_code}`,
                                  "_blank"
                                );
                              }
                            }}
                          >
                            <img
                              src={
                                config.host + `/getStoreImg/${store.regnumber}`
                              }
                              onError={(event) => {
                                event.target.src = require("../resource/img/icon/no_img.png");
                              }}
                            />
                          </a>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="list_tit">
                            <h3>{store.name}</h3>
                            <span className="label">
                              {this.state.categories.map((category) =>
                                category.code === store.category_code
                                  ? category.name
                                  : null
                              )}
                            </span>
                          </div>
                          <div>{store.address}</div>
                        </li>
                        <li>
                          <div className="common_btn">
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                for (let i in this.state.month) {
                                  visitservice
                                    .getVisiteMonth(
                                      this.state.month[i],
                                      store.code
                                    )
                                    .then((res) => {
                                      this.state.monthData[i] = res.data.count;
                                    });
                                }
                                for (let j in this.state.week) {
                                  visitservice
                                    .getVisitDate(
                                      this.state.week[j],
                                      store.code
                                    )
                                    .then((res) => {
                                      this.state.weekData[j] = res.data.count;
                                    });
                                }
                                visitservice
                                  .getVisitToday(store.code)
                                  .then((res) => {
                                    this.setState({ today: res.data.count });
                                  });
                                this.setState({
                                  modal: true,
                                  store: {
                                    code: store.code,
                                    regnumber: store.regnumber,
                                    name: store.name,
                                    tel: store.tel,
                                    address: store.address,
                                    explan: store.explan,
                                  },
                                });
                              }}
                            >
                              상세보기
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="store_map">
              <ul className="system_item">
                <li className="option_wrap">
                  <div className="option">
                    <div className="system_select">
                      <a href="#">
                        지역 선택
                        <img src={icon_arrow_down} alt="아래 버튼" />
                      </a>
                    </div>
                    <ul className="system_option">
                      <li>
                        <a href="#">남해읍</a>
                      </li>
                      <li>
                        <a href="#">고현면</a>
                      </li>
                      <li>
                        <a href="#">설천면</a>
                      </li>
                      <li>
                        <a href="#">남면</a>
                      </li>
                      <li>
                        <a href="#">서면</a>
                      </li>
                      <li>
                        <a href="#">이동면</a>
                      </li>
                      <li>
                        <a href="#">남해읍</a>
                      </li>
                    </ul>
                  </div>
                  <div className="option">
                    <div className="system_select">
                      <a>
                        카테고리 검색
                        <img src={icon_arrow_down} alt="아래 버튼" />
                      </a>
                    </div>
                    <ul className="system_option">
                      <li>
                        <a
                          onClick={() => {
                            this.setState({ category: 0 });
                            storeservice
                              .getStoreInstall(0, this.state.install)
                              .then((res) => {
                                this.setState({ stores: res.data });
                                this.map(res.data);
                              });
                          }}
                        >
                          전체
                        </a>
                      </li>
                      {this.state.categories.map((category) => (
                        <li>
                          <a
                            onClick={() => {
                              this.setState({ category: category.code });
                              storeservice
                                .getStoreInstall(
                                  category.code,
                                  this.state.install
                                )
                                .then((res) => {
                                  this.setState({ stores: res.data });
                                  this.map(res.data);
                                });
                            }}
                          >
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="system_btn">
                  <ul>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        className={this.state.draw === true ? "active" : ""}
                        onClick={() => {
                          storeservice
                            .getStoreInstall(
                              this.state.category,
                              this.state.install
                            )
                            .then((res) => {
                              this.setState({
                                draw: !this.state.draw,
                                stores: res.data,
                              });
                              this.map(res.data);
                            });
                        }}
                      >
                        거리
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        className={this.state.install === null ? "active" : ""}
                        onClick={() => {
                          storeservice
                            .getStoreInstall(this.state.category, null)
                            .then((res) => {
                              this.setState({
                                install: null,
                                stores: res.data,
                              });
                              this.map(res.data);
                            });
                        }}
                      >
                        전체
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        className={this.state.install === true ? "active" : ""}
                        onClick={() => {
                          storeservice
                            .getStoreInstall(this.state.category, true)
                            .then((res) => {
                              this.setState({
                                install: true,
                                stores: res.data,
                              });
                              this.map(res.data);
                            });
                        }}
                      >
                        설치
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        className={this.state.install === false ? "active" : ""}
                        onClick={() => {
                          storeservice
                            .getStoreInstall(this.state.category, false)
                            .then((res) => {
                              this.setState({
                                install: false,
                                stores: res.data,
                              });
                              this.map(res.data);
                            });
                        }}
                      >
                        미설치
                      </a>
                    </li>
                    <li>
                      <a href="#">가입</a>
                    </li>
                    <li>
                      <a id="uninstall" href="#">
                        미가입
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="map">
                <div id="container" style={{ position: "relative" }}>
                  <div
                    id="map"
                    style={{
                      zIndex: 0,
                      float: "left",
                      width: "100%",
                      height: "100vh",
                    }}
                  ></div>
                  <div
                    id="roadviewControl"
                    style={{
                      zIndex: "auto",
                    }}
                    onClick={() => {
                      const control =
                        document.getElementById("roadviewControl");
                      if (control.className.indexOf("active") === -1) {
                        control.className = "active";
                        this.setState({ roadview: true });
                      } else {
                        control.className = "";
                        this.setState({ roadview: false });
                      }
                      storeservice
                        .getStoreInstall(
                          this.state.category,
                          this.state.install
                        )
                        .then((res) => {
                          this.setState({ stores: res.data });
                          this.map(res.data);
                        });
                    }}
                  ></div>
                  <div
                    id="roadview"
                    style={{ width: "0%", height: "100vh", float: "right" }}
                  ></div>
                </div>
                {this.state.modal === true ? (
                  <div
                    className="system_modal btn_active"
                    style={{ zIndex: 1 }}
                  >
                    <div className="modal_bg"></div>
                    <div className="modal_card">
                      <div className="modal_close">
                        <a
                          onClick={() => {
                            this.setState({ modal: false });
                          }}
                        >
                          <img src={icon_close} alt="닫기" />
                        </a>
                      </div>
                      <header className="modal_head">
                        <div className="modal_tit">
                          <h1>{this.state.store.name}</h1>
                          <p>{this.state.store.explan}</p>
                        </div>
                        <div className="modal_visit">
                          <p>오늘의 방문</p>
                          <h2>{this.state.today}</h2>
                        </div>
                      </header>
                      <main className="modal_cont">
                        <div className="modal_img img">
                          <img
                            style={{ width: "360px", height: "240px" }}
                            src={
                              config.host +
                              `/getStoreImg/${this.state.store.regnumber}`
                            }
                            onError={(event) => {
                              event.target.src = require("../resource/img/icon/no_img.png");
                            }}
                          />
                        </div>
                        <ul className="modal_infor">
                          <li>{this.state.store.address}</li>
                          <li>{this.state.store.tel}</li>
                          <li>
                            <span>가입일</span>2022 - 08 - 17
                          </li>
                          <li>
                            <span>신청일</span>2022 - 08 - 20
                          </li>
                        </ul>
                      </main>
                      <section className="modal_graph">
                        <div className="graph_tit">
                          <h3>{new Date().getFullYear()}년 월별 방문현황</h3>
                          <div>
                            <Line
                              options={{
                                responsive: true,
                                plugins: {
                                  legend: {
                                    position: "top",
                                  },
                                  title: {
                                    display: false,
                                    text: "월별 방문자",
                                  },
                                },
                              }}
                              data={{
                                labels: this.state.month,
                                datasets: [
                                  {
                                    label: "오늘",
                                    data: this.state.monthData,
                                    borderColor: "rgb(0, 99, 132)",
                                    backgroundColor: "rgba(0, 99, 132, 0.5)",
                                  },
                                ],
                              }}
                            />
                          </div>
                        </div>
                        <div className="graph_tit">
                          <h3>{new Date().getFullYear()}년 요일별 방문현황</h3>
                          <div>
                            <Line
                              options={{
                                responsive: true,
                                plugins: {
                                  legend: {
                                    position: "top",
                                  },
                                  title: {
                                    display: false,
                                    text: "요일별 방문자",
                                  },
                                },
                              }}
                              data={{
                                labels: this.state.week,
                                datasets: [
                                  {
                                    label: "오늘",
                                    data: this.state.weekData,
                                    borderColor: "rgb(255, 99, 32)",
                                    backgroundColor: "rgba(255, 99, 32, 0.5)",
                                  },
                                ],
                              }}
                            />
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
export default system;
