import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { sectionIndex } from "../../Features/globalUiVars/currentSection";
import { currentPart } from "../../Features/globalUiVars/section2";
import { rotate } from "../../Features/globalUiVars/section3";
import { memo } from "react";
import { makeVisible } from "../../Features/globalUiVars/footer";
import Image from "next/image";
import ForumIcon from "@mui/icons-material/Forum";

const Side = styled(Paper)(({ theme }) => ({
  background: `${
    theme.palette.mode === "light"
      ? alpha(theme.palette.primary.light, 0.3)
      : alpha(theme.palette.primary.dark, 0.7)
  }`,
  transition: "1s",
}));

const SideBar = () => {
  const currentSection2Part = useSelector((state) => state.section2.part);
  const rotation = useSelector((state) => state.section3.rotation);
  const currentSection = useSelector((state) => state.currentSection.Section);
  const isFooterVisible = useSelector((state) => state.footer.isVisible);
  const dispatch = useDispatch();
  const eventHandler = async (s, p = 0) => {
    if (isFooterVisible === true) dispatch(makeVisible(false));
    if (currentSection !== 1 && s === 1) {
      dispatch(currentPart(-currentSection2Part));
      dispatch(sectionIndex(s));
      return;
    }
    if (currentSection === 1 && s === 2) {
      dispatch(currentPart(-currentSection2Part + p));
      dispatch(sectionIndex(s));
      return;
    }
    if (currentSection !== 2 && s === 2) {
      dispatch(sectionIndex(s));
      dispatch(currentPart(-currentSection2Part + p));
      return;
    }
    if (currentSection === 2) dispatch(currentPart(-currentSection2Part + p));
    if (currentSection === 2 && s === 2) return;
    if (currentSection !== 3 && s === 3) {
      dispatch(currentPart(-currentSection2Part + 3));
    }
    if (currentSection === 3) {
      dispatch(rotate(-rotation));
    }
    if (currentSection === 3 && s === 3) return;
    dispatch(sectionIndex(s));
  };
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
      style={{
        height: "100vh",
        width: "10vw",
        position: "fixed",
        // isolation: "isolate",
        zIndex: "99999",
        right: "0%",
      }}
    >
      <Box
        id="sidebar"
        sx={{
          position: "absolute",
          // isolation: "isolate",
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
          <IconButton onClick={() => eventHandler(1)}>
            <KeyboardDoubleArrowUpOutlinedIcon
            //   sx={{ "&:hover": { color: "red" } }}
            />
          </IconButton>
          <IconButton onClick={() => eventHandler(2, 0)}>
            <Image width="30" height="30" src="/us.svg" alt="US flag" />
          </IconButton>
          <IconButton onClick={() => eventHandler(2, 1)}>
            <Image width="30" height="30" src="/fr.svg" alt="FR flag" />
          </IconButton>
          <IconButton onClick={() => eventHandler(2, 2)}>
            <Image width="30" height="30" src="/ca.svg" alt="CA flag" />
          </IconButton>
          <IconButton onClick={() => eventHandler(3)}>
            <ForumIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              if (currentSection === 1) {
                dispatch(makeVisible(true));
                return;
              }
              eventHandler(4);
              dispatch(makeVisible(true));
            }}
          >
            <KeyboardDoubleArrowDownOutlinedIcon />
          </IconButton>
          {/* TEST */}
        </Side>
      </Box>
    </Box>
  );
};

export default memo(SideBar);
