
import ReactDOM from "react-dom/client";
import "./style/index.css";
import "./style/normalize.css";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import App from "./App";
import PublicLayout from "./components/PublicLayout";
// 注册 duration 插件
dayjs.extend(duration);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
