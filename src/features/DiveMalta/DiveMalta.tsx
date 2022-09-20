import * as React from 'react';
import {
  useFeatureSelect,
} from "../Shared/store/hooks";
import {useLocation} from "react-router-dom";
import {
  // useMediaQuery,
  Box,
  Grid,
} from "@mui/material";
import {
  selectDiveMalta,
  InfiniteMenu,
  Bottombar,
  Topbar,
  Generic,
  Featured,
} from "../DiveMalta";

export default function DiveMalta() {
  const diveMalta = useFeatureSelect( selectDiveMalta );
  const location = useLocation();
  const {pathname} = location;
  const {list} = diveMalta;
  // console.log ("list",list );
  let track = null;
  let trackPath = pathname;
  for(let i =0; i < list.length; i++){
    if (trackPath.slice(1,trackPath.length) === list[i].value.slug){
      track = list[i];
      break;
    }
  }
  if(pathname === "/"){
    return (
      <React.Fragment>
        <Topbar />
        <Grid container sx={{mb:5}}>
          <Grid item xs={12} md={4}>  
            <Featured />
            <InfiniteMenu defaultOpen />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{pr:1}}>
              Category Page
            </Box>
          </Grid>
          </Grid>
        <Bottombar />
      </React.Fragment>
    )
  }
  return (<React.Fragment>
            <Topbar />
            <Grid container sx={{mb:10}}>
              <Grid item xs={12} md={4}>
                <Featured />
                <InfiniteMenu />
              </Grid>
              <Grid item xs={12} md={8}>
                <Generic track={track} setMode={"single"} />
              </Grid>
            </Grid>
            <Bottombar />
          </React.Fragment>);
};
/*
  <pre>{JSON.stringify(item, null, 2)}</pre>
*/