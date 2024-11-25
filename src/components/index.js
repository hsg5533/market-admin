import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import visitservice from "../service/visitservice";
import storeservice from "../service/storeservice";
import searchservice from "../service/searchservice";
import inquiryservice from "../service/inquiryservice";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LinearScale,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import "moment/locale/ko";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visits: [],
      stores: [],
      searchs: [],
      inquirys: [],
      hourData: [],
      weekData: [],
      computer: 0,
      mobile: 0,
      platform: ["컴퓨터", "모바일"],
      week: ["일", "월", "화", "수", "목", "금", "토"],
      hour: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ],
    };
  }

  componentDidMount() {
    this.state.hour.forEach(async (hour) => {
      await visitservice.getVisitHour(hour).then((res) => {
        this.state.hourData[hour] = res.data.count;
      });
    });
    this.state.week.forEach(async (week, index) => {
      await visitservice.getVisitDate(week).then((res) => {
        this.state.weekData[index] = res.data.count;
      });
    });
    inquiryservice.getInquiry().then((res) => {
      this.setState({ inquirys: res.data });
    });
    storeservice.getStore().then((res) => {
      this.setState({ stores: res.data });
    });
    searchservice.getSearch().then((res) => {
      this.setState({ searchs: res.data });
    });
    visitservice.getVisitPlatform().then((res) => {
      res.data.forEach((data) => {
        switch (data.platform) {
          case "컴퓨터":
            this.setState({ computer: data.count });
            break;
          case "모바일":
            this.setState({ mobile: data.count });
            break;
        }
      });
    });
    ChartJS.register(
      CategoryScale,
      PointElement,
      LinearScale,
      LineElement,
      ArcElement,
      Tooltip,
      Legend,
      Title
    );
  }

  render() {
    const options = {
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
    };
    return (
      <main>
        <Header />
        <Aside />
        <div className="container">
          <section className="dashboard">
            <ul>
              <li>
                <h2>요일별 방문자</h2>
                <p>
                  <Line
                    options={options}
                    data={{
                      labels: this.state.week,
                      datasets: [
                        {
                          label: "이번주",
                          data: this.state.weekData,
                          borderColor: "rgb(255, 99, 132)",
                          backgroundColor: "rgba(255, 99, 132, 0.5)",
                        },
                      ],
                    }}
                  />
                </p>
              </li>
              <li>
                <h2>접속 플랫폼</h2>
                <Doughnut
                  data={{
                    labels: this.state.platform,
                    datasets: [
                      {
                        label: "접속자",
                        data: [this.state.computer, this.state.mobile],
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </li>
              <li>
                <h2>시간별 방문자</h2>
                <Line
                  options={options}
                  data={{
                    labels: this.state.hour,
                    datasets: [
                      {
                        label: "오늘",
                        data: this.state.hourData,
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                      },
                    ],
                  }}
                />
              </li>
              <li>
                <h2>최근 문의</h2>
                <table style={{ textAlign: "center", marginTop: "10px" }}>
                  <thead>
                    <tr>
                      <th>가맹점</th>
                      <th>제목</th>
                      <th>상태</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  {this.state.inquirys.map((inquiry) => (
                    <tbody>
                      <tr>
                        <td>{inquiry.writer}</td>
                        <td>{inquiry.title}</td>
                        <td>
                          {inquiry.reply === "y" ? (
                            <p className="complete_label">답변 완료</p>
                          ) : (
                            <p className="check_label">확인 중</p>
                          )}
                        </td>
                        <td>
                          {moment(inquiry.regdate).format(
                            "YYYY-MM-DD a hh:mm:ss"
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </li>
              <li>
                <h2>최근 검색어</h2>
                <table
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  <thead>
                    <tr>
                      <th>검색어</th>
                      <th>그래프</th>
                      <th>횟수</th>
                    </tr>
                  </thead>
                  {this.state.searchs.slice(0, 4).map((search) => (
                    <tbody>
                      <tr>
                        <td>{search.word}</td>
                        <td>
                          <span
                            style={{
                              display: "block",
                              padding: "1px",
                              width: search.count + "%",
                              backgroundColor: "#284a6e",
                            }}
                          >
                            &nbsp;
                          </span>
                        </td>
                        <td>{search.count}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </li>
              <li>
                <h2>상점 현황</h2>
                <table style={{ textAlign: "center", marginTop: "10px" }}>
                  <thead>
                    <tr>
                      <th>가맹점</th>
                      <th>이름</th>
                      <th>설치</th>
                      <th>등록일</th>
                    </tr>
                  </thead>
                  {this.state.stores.slice(0, 4).map((store) => (
                    <tbody>
                      <tr>
                        <td>{store.regnumber}</td>
                        <td>{store.name}</td>
                        <td>
                          {store.link_code === null ? (
                            <p className="complete_label">미설치</p>
                          ) : (
                            <p className="check_label">설치</p>
                          )}
                        </td>
                        <td>
                          {moment(store.regdate).format(
                            "YYYY-MM-DD a hh:mm:ss"
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </li>
            </ul>
          </section>
        </div>
      </main>
    );
  }
}
export default index;
