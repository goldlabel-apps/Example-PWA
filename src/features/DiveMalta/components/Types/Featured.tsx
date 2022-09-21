import * as React from 'react';
import {
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import {
  Card,
  CardHeader,
  Link,
  Collapse,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Icon,
  routeTo,
} from "../../../Shared";

export default function Featured() {
  const dispatch = useFeatureDispatch();
  const expanded = false;
  const path = "/diveshops/abc-diving";
  return (
    <Card sx={{ m:0.5 }}>
      <CardHeader 
        title={<React.Fragment>
                <Typography variant="body1">
                  
                    <Link
                      sx={{cursor: "pointer"}}
                      onClick={(e:React.MouseEvent) => {
                        e.preventDefault();
                        dispatch(routeTo(path));
                      }}
                    >
                      {`ABC Diving, Malta`}
                    </Link>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          Bespoke PADI dive centre set in an idyllic waterfront 
          location <Link>more...</Link>
        </CardContent>
      </Collapse>
    </Card>
  );
}
