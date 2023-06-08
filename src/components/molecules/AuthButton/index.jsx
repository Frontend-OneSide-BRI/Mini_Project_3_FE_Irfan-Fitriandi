import withReactContent from "sweetalert2-react-content";
import Swal from "src/utils/Swal";
import Button from "src/components/atoms/Button";
import { useGetReqTokenQuery } from "src/services/apiReq";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const { data, isLoading, isError, error } = useGetReqTokenQuery();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    setToken(data?.request_token);
  }, [data]);

  const handleToken = () => {
    MySwal.fire({
      title: "Permission",
      text: "We need your permission to read and write data on your account. You can't create a session if you not approve this request.",
    }).then((res) => {
      if (res.isConfirmed) {
        window.open(
          `https://www.themoviedb.org/authenticate/${token}`,
          "_blank"
        );
        setIsLogin(true);
      } else {
        setToken("");
      }
    });
  };

  if (isLoading) {
    return null;
  }

  if (isError) {
    return alert(error.message);
  }

  const config = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
    body: JSON.stringify({
      request_token: { token },
    }),
  };

  const handleSession = () =>
    fetch("https://api.themoviedb.org/3/authentication/session/new", config)
      .then((response) => response.json())
      .then((response) => alert(response.status_message))
      .catch((err) => alert(err.status_message));

  return (
    <>
      <Button
        label={!isLogin ? "Login" : "Get Session"}
        onClick={!isLogin ? handleToken : handleSession}
      />
    </>
  );
};

export default AuthButton;
