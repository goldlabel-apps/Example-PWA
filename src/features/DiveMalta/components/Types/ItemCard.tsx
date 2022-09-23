import * as React from 'react';
import {
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import {DiveMaltaItem} from "../../types";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
} from "@mui/material"
import {
  Icon,
  routeTo,
} from "../../../Shared";
export default function ItemCard(props: any ) {
  const dispatch = useFeatureDispatch();
  const {
    icon,
    title,
    tags,
  } = props.item.value;
  return (
    <Grid item xs={12} sm={6}>
      <Card sx={{ m:0.5}}>
        <CardHeader
          title={title}
          subheader={tags ? tags.toString() : null }
          avatar={<React.Fragment>
                    <Icon icon={icon} color="primary" />
                  </React.Fragment>}
        />
      </Card>
    </Grid>);
};