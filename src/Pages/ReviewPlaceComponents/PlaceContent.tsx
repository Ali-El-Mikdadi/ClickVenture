// eslint-disable-next-line react-hooks/rules-of-hooks
import { Typography, Card, CardContent, useMediaQuery } from "@mui/material";
import { Place } from "../../../../api/SchemaDb";
import { useTheme } from "@mui/material/styles";
const PlaceContent = ({ place, type }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography
        sx={{
          fontFamily: "Ubuntu",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "31px",
          lineHeight: "150.6%",
          color: "#000000",
          marginBottom: "40px",
          px: { xs: "2rem", sm: "0" }, // Add this line
        }}
      >
        Share with us how your visit went?
      </Typography>
      <Card
        sx={{
          width: "194px",
          height: "245px",
          background: "#FFF5E1",
          borderRadius: "10px",
          margin: { xs: "0 auto", sm: "0" }, // Modify this line
          "@media (max-width:600px)": {
            // Add this line
            width: "90%", // Add this line
          }, // Add this line
        }}
      >
        <img
          src={`/systemImage/${place.imagePlace[0]}`}
          alt="Contemplative Reptile"
          style={{
            height: "134px",
            width: isMobile ? "90%" : "163px",
            // background: `url(/systemImages/${place.imagePlace[0]})`,
            marginLeft: "16px",
            marginRight: "16px",
            objectFit: "cover",
            marginTop: "20px",
            marginBottom: "-10px",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "150.6%",
              color: "#000000",
            }}
          >
            {place.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "9px",
              lineHeight: "150.6%",
              color: "#6B5E5E",
            }}
          >
            {place.location}
          </Typography>
        </CardContent>
      </Card>
      {type ? (
        <>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "semi-bold",
              fontWeight: 700,
              fontSize: "14px",
              color: "#000000",
              marginTop: "40px",
              px: { xs: "2rem", sm: "0" }, // Add this line
            }}
          >
            Please Keep in mind for photos:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              color: "#000000",
              marginTop: "10px",
              px: { xs: "2rem", sm: "0" }, // Add this line
            }}
          >
            You may upload up to 50 photos simultaneously. Supported photo
            formats include .jpg, .jpeg, .gif, and .png.
          </Typography>{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PlaceContent;
