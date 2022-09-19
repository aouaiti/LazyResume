import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";

const Side = styled(Paper)(({ theme }) => ({
  background: `${
    theme.palette.mode === "light"
      ? alpha(theme.palette.primary.light, 0.3)
      : alpha(theme.palette.primary.dark, 0.7)
  }`,
  transition: "1s",
}));

export default function SideBar() {
  // const navTo = (id) => {
  //   const el = document.querySelector(id);
  //   scroll.scrollTo(el, {
  //     offset: "-100",
  //     duration: "2000",
  //     easing: [0.25, 0.0, 0.35, 1.0],
  //   });
  // };
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: "999",
        top: "50%",
        right: "0%",
        transform: "translateY(-50%)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": {
          width: 56,
          minHeight: "100px",
          height: "fit-content",
          pt: 2,
          pb: 2,
        },
      }}
    >
      <Side
        // color="secondary"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "16px 0 0 16px",
          flexDirection: "column",
          gap: "5px",
          // color: "white",
        }}
        elevation={5}
      >
        <IconButton
          onClick={() => {
            // navTo("#section-1");
          }}
        >
          <KeyboardDoubleArrowUpOutlinedIcon
          //   sx={{ "&:hover": { color: "red" } }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            // navTo("#section-2");
          }}
        >
          <ArticleOutlinedIcon />
        </IconButton>
        <IconButton>
          <ArticleOutlinedIcon />
        </IconButton>
        <IconButton>
          <ArticleOutlinedIcon />
        </IconButton>
        <IconButton>
          <KeyboardDoubleArrowDownOutlinedIcon />
        </IconButton>
        {/* TEST */}
      </Side>
    </Box>
  );
}
