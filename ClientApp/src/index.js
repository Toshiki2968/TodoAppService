import React from "react";
import ReactDOM  from "react-dom";

// レイアウト
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);