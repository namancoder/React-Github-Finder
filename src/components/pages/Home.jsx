import React, { useEffect, useState } from "react";
import { GITHUB_PAT, GITHUB_URL } from "../../utils/constants";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
