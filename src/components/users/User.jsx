import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import GithubContext from "../../context/github/GithubContext";

function User() {
  const { user, getUser } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    console.log(params);
    getUser(params.login);
  }, []);
  return <div>{user.login}</div>;
}

export default User;
