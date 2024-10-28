import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import formPhoto from "../images/Login/FormPhoto.png";
import backgroundImage from "../images/Login/Background.png";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { UserContext } from "../UserContext";
// Styled component for the form box
const FormBox = styled(Box)(({ theme }) => ({
  borderRadius: "15px",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
  padding: theme.spacing(3),
  backgroundImage: `url('${backgroundImage}')`,
  backgroundSize: "cover",
  width: "600px",
  height: "654px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  "@media (max-width:600px)": {
    width: "100%",
  },
}));

// Main component
export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigation = useNavigate();
  const { refreshUser } = React.useContext(UserContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    email: "",
  });
  const [wrong, setWrong] = React.useState(false);

  const [alert, setAlert] = React.useState<string | null>(null);

  const validateFields = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const tempErrors = {
      email: !emailRegex.test(email) ? "Invalid email" : "",
    };
    setErrors(tempErrors);
    return !tempErrors.email;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateFields()) {
      const email = (document.getElementById("email") as HTMLInputElement)
        .value;
      const password = (document.getElementById("password") as HTMLInputElement)
        .value;
      const fetchFunction = async () => {
        try {
          const res = await axios.post("http://localhost:4000/login", {
            email: email,
            password: password,
          });

          if (res.status === 200) {
            setAlert("success");
            if (refreshUser) {
              refreshUser();
            }
            setTimeout(() => navigation("/"), 1200);
            setWrong(false);
          } else {
            setAlert("error");
          }
        } catch (err) {
          if ((err as AxiosError).response?.status === 401) {
            setAlert("error");
          }
          console.log(err);
        }
      };

      fetchFunction();
    }
  };

  // Email validation
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Basic regex for email validation
  };

  // Password validation
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    // Basic regex for password validation: At least 8 characters, at least one letter and one number
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth={false}>
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <FormBox onSubmit={handleSubmit}>
            <Box
              sx={{
                position: "fixed",
                top: "15%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {alert === "success" && (
                <Alert severity="success">Login Sucess!</Alert>
              )}
              {alert === "error" && (
                <Alert severity="error">Incorrect Email or Password.</Alert>
              )}
            </Box>

            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "rgb(14, 34, 67)",
                fontSize: "32px",
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            >
              Login
            </Typography>

            <Typography
              component="h5"
              variant="h5"
              sx={{ fontSize: "12px", fontFamily: "Roboto" }}
            >
              Welcome Back!
            </Typography>

            <Box component="form" sx={{ mt: 3, width: "100%" }}>
              <TextField
                required
                fullWidth
                name="email"
                id="email"
                label="Email"
                autoComplete="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
                error={!!errors.email || wrong}
                helperText={!!errors.email ? errors.email : ""}
              />

              <TextField
                required
                fullWidth
                name="password"
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
                error={wrong}
                helperText={
                  wrong ? "Error: either email or password wrong" : ""
                }
                sx={{ mt: 2 }}
              />

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ color: "rgb(23, 18, 255)", textDecoration: "none" }}
                >
                  Forgot password?
                </Link>
              </Box>

              <hr
                style={{
                  borderWidth: "1px",
                  color: "rgb(200, 200, 200)",
                  borderColor: "rgb(200, 200, 200)",
                  backgroundColor: "rgb(200, 200, 200)",
                  marginTop: "20px",
                  flexGrow: 1,
                  marginLeft: "10px",
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "rgb(242, 183, 100)",
                  color: "black",
                  "&:hover": { color: "white" },
                }}
              >
                Login
              </Button>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="body2">
                  Don't have an account?
                  <Link
                    component={RouterLink}
                    to="/Signup"
                    sx={{ color: "rgb(23, 18, 255)", textDecoration: "none" }}
                  >
                    {" Sign Up"}
                  </Link>
                </Typography>
              </Box>
            </Box>
          </FormBox>

          {!isMobile && (
            <Box sx={{ ml: 3 }}>
              <img src={formPhoto} alt="Form" />
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
