import React from "react";
import "react-hot-loader/patch";
import ReactDOM from "react-dom";
import { AppContainer as HotLoaderAppContainer } from "react-hot-loader";
import Root from "./app.root";


const render = Component => {
  ReactDOM.render(
    <HotLoaderAppContainer>
      <Component />
    </HotLoaderAppContainer>,

    document.getElementById("app")
  );
};

render(Root);
