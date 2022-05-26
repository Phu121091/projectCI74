import React, { useEffect, useState } from "react";

const User = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let current = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : {};

    setCurrentUser(current);
  }, []);

  if (!currentUser) return <></>;

  return (
    <div>
      <h1>Hello, {currentUser.userName} </h1>
    </div>
  );
};

export default User;