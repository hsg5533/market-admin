import "./resource/css/reset.css";
import "./resource/css/common.css";
import ask from "./components/ask";
import best from "./components/best";
import Login from "./components/Login";
import index from "./components/index";
import system from "./components/system";
import notice from "./components/notice";
import banner from "./components/banner";
import tourism from "./components/tourism";
import qr_code from "./components/qr_code";
import ask_post from "./components/ask_post";
import store_rg from "./components/store_rg";
import contents from "./components/contents";
import cont_menu from "./components/cont_menu";
import cont_main from "./components/cont_main";
import store_edit from "./components/store_edit";
import cont_event from "./components/cont_event";
import cont_cg_add from "./components/cont_cg_add";
import cont_cg_set from "./components/cont_cg_set";
import notice_post from "./components/notice_post";
import order_store from "./components/order_store";
import order_detail from "./components/order_detail";
import notice_write from "./components/notice_write";
import banner_write from "./components/banner_write";
import store_detail from "./components/store_detail";
import tourism_edit from "./components/tourism_edit";
import store_inquiry from "./components/store_inquiry";
import order_inquiry from "./components/order_inquiry";
import cont_category from "./components/cont_category";
import cont_main_menu from "./components/cont_main_menu";
import order_store_detail from "./components/order_store_detail";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  if (sessionStorage?.getItem("id")) {
    return (
      <BrowserRouter>
        <Route path="/" component={index} exact={true} />
        <Route path="/ask" component={ask} />
        <Route path="/best" component={best} />
        <Route path="/system" component={system} />
        <Route path="/banner" component={banner} />
        <Route path="/notice" component={notice} />
        <Route path="/tourism" component={tourism} />
        <Route path="/qr_code" component={qr_code} />
        <Route path="/ask_post" component={ask_post} />
        <Route path="/store_rg" component={store_rg} />
        <Route path="/contents" component={contents} />
        <Route path="/cont_menu" component={cont_menu} />
        <Route path="/cont_main" component={cont_main} />
        <Route path="/store_edit" component={store_edit} />
        <Route path="/cont_event" component={cont_event} />
        <Route path="/cont_cg_add" component={cont_cg_add} />
        <Route path="/cont_cg_set" component={cont_cg_set} />
        <Route path="/notice_post" component={notice_post} />
        <Route path="/order_store" component={order_store} />
        <Route path="/notice_write" component={notice_write} />
        <Route path="/banner_write" component={banner_write} />
        <Route path="/order_detail" component={order_detail} />
        <Route path="/store_detail" component={store_detail} />
        <Route path="/tourism_edit" component={tourism_edit} />
        <Route path="/store_inquiry" component={store_inquiry} />
        <Route path="/order_inquiry" component={order_inquiry} />
        <Route path="/cont_category" component={cont_category} />
        <Route path="/cont_main_menu" component={cont_main_menu} />
        <Route path="/order_store_detail" component={order_store_detail} />
      </BrowserRouter>
    );
  } else {
    return <Login />;
  }
}

export default App;
