/**
 * General Settings
 */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, TextField, Button, Avatar, Box } from "@material-ui/core";

// Component
import { ContentLayout } from "components/Layouts";

// database connection
import { firebase } from "../../../firebase/index";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  profileThumb: {
    "& >div": {
      "& >div": {
        "& >div:first-child": {
          alignSelf: "center",
        },
      },
    },
  },
  fileUpload: {
    "& input": {
      height: "auto",
    },
  },
}));

export default function GeneralSettings(props) {
  const classes = useStyles();

  // state
  const [fName, setfName] = useState("Anita"),
    [lName, setlName] = useState("Doe"),
    [email, setEmail] = useState(props.email || "your.email@domain.com"),
    [user, setUser] = useState(null);

  // query user information
  React.useEffect(() => {
    const userRef = firebase.database().ref("User");
    userRef.on("value", (snapshot) => {
      const user = snapshot.val();
      const info = [];
      for (let i in user) {
        info.push({ i, ...user[i] });
      }
      setUser(info);
      console.log(user);
    });
  }, []);

  // submitting the form

  const handleSubmit = () => {
    const userRef = firebase.database().ref("User");
    const user = {
      fName,
      lName,
      email,
      _id: localStorage.access_token,
    };

    userRef.push(user);
  };

  return (
    <div className="hk-general-settings">
      <form>
        <Box mb={3}>
          <ContentLayout title="First Name">
            <FormControl fullWidth>
              <TextField
                value={fName}
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className=""
                type="input"
                onChange={(e) => {
                  setfName(e.target.value);
                }}
              />
            </FormControl>
          </ContentLayout>
        </Box>
        <Box mb={3}>
          <ContentLayout title="Last Name">
            <FormControl fullWidth>
              <TextField
                id="last-name"
                placeholder="Last Name"
                className=""
                type="input"
                value={lName}
                onChange={(e) => setlName(e.target.value)}
              />
            </FormControl>
          </ContentLayout>
        </Box>

        <Box mb={2}>
          <ContentLayout title="Email">
            <FormControl fullWidth>
              <TextField
                id="email"
                placeholder="Email"
                className=""
                type="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </ContentLayout>
        </Box>
        <Box mb={3}>
          <ContentLayout>
            <Button
              variant="outlined"
              color="primary"
              className="primary-bg-btn"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ContentLayout>
        </Box>
      </form>
    </div>
  );
}
