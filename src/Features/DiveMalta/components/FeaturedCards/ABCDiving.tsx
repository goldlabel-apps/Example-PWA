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

export default function ABCDiving() {
  const dispatch = useFeatureDispatch();
  const pathABC = "/diveshops/abc-diving";

  return ( <Card sx={{ m:0.5, mt:1, flexGrow:1 }}>
      <CardHeader 
        avatar={<IconButton
                  color="secondary"
                  onClick={(e:React.MouseEvent) => {
                    e.preventDefault();
                    dispatch(routeTo(pathABC));
                  }}>
                  <Avatar src="https://firebasestorage.googleapis.com/v0/b/listingslab-app.appspot.com/o/divemalta.app%2Favatars%2Fabcdiving.png?alt=media&token=be68103c-7c1b-4363-b85a-1bd2bc833119" />
                </IconButton>
        }
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
  );
}
