const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

function App () {

  
  window.addEventListener('pywebviewready', () => {
  // Управление окном
    document.getElementById("window-close").onclick = () => window.pywebview.api.close();

    document.getElementById("window-minimize").onclick = () => window.pywebview.api.minimize();
  });


  const [scene, setScene] = useState("login");

  return (
  <>
    <header className="pywebview-drag-region">
      <div className="window-title">HyperBox Launcher</div>
      <div className="action-buttons">
        <div id="window-minimize">-</div>
        <div id="window-close">⨯</div>
      </div>
    </header>

    {scene === "login" && <LoginScene setScene={setScene} />}
    {scene === "register" && <RegisterScene setScene={setScene} />}
    {/* {scene === "main" && <MainScene setScene={setScene} />} */}

    {/* {scene === "loading" && <LoadingScene />} */}
  </>
)}


root.render( <App /> );
