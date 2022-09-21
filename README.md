## divemalta.app

#### Garmin Descent™ Mk1

![Garmin Descent™ Mk1](https://res.garmin.com/en/products/010-01760-00/v/cf-lg.jpg)

> Versatile GPS Dive Computer for Your Diving Adventures

- Premium full-featured dive computer with surface GPS in a sleek watch-style design; with bright 1.2” color display and TOPO mapping
- Built-in sensors include 3-axis compass, gyroscope and barometric altimeter as well as GPS and GLONASS capability that lets you mark your dive entry and exit points¹ for surface navigation
- Choose modes for single and multiple gas dives (including nitrox and trimix), gauge, apnea and closed circuit rebreather (CCR); plan your dives directly on the device
- Dive log lets you store and review data from up to 200 dives — and share online via Garmin Connect™ and its included mobile app
- Features Elevate™ wrist heart rate technology² with multisport activity profiles, performance metrics and smart notifications³
- Battery life: up to 19 days in watch mode, 10 days in smartwatch mode, 40 hours in dive mode and 20 hours in GPS mode


#### The App

This is a React Progressive Web App. It uses data created with a [Garmin Descent™ Mk1](https://www.garmin.com/en-US/p/568181). You can create compatable data (.gpx) with pretty much any smart device for free. Upload and make it more fun here

> View, Edit & Share Geodata using React & Material UI

```html
<noscript>You'll need a _lot_ more JavaScript to run this</noscript>
  <div id="divemalta" />
```

Some features of the app are available free on GitHub public repositories. Some are not.
eg: [index.tsx](https://github.com/listingslab-software/gpx-react/blob/master/src/index.tsx)

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Route, 
  Switch, 
  BrowserRouter as Router 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { featuresStore } from './features/featuresStore';
import { 
  Grid, Container, createTheme, 
  ThemeProvider, CssBaseline,
} from "@mui/material";
import { 
  Shared,
  TopMenu,
  theme,
} from "./features/Shared";

console.warn(`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`);

export const getFeaturesStore = () => { return featuresStore }

const root = ReactDOM.createRoot(
  document.getElementById('gpx-react') as HTMLElement
)
...
```
