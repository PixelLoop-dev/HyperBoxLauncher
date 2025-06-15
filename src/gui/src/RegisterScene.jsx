export function RegisterScene ({ setScene }) {

  return (
    <main className="auth-RegisterScene">
      <div className="auth-content">
        <img src="../assets/logo.png" className="auth-logo" />

        <div className="auth-title">HyperBox Launcher</div>
        <div className="auth-sub-title">Зарегистрируйтесь, чтобы продолжить</div>
          
        <input type="text" placeholder="Логин" id="auth-name" className="auth-input" />
        <input type="password" placeholder="Пароль" id="auth-password" className="auth-input" />
        <input type="email" placeholder="Почта" id="auth-email" className="auth-input" />

        <button type="button" className="auth-button" onClick={() => setScene('main')}>Зарегистрироваться</button>
          
        <a className="auth-swap-mode" id="auth-to-login" onClick={() => setScene('login')}>Авторизация</a>
      </div>
    </main>
  );
}