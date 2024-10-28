import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import formPhoto from "../images/Signup/FormPhoto.png";
import backgroundImage from "../images/Signup/Background.png";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
export default function Signup() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigation = useNavigate();

  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [alert, setAlert] = React.useState({
    success: false,
    error: false,
    alertMessage: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function validateFields() {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const confirmPassword = (
      document.getElementById("confirmPassword") as HTMLInputElement
    ).value;

    let tempErrors = {
      email: /\S+@\S+\.\S+/.test(email) ? "" : "Invalid email",
      password: /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/.test(password)
        ? ""
        : "Invalid password. Must contain at least 8 characters, at least one capital letter and one number and one special character.",
      confirmPassword:
        password === confirmPassword
          ? ""
          : "Password and Confirm Password must match.",
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validateFields()) {
      // Ensure that fields are validated only once and used effectively.
      setAlert({
        success: true,
        error: false,
        alertMessage: "SignUp Successful!",
      });
      // Send the plain password directly to the server; ensure your connection is secure with HTTPS.
      axios
        .post("/signUp", {
          name: name,
          username: username,
          email: email,
          password: password, // Sending the plain password securely over HTTPS.
        })
        .then((res) => {
          setTimeout(() => navigation("/Login"), 1200); // Navigate to login page after a successful registration.
        })
        .catch((err) => {
          if (err.response && err.response.status === 400) {
            setAlert({
              error: true,
              success: false,
              alertMessage: "User already exists",
            });
          } else {
            // Handle other types of errors perhaps related to network issues, server errors, etc.
            console.log(err);
            setAlert({
              success: false,
              error: true,
              alertMessage: "Registration failed, please try again.",
            });
          }
        });
    } else {
      // Alert for invalid fields, assuming validateFields updates UI with specific messages
      setAlert({
        success: false,
        error: true,
        alertMessage: "Please correct the highlighted fields.",
      });
    }
  };

  // Email validation
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Basic regex for email validation
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    // Add your name validation logic here
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    // Add your username validation logic here
  };

  // Password validation
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    // Basic regex for password validation: At least 8 characters, at least one capital letter and one number
  };

  // Confirm Password validation
  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
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
              {alert.success === true && (
                <Alert severity="success">{alert.alertMessage}</Alert>
              )}
              {alert.error === true && (
                <Alert severity="error">{alert.alertMessage}</Alert>
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
              Sign Up
            </Typography>

            <Typography
              component="h5"
              variant="h5"
              sx={{ fontSize: "12px", fontFamily: "Roboto" }}
            >
              Welcome!
            </Typography>

            <Box component="form" sx={{ mt: 3, width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    id="name"
                    label="Name"
                    autoComplete="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="username"
                    id="username"
                    label="Username"
                    autoComplete="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </Grid>
              </Grid>
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
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mt: 2 }}
              />

              <TextField
                required
                fullWidth
                name="password"
                id="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
                error={!!errors.password}
                helperText={errors.password}
                sx={{ mt: 2 }}
              />

              <TextField
                required
                fullWidth
                name="confirmPassword"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{ mt: 2 }}
              />

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
                Sign Up
              </Button>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="body2">
                  Already have an account?
                  <Link
                    component={RouterLink}
                    to="/Login"
                    sx={{ color: "rgb(23, 18, 255)", textDecoration: "none" }}
                  >
                    {" Login"}
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
