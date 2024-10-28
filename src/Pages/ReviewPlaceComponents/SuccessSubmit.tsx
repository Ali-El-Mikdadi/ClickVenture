import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const SuccessSubmit = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: isMobile ? "100%" : "331px",
        height: "190px",
        background: "rgba(96, 198, 100, 0.33)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: isMobile ? "1rem" : "50px",
        margin: isMobile ? "0 auto" : "0",
        // boxSizing: "border-box",
        px: isMobile ? "2rem" : "0", // Add this line
      }}
    >
      <CheckCircle
        sx={{
          width: "38px",
          height: "38px",
          color: "#4bae4f",
          marginBottom: "5px",
        }}
      />
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "31px",
          lineHeight: "150.6%",
          textAlign: "center",
          color: "#000000",
          marginTop: "5px",
        }}
      >
        Thank You!
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "150.6%",
          textAlign: "center",
          color: "#707070",
        }}
      >
        Your review contributes to the travel community, which is truly
        valuable. Please be patient, and we'll notify you once it's published.
      </Typography>
    </Box>
  );
};

export default SuccessSubmit;
