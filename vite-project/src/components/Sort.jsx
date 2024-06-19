import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { getArticlesByDateAsc, getArticlesByDateDsc, getArticlesByCommentNoAsc, getArticlesByCommentNoDsc, getArticlesByVoteAsc, getArticlesByVoteDsc } from "../utils/api";


export const Sort = ({ setArticles }) => {
  const handleDateAsc = () => {
    getArticlesByDateAsc().then((res) => {
      setArticles(res);
    });
  };
  const handleDateDsc = () => {
    getArticlesByDateDsc().then((res) => {
      setArticles(res);
    });
  };
  const handleCommentNoAsc = () => {
    getArticlesByCommentNoAsc().then((res) => {
      setArticles(res);
    })
  };
  const handleCommentNoDsc = () => {
    getArticlesByCommentNoDsc().then((res) => {
      setArticles(res);
    })
  };
  const handleVoteNoAsc = () => {
    getArticlesByVoteAsc().then((res) => {
      setArticles(res);
    })
  };

  const handleVoteNoDsc = () => {
    getArticlesByVoteDsc().then((res) => {
      setArticles(res);
    })
  };

  const handleMenuItemClick = (popupState, callback) => {
    return () => {
      popupState.close();
      callback();
    };
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              backgroundColor: "grey",
              "&:hover": {
                backgroundColor: "darkgrey",
              },
            }}
          >
            Sort
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleMenuItemClick(popupState, handleDateAsc)}>
              Sort by date (ascending)
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick(popupState, handleDateDsc)}>
              Sort by date (decending)
            </MenuItem>
            <MenuItem
              onClick={handleMenuItemClick(popupState, handleCommentNoAsc)}
            >
              Sort by comment count (ascending)
            </MenuItem>
            <MenuItem
              onClick={handleMenuItemClick(popupState, handleCommentNoDsc)}
            >
              Sort by comment count (decending)
            </MenuItem>
            <MenuItem
              onClick={handleMenuItemClick(popupState, handleVoteNoAsc)}
            >
              Sort by votes (ascending)
            </MenuItem>
            <MenuItem
              onClick={handleMenuItemClick(popupState, handleVoteNoDsc)}
            >
              Sort by votes (decending)
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};
