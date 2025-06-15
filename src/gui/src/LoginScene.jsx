let Api = null;

function LoginScene ({ setScene }) {

  window.addEventListener('pywebviewready', () => {
    Api = window.pywebview.api;
  });

  // async function Login() {
  //   const w = await Api.print('123')
    
  //   w && setScene('main')
  // }

  return (
    <main className='auth-LoginScene'>
      <div className="auth-content">
        <img src="../assets/logo.png" className="auth-logo" />

        <div className="auth-title">HyperBox Launcher</div>
        <div className="auth-sub-title">Введите логин и пароль, чтобы продолжить</div>
          
        <input type="text" placeholder="Логин" id="auth-name" className="auth-input" />
        <input type="password" placeholder="Пароль" id="auth-password" className="auth-input" />

        <button type="button" className="auth-button">Войти</button>

        <a className="auth-swap-mode" id="auth-to-register" onClick={() => setScene('register')}>Зарегистрироваться</a>
      </div>
    </main>
  );
}