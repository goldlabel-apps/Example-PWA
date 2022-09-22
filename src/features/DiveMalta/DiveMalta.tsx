import * as React from 'react';
import {
  useFeatureSelect,
} from "../Shared/store/hooks";
import {
  // useMediaQuery,
  Grid,
} from "@mui/material";
import {
  selectDiveMalta,
  InfiniteMenu,
  Bottombar,
  Topbar,
  Home,
  Single,
  Featured,
} from "../DiveMalta";

export default function DiveMalta() {
  const diveMalta = useFeatureSelect(selectDiveMalta);
  const {pathname} = window.location;
  const {list} = diveMalta;
  let track = null;
  let trackPath = pathname;
  for(let i =0; i < list.length; i++){
    if (trackPath.slice(1,trackPath.length) === list[i].value.slug){
      track = list[i];
      break;
    }
  }

  return (<React.Fragment>
            <Topbar />
            <Grid container sx={{mb:10}}>
              <Grid item xs={12} md={4}>
                <InfiniteMenu />
              </Grid>
              <Grid item xs={12} md={8}>
                  {track ? <React.Fragment>
                              <Single track={track} />
                              <Featured />
                            </React.Fragment> 
                    :
                    <React.Fragment>
                      <Home />
                    </React.Fragment>}
              </Grid>
            </Grid>
            <Bottombar />
          </React.Fragment>);
};

/*
  
// const isMobile = !useMediaQuery("(min-width:900px)");
  // const location = useLocation();
  // console.log ("DiveMalta", pathname);
  <Paper sx={{m:0.5, p:1}}>
                      <pre>{JSON.stringify(track, null, 2)}</pre>
                    </Paper>
*/