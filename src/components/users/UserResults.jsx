import React, { useContext, useEffect, useState } from "react";
import GithubContext from "../../context/github/GithubContext";
import { GITHUB_PAT, GITHUB_URL } from "../../utils/constants";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const { searchUsers, loading, users } = useContext(GithubContext);

  return (
    <>
      {!loading && (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      )}
      {loading && <Spinner />}
    </>
  );
}

export default UserResults;
