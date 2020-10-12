import React, { useEffect } from "react";
import { User } from "../../store/userList/types";
import { UserListContainer } from "./styles";

const infiniteScroll = () => {
  // End of the document reached?
  console.log("test");
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    console.log("scroll");
  }
};

const UserList = ({ userList }: { userList: User[] }) => {
  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);

    return window.removeEventListener("scroll", infiniteScroll);
  }, []);
  return (
    <UserListContainer>
      {userList?.map((u) => (
        <div key={u.id} style={{ height: 300 }}>
          {JSON.stringify(u)}
        </div>
      ))}
    </UserListContainer>
  );
};

export default UserList;
