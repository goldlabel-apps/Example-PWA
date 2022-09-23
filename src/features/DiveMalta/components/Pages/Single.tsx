import * as React from 'react';
import {
  // useFeatureSelect,
  useFeatureDispatch,
} from "../../../Shared/store/hooks";
import ReactMarkdown from 'react-markdown';
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material"
import {
  Icon,
  navigateTo,
} from "../../../Shared";

export default function Single(props:any) {
  let mode = "single";
  const dispatch = useFeatureDispatch();
  const {track, setMode} = props;
  if (!track) return null;
  const {
    title,
    subheader,
    image,
    icon,
    body,
    bodyFormat,
  } = track.value;
  let hasImage = false;
  if(image && image !== "") hasImage = true;
  
  if (setMode) mode = setMode;

  return (
    <Box sx={{m:0.5}}>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={<React.Fragment>
            { mode === "single" ? <IconButton
                    onClick={() => {
                      window.open("/", "_self");
                    }}
                  >
                    <Icon icon={"left"} color="primary" />
                  </IconButton> : null }

                  <IconButton
                    disabled={ mode === "single" ? true : false }
                    onClick={() => {
                      dispatch(navigateTo(track));
                    }}
                  >
                    <Icon icon={icon} color="primary" />
                  </IconButton>
                </React.Fragment>}

          // action={ mode !== "single" ? <React.Fragment>
          //           <ExpandMore
          //             expand={expanded}
          //             onClick={handleExpandClick}
          //             aria-expanded={expanded}
          //             aria-label="show more"
          //           >
          //             <Icon icon="acc" color="primary" />
          //           </ExpandMore>
          //           </React.Fragment> : null}
          title={ title }
          subheader={subheader}
        />

        { hasImage ? <CardMedia
                      component="img"
                      height={ mode === "single" ? 350 : 175 }
                      image={image}
                      alt={title}
                    /> : null }
        
          <CardContent>
            {bodyFormat === "text" ? <Typography variant="body2">
              {body}
            </Typography> : null }

            {bodyFormat === "html" ? <Typography variant="body1">
              {<span dangerouslySetInnerHTML={{ __html: body }}></span>}
            </Typography> : null }

            {bodyFormat === "md" ? <ReactMarkdown children={body} /> : null }

          </CardContent>
      </Card>
    </Box>
  );
}

/*
*/
