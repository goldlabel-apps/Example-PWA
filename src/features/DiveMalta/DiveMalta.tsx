import * as React from 'react';
import {
  useFeatureSelect,
} from "../Shared/store/hooks";
import {
  // useMediaQuery,
  Paper,
  Grid,
} from "@mui/material";
import {
  selectDiveMalta,
  InfiniteMenu,
  Bottombar,
  Topbar,
  Category,
  Single,
} from "../DiveMalta";

export default function DiveMalta() {
  const diveMalta = useFeatureSelect( selectDiveMalta );
  // const isMobile = !useMediaQuery("(min-width:900px)");
  // const location = useLocation();
  const {pathname} = window.location;
  console.log ("DiveMalta", pathname);
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


                  </React.Fragment> : <React.Fragment>
                    <Category />
                  </React.Fragment>}
                
              </Grid>
            </Grid>
            <Bottombar />
          </React.Fragment>);
};

/*
                    <Paper sx={{m:0.5, p:1}}>
                      <pre>{JSON.stringify(track, null, 2)}</pre>
                    </Paper>
*/