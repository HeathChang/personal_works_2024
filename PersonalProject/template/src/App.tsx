import React from 'react';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles.styled";
import Layout from "./common/Layout";
import { RouterGroup } from "./routes/RouterGroup";

function App() {
  return (
      <BrowserRouter>
        <GlobalStyles/>
          <Layout>
              <RouterGroup/>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
