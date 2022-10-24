import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { featuresStore } from './Features/featuresStore';
import {
  Container,
  createTheme, 
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { 
  Shared,
} from "./Features/Shared";
import {theme} from "./Features/DiveMalta/theme/theme";
import {DiveMalta} from "./Features/DiveMalta";

console.warn(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION} ${process.env.REACT_APP_ENV}`);

export const getFeaturesStore = () => { return featuresStore }

const root = ReactDOM.createRoot(
  document.getElementById('divemalta') as HTMLElement
)

root.render(
  <React.Fragment>
      <Provider store={ featuresStore }>
        <ThemeProvider theme={createTheme(theme())}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Shared />
            <DiveMalta />
          </Container>
        </ThemeProvider>
      </Provider>
  </React.Fragment>
)

