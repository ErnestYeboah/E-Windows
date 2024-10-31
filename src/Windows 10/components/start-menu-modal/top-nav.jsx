import { useContext } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { WindowsContext } from "../../context.jsx/context";
export default function TopNav() {
  const { userName } = useContext(WindowsContext);
  return (
    <div className="topnav">
      <p>
        <IoPersonSharp /> {userName}
      </p>
      <p>Life at a glance</p>
      <p>Games and More</p>
    </div>
  );
}
