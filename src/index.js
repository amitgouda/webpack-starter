import genrerateJoke from "./generateJoke";
import { v4 as uuidv4 } from "uuid";
import "./styles/main.scss";
import webpack from "./assets/webpack.svg";
const webpackImgElement = document.getElementById("webpackImg");
if (webpackImgElement) {
  webpackImgElement.src = webpack;
}
console.log("webpack console");
console.log(genrerateJoke);

console.log(uuidv4());
