export function MainScene () {

  let modpack = {
    "name": "HyperBox: Create",
    "description": [
      "Добро пожаловать в мир инженерии и магии! Сборка основана на модах Create, Botania и Ars Nouveau. На сервере нет приватов, но есть войс-чат для удобного общения.",
      "Новичкам помогут подробные квесты, а новая система питания добавит интереса в выживании. Строй, исследуй, развивайся вместе с другими игроками!"
    ]}

  return (
    <main className='main-MainScene'>
      <div className="main-modpacks-list" id="main-modpacks-list">
        <img src="../assets/logo.png" className="main-modpack"/>
      </div>

      <div className="main-modpack-info">
        <span className="main-modpack-title" id="main-modpack-title">{modpack.name}</span>
        <span className="main-modpack-description" id="main-modpack-description">

          {modpack.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

        </span>
      </div>

      <div className="main-sys">
        <button type="button" id="main-play" className="main-play">Играть</button>
        <img src='../assets/main/folder_icon.png' id="main-game-folder"/>

        {/* <div className="main-progress-bar">
          <div className="main-progress" id="main-progress"></div>
        </div> */}
      </div>

      <div className="main-setting-buttons">
        <img src='../assets/main/settings_icon.png' className="main-action-button" id="main-settings-toggle"/>
      </div>
    </main>
  )
}