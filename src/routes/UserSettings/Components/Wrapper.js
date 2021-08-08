import React, { useState, useEffect } from "react";
import { firebase } from "../../../firebase/index";

export default function Wrapper() {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const userRef = firebase.database().ref(user);
    userRef.on("value", (snapshot) => {
      console.log(snapshot);
    });
  }, []);

  return <>Hello World</>;
}
