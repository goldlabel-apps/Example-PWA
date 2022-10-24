import * as React from 'react';
import {
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import {
  Avatar,
  Card,
  CardHeader,
  Link,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Icon,
  routeTo,
} from "../../../Shared";

export default function SOHO() {
  const dispatch = useFeatureDispatch();
  const pathSoho = "/hikes/soho-hike";

  return ( <Card sx={{ m:0.5, mt:1.5, mb:1, flexGrow:1 }}>
    <CardHeader 
      avatar={<IconButton
                color="secondary"
                onClick={(e:React.MouseEvent) => {
                  e.preventDefault();
                  dispatch(routeTo(pathSoho));
                }}>
                <Avatar src="https://firebasestorage.googleapis.com/v0/b/listingslab-app.appspot.com/o/divemalta.app%2Favatars%2Fsoho.png?alt=media&token=e5048687-c8de-49c5-9060-c497cb2a0dc6" />
              </IconButton>
      }
      title={<React.Fragment>
              <Typography variant="body1">
                  <Link
                    sx={{cursor: "pointer"}}
                    onClick={(e:React.MouseEvent) => {
                      e.preventDefault();
                      // window.open("https://sohomalta.com", "_blank");
                      dispatch(routeTo(pathSoho));
                    }}
                  >
                    SOHO Office Space
                  </Link>
            </Typography>
          </React.Fragment>}
      subheader={<React.Fragment>
                    <Typography variant="body2">
                      If you need to get a bit of work done while you're on holiday
                    </Typography>
                  </React.Fragment>}
      action={<React.Fragment>
                <IconButton 
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    window.open("mailto:stjulians@sohomalta.com", "_blank");
                  }}>
                    <Icon icon="email"/>
                </IconButton>
                <IconButton 
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    window.open("https://sohomalta.com", "_blank");
                  }}>
                    <Icon icon="site"/>
                </IconButton>
              </React.Fragment>}
    />
  </Card>
  );
}
