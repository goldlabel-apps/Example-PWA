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

export default function Octopus() {
  const dispatch = useFeatureDispatch();
  const pathOctopus = "/diveshops/octopus";

  return ( <Card sx={{ m:0.5, mt:1.5, mb:1, flexGrow:1 }}>
    <CardHeader 
      avatar={<IconButton
                color="secondary"
                onClick={(e:React.MouseEvent) => {
                  e.preventDefault();
                  dispatch(routeTo(pathOctopus));
                }}>
                <Avatar src="https://firebasestorage.googleapis.com/v0/b/listingslab-app.appspot.com/o/divemalta.app%2Favatars%2Foctopus.png?alt=media&token=fbcc172c-3fb1-4236-a8e3-e2e87a63da1a" />
              </IconButton>
      }
      title={<React.Fragment>
              <Typography variant="body1">
                  <Link
                    sx={{cursor: "pointer"}}
                    onClick={(e:React.MouseEvent) => {
                      e.preventDefault();
                      dispatch(routeTo(pathOctopus));
                    }}
                  >
                    Octopus Garden
                  </Link>
            </Typography>
          </React.Fragment>}
      subheader={<React.Fragment>
                    <Typography variant="body2">
                      German Diving center and training acadamy
                    </Typography>
                  </React.Fragment>}
      action={<React.Fragment>
                <IconButton 
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    window.open("mailto:info@octopus-garden.net", "_blank");
                  }}>
                    <Icon icon="email"/>
                </IconButton>
                <IconButton 
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    window.open("https://octopus-garden.net", "_blank");
                  }}>
                    <Icon icon="site"/>
                </IconButton>
              </React.Fragment>}
    />
  </Card>
  );
}
