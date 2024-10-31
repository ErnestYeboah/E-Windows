import { useContext } from "react";
import { WindowsContext } from "../context.jsx/context";

export default function LoginModal() {
  const {
    userName,
    setUserName,
    setShowIntroView,
    showLoginModal,
    setShowLoginModal,
  } = useContext(WindowsContext);

  function logIn(e) {
    e.preventDefault();

    if (userName) {
      setShowLoginModal(false);

      setShowIntroView(true);
    }
  }

  return (
    <form
      onSubmit={logIn}
      className={showLoginModal ? "login__modal active" : "login__modal"}
    >
      <div className="login__wrapper">
        <div className="avatar">
          <img src="/images/scorpion.jpg" alt="" />
          <h2>Owner</h2>
        </div>

        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          id="username"
          placeholder="Type your username"
        />
      </div>
    </form>
  );
}
