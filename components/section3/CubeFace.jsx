import { memo } from "react";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const CubeFace = (props) => {
  return (
    <Box {...props}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="div">
          SLIM KHAMESSI
        </Typography>
        <Typography variant="h6" component="div" color="text.secondary">
          A close friend
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            transform: "translateZ(10px)",
          }}
          alt="S K"
          src="/static/images/avatar/1.jpg"
        />
        <hr style={{ width: "90%", position: "absolute" }} />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Nice animation bro; keep it up
        </Typography>
        {/* <Typography component="legend">Read only</Typography> */}
        <Rating name="read-only" value={4} readOnly />
      </Box>
    </Box>
  );
};

export default memo(CubeFace);
