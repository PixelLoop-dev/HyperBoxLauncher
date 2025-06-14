const root = ReactDOM.createRoot(document.getElementById('root'));
const { useState } = React;

function App () {
  const [scene, setScene] = useState("login");

  
  window.addEventListener('pywebviewready', () => {
  // Управление окном
    document.getElementById("window-close").onclick = () => window.pywebview.api.close();

    document.getElementById("window-minimize").onclick = () => window.pywebview.api.minimize();
  });


  return (
    <>
      {scene === "login" && <LoginScene setScene={setScene} />}
      {scene === "register" && <RegisterScene setScene={setScene} />}
      {scene === "main" && <MainScene />}

      {/* {scene === "loading" && <LoadingScene />} */}
    </>
  )
}


root.render( <App /> );
