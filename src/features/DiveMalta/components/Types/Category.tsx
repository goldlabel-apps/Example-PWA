import * as React from 'react';
import {
  useFeatureSelect,
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import { selectDiveMalta } from '../../';
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material"
import {
  Icon,
  routeTo,
} from "../../../Shared";

export default function Category() {
  const dispatch = useFeatureDispatch();
  const diveMalta = useFeatureSelect( selectDiveMalta );
  const {list} = diveMalta;
  // console.log ("list", list);
/* 
let secondaryText = <React.Fragment>
                          {category ? category.toString() : null}
                          {tags ? tags.toString() : null}
                      </React.Fragment>;
  if(tags && !category){
      secondaryText = tags.toString();
  };
*/
  return (
    <Grid container>

      { list.map((item: any, i: number) => {
        // if (i === 1) console.log (item.value);
        const {
          icon,
          title,
          tags,
          image,
          slug,
        } = item.value;
        return (
          <Grid item xs={12} sm={6} key={`item_${i}`}>
            <Card sx={{ m:0.5, minHeight: 100}}>
              <CardHeader
              avatar={<React.Fragment>
                        <Icon icon={icon} />
                      </React.Fragment>}
              title={title}
              subheader={tags ? tags.toString() : null }
              action={ <React.Fragment>
                          <IconButton
                            color="primary"
                            onClick={()=>{
                              dispatch(routeTo(slug));
                            }}>
                            <Icon icon="right" />
                          </IconButton>
                        </React.Fragment>}
            />
            <CardMedia
                sx={{p:1, cursor: "pointer"}}
                component="img"
                height="175"
                image={image}
                alt="ABC Diving, Malta"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  dispatch(routeTo(slug));
                }}/>
            </Card>
          </Grid>
          );
      })}      
    </Grid>
  );
}

/*
*/
