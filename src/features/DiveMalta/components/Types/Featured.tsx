import * as React from 'react';
import {
  Card,
  CardHeader,
  Link,
  // CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import {Icon} from "../../../Shared";

export default function Featured() {
  return (
    <Card sx={{ m:0.5 }}>
      <CardHeader 
        title={<React.Fragment>
                <Typography variant="body2">
                  {`Featured`}
              </Typography>
            </React.Fragment>}
        subheader="ABC Diving, Malta"
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
      <CardContent>
        Bespoke PADI dive centre set in an idyllic waterfront 
        location <Link>more...</Link>
      </CardContent>
      
    </Card>
  );
}
