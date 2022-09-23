import * as React from 'react';
import {
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import {
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

export default function Featured() {
  const dispatch = useFeatureDispatch();
  const pathABC = "/diveshops/abc-diving";
  const pathOctopus = "/diveshops/octopus";
  return (<React.Fragment>
    <Card sx={{ m:0.5, mt:1, flexGrow:1 }}>
      <CardHeader 
        title={<React.Fragment>
                <Typography variant="body1">
                    <Link
                      sx={{cursor: "pointer"}}
                      onClick={(e:React.MouseEvent) => {
                        e.preventDefault();
                        dispatch(routeTo(pathABC));
                      }}>
                      {`ABC Diving, Malta`}
                    </Link>
              </Typography>
            </React.Fragment>}
        subheader={<React.Fragment>
              <Typography variant="body2">
                Bespoke PADI dive centre set in an idyllic waterfront location
              </Typography>
            </React.Fragment>}
        action={<React.Fragment>
          <IconButton
            color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              window.open("https://api.whatsapp.com/send?phone=35677333112&text=%F0%9F%9A%80", "_blank");
            }}>
              <Icon icon="whatsapp"/>
          </IconButton>
          <IconButton 
            color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              window.open("mailto:info@abcdivingmalta.com", "_blank");
            }}>
              <Icon icon="email"/>
          </IconButton>
          <IconButton 
            color="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              window.open("https://www.abcdivingmalta.com", "_blank");
            }}>
              <Icon icon="site"/>
          </IconButton>
        </React.Fragment>}
      />
    </Card>

    <Card sx={{ m:0.5, mt:1, mb:1, flexGrow:1 }}>
      <CardHeader 
        title={<React.Fragment>
                <Typography variant="body1">
                    <Link
                      sx={{cursor: "pointer"}}
                      onClick={(e:React.MouseEvent) => {
                        e.preventDefault();
                        dispatch(routeTo(pathOctopus));
                      }}
                    >
                      {`Octopus Garden`}
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
                      window.open("mailto:info@pathOctopus", "_blank");
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

    
    </React.Fragment>
  );
}
