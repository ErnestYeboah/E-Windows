import WindowsGlobalState from "./Windows 10/context.jsx/context";
import WindowsDesktop from "./Windows 10/desktop/desktop";
import "./index.css";
function App() {
  return (
    <>
      <WindowsGlobalState>
        <WindowsDesktop />
      </WindowsGlobalState>
    </>
  );
}

export default App;
