import useAuthStore from "./store";

const LoginStatus = () => {
  const body = useAuthStore(); //on zrobił w kursie restrukturyzacje oczywisce ale napisałem sobie TaskContext.

  if (body.user)
    return (
      <>
        <div>
          <span className="mx-2">{body.user}</span>
          <a onClick={() => body.logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => body.login("Jakub Wróbel")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
