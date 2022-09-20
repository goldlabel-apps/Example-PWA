import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import {Icon} from "../../../Shared";

export default function Featured() {
  return (
    <Card sx={{ m:0.5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Featured
        </Typography>
        <Typography variant="h5" component="div">
          ABC Diving, Malta
        </Typography>
        <Typography variant="body1" component="div">
          Explore the coastline around Malta and see what the Mediterranean has to offer
        </Typography>     
      </CardContent>
      <CardActions sx={{m:0}}>
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

      </CardActions>
    </Card>
  );
}
