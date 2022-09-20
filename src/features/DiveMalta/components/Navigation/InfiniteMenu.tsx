import * as React from 'react';
import {
    useFeatureSelect,
    useFeatureDispatch,
} from "../../../Shared/store/hooks";
import {
    Icon,
} from "../../../Shared";
import {
    goTo,
    selectDiveMalta,
    increaseShowNumber,
    setDiveMaltaKey,
} from "../../";
import {
    useMediaQuery,
    Button,
    Box,
    Grid,
    List,
    Paper,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Typography,
} from "@mui/material";
import {
    InfiniteMenuShape, 
    WierdShape,
} from "../../types";

export default function InfiniteMenu(props:InfiniteMenuShape) {
    let open = true;
    let isProd = true;
    const dispatch = useFeatureDispatch();
    const diveMalta = useFeatureSelect( selectDiveMalta );
    const {list, showInfiniteMenu, showNumber} = diveMalta;
    const host = window.location.host;
    if (host !== process.env.REACT_APP_PROD_HOST) isProd = false;
    const isMobile = !useMediaQuery("(min-width:900px)");
    if(isMobile) open = false;
    if (showInfiniteMenu) open = true;

    const handleMenuClick = (slug: string) => {
        dispatch(goTo({ renderAs: "internal", options: {slug, isProd }}));
    };

    const loadMore = () =>{
        dispatch(increaseShowNumber({by:1, max: list.length}));
    };

    const menuButtonClick = () => {
        dispatch(setDiveMaltaKey({key: "showInfiniteMenu", value: !open}));
    };

    return (
        <Box sx={{m:0.5}}>
            {isMobile ? <Button
                fullWidth
                color="primary"
                variant="contained"
                id="infinite-button"
                aria-controls={open ? 'infinite-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    menuButtonClick();
                }}>
                <Icon icon="imenu" />
                <span style={{marginLeft:8,marginRight:8}}>
                    { open ? `Hide nav` : `Show nav` }
                </span>
                { open ? <Icon icon="up" /> : <Icon icon="down" /> }
            </Button> : null }

            { open ? <Paper>
                
                <List id="infinite-menu">
                    { list.map((item:WierdShape, i: number) => {
                        const {
                            title,
                            icon,
                            slug,
                            tags,
                            category,
                        } = item.value;
                        if (i >= showNumber) return null
                        let secondaryText = <React.Fragment>
                                                {category ? category.toString() : null}
                                                {tags ? tags.toString() : null}
                                            </React.Fragment>;
                        if(tags && !category){
                            secondaryText = tags.toString();
                        };
                        return (<MenuItem 
                                    key={`track_${i}`}
                                    onClick={() => {
                                        handleMenuClick(slug);
                                    }}>
                                    <ListItemIcon>
                                        <Icon icon={icon} color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={title}
                                        secondary={secondaryText}
                                    />
                                </MenuItem>);
                    })}
                </List>
                
            </Paper> : null }
            { open ? <React.Fragment>

                
                <Grid container>
                    <Grid item xs={6}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "white",
                                p:1,
                            }}>
                            Showing {showNumber} of {list.length}
                        </Typography>
                    </Grid>
                    { list.length > showNumber ? <Grid item xs={6}>
                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            id="infinite-button"
                            aria-controls={open ? 'infinite-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                loadMore();
                            }}>
                            <span style={{marginLeft:8,marginRight:8}}>
                                Show more
                            </span>
                            <Icon icon="add" />
                        </Button>
                    </Grid> : null  }
                    
                </Grid>
                    
                    
            </React.Fragment> : null}
            
        </Box>
    );
}
