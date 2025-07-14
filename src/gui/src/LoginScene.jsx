const { useRef } = React;
let Api = null;

function LoginScene ({ setScene }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  window.addEventListener('pywebviewready', () => {
    Api = window.pywebview.api;
  });

  function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(username);
  }

  async function TryToLogin() {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const warn = document.getElementById('warn');
    const button = document.getElementById('auth-button');

    if (!isValidUsername(username)) {
      button.classList.add('warn');

      setTimeout(() => {
        button.classList.remove('warn');
      }, 1500);
      return;
    }

    try {
      const success = await Api.TryToLogin(username, password);

      if (success) {
        setScene('main');
      } else {
        button.classList.add('warn');
      }
    } catch (error) {
      warn.textContent = 'Произошла ошибка при входе';
      console.error(error);
    }
  }


  return (
    <main className='auth-LoginScene'>
      <div className="auth-content">
        <img src="../assets/logo.png" className="auth-logo" />

        <div className="auth-title">HyperBox Launcher</div>
        <div className="auth-sub-title">Введите логин и пароль, чтобы продолжить</div>

        <input type="text" placeholder="Логин" className="auth-input" ref={usernameRef} />
        <input type="password" placeholder="Пароль" className="auth-input" ref={passwordRef} />

        <div className="warn" id="warn"></div>

        <button type="button" className="auth-button" id="auth-button" onClick={TryToLogin}>Войти</button>
      </div>
    </main>
  );
}