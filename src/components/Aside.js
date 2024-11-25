import React from "react";
import visitservice from "../service/visitservice";

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visit: "",
      today: "",
    };
  }

  componentDidMount() {
    visitservice.getVisit().then((res) => {
      this.setState({ visit: res.data.count });
    });
    visitservice.getVisitToday().then((res) => {
      this.setState({ today: res.data.count });
    });
  }

  render() {
    return (
      <aside className="visit_count">
        <div className="container">
          <div className="count_box">
            <p>관리자 페이지입니다.</p>
            <ul>
              <li>
                오늘 방문자 <span>{this.state.today}</span>
              </li>
              <li>
                전체 방문자{" "}
                <span>
                  {this.state.visit
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}
export default Aside;
