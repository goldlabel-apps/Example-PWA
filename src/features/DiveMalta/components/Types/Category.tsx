import * as React from 'react';
import {
  // useFeatureSelect,
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import ReactMarkdown from 'react-markdown';

import {
  Box,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardContent,
  Avatar,
} from "@mui/material"
import {
  Icon,
  // navigateTo,
} from "../../../Shared";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Category() {
  const dispatch = useFeatureDispatch();

  return (
    <Box sx={{m:1, width: "100%"}}>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<React.Fragment>
            <Avatar />
                </React.Fragment>}

          action={ <React.Fragment>
                    <Icon icon="settings" />
                  </React.Fragment>}
          title={ `title` }
          subheader={`subheader`}
        />

            <CardMedia
              component="img"
              height={ 175 }
              image={`image`}
              alt={`title`}
            />
        
          <CardContent>
          </CardContent>
          <CardActions>
            <Icon icon="home" />
          </CardActions>
      </Card>
    </Box>
  );
}

/*
*/
