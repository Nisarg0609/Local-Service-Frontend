import React, { useEffect, useState } from "react";
import "./auth.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Avatar,
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Grow,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { signIn, signUp } from "../../redux/actions/userAction";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let res = null;
  let res2 = null;

  const notify = (res) => {
    if (res === "successfully signed up" || res === "successfully signed in") {
      toast.success(res, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } else {
      toast.error(res, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const [showPassword, setShowPassword] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  // ?password verification
  let hasSixChar = userData.password.length >= 6;
  let hasUpperChar = /(.*[A-Z].*)/.test(userData.password);
  let hasNumber = /(.*[0-9].*)/.test(userData.password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(userData.password);

  // ?email verification
  var e =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      userData.email
    );

  // ?Name verification
  let hasFName = userData.firstName.length >= 2;
  let hasLName = userData.lastName.length >= 2;

  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleChangeSignIn = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    res = await dispatch(signUp(userData));
    notify(res);
  };
  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    res2 = await dispatch(signIn(userData));
    notify(res2);
  };

  useEffect(() => {
    if (res !== null || res2 !== null) {
      notify(res);
    }
  }, [res, res2, notify]);

  return (
    <div className="auth" style={{ margin: "6rem 0" }}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Grow in>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            className="auth_paper"
            style={{
              maxWidth: "450px",
              padding: "1rem 2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar style={{ marginBottom: "1rem" }}>
              <FaLock />
            </Avatar>

            <Typography
              component="h1"
              variant="h5"
              style={{ marginBottom: "2rem" }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Typography>

            <form>
              <FormControl style={{ width: "100%", marginBottom: "1rem" }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  required
                  style={{ maxHeight: 50 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userData.role}
                  label="Role"
                  name="role"
                  onChange={handleChange}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                </Select>
              </FormControl>
              {isSignUp ? (
                <Grid container spacing={2}>
                  {}
                  <Grid item xs={6}>
                    <TextField
                      required
                      value={userData.firstName}
                      label="First Name"
                      name="firstName"
                      fullWidth
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.firstName && (
                      <FormHelperText>
                        {!hasFName && (
                          <Typography variant="body2" color="secondary">
                            contain at least two characters
                          </Typography>
                        )}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      label="Last Name"
                      name="lastName"
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.lastName && (
                      <FormHelperText>
                        {!hasLName && (
                          <Typography variant="body2" color="secondary">
                            contain at least two characters
                          </Typography>
                        )}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.email && !e && (
                      <FormHelperText>
                        <Typography variant="body2" color="secondary">
                          email contain one @, at least two character after dot
                          and does not contain space or special character
                        </Typography>
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        label="Password"
                        name="password"
                        type={!showPassword ? "text" : "password"}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment>
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <MdOutlineVisibility />
                              ) : (
                                <AiOutlineEyeInvisible />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      ></OutlinedInput>
                    </FormControl>
                    <FormHelperText>
                      {userData.password &&
                        (!hasSixChar ||
                          !hasUpperChar ||
                          !hasSpecialChar ||
                          !hasNumber) && (
                          <Typography variant="body2" color="secondary">
                            password contain at least 6 character, one upperCase
                            character, one digit and one special character
                          </Typography>
                        )}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Repeat Password"
                      name="confirmPassword"
                      variant="outlined"
                      size="small"
                      onChange={handleChange}
                    />
                    {userData.password && userData.confirmPassword && (
                      <FormHelperText>
                        {userData.password !== userData.confirmPassword ? (
                          <Typography variant="body2" color="secondary">
                            Password does not match
                          </Typography>
                        ) : null}
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      disabled={
                        !userData.email ||
                        !userData.password ||
                        !userData.confirmPassword ||
                        !hasNumber ||
                        !hasSixChar ||
                        !hasSpecialChar ||
                        !hasUpperChar ||
                        userData.password !== userData.confirmPassword ||
                        !e
                      }
                      fullWidth
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={handleSubmit}
                    >
                      Sign Up
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      style={{ backgroundColor: "transparent" }}
                      disableRipple
                      fullWidth
                      size="small"
                      onClick={switchMode}
                    >
                      ALREADY HAVE AN ACCOUNT? SIGN IN
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      value={userData.email}
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      size="small"
                      onChange={handleChangeSignIn}
                    />
                    {userData.email && !e && (
                      <FormHelperText>
                        <Typography variant="body2" color="secondary">
                          email contain one @, at least two character after dot
                          and does not contain space or special character
                        </Typography>
                      </FormHelperText>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        label="Password"
                        name="password"
                        type={!showPassword ? "text" : "password"}
                        onChange={handleChangeSignIn}
                        endAdornment={
                          <InputAdornment>
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <MdOutlineVisibility />
                              ) : (
                                <AiOutlineEyeInvisible />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      ></OutlinedInput>
                    </FormControl>
                    <FormHelperText>
                      {userData.password &&
                        (!hasSixChar ||
                          !hasUpperChar ||
                          !hasSpecialChar ||
                          !hasNumber) && (
                          <Typography variant="body2" color="secondary">
                            password contain at least 6 character, one upperCase
                            character, one digit and one special character
                          </Typography>
                        )}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      disabled={
                        !userData.email ||
                        !userData.password ||
                        !hasNumber ||
                        !hasSixChar ||
                        !hasSpecialChar ||
                        !hasUpperChar ||
                        !e ||
                        !userData.role
                      }
                      fullWidth
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={handleSubmitSignIn}
                    >
                      Sign In
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      style={{ backgroundColor: "transparent" }}
                      disableRipple
                      fullWidth
                      size="small"
                      onClick={switchMode}
                    >
                      DON'T HAVE AN ACCOUNT? SIGN UP
                    </Button>
                  </Grid>
                </Grid>
              )}
            </form>
          </Paper>
        </Container>
      </Grow>
    </div>
  );
};

export default Auth;
