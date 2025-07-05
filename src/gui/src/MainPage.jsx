export function MainScene () {

  let modpack = {
    "name": "HyperBox: Create",
    "description": [
      "Добро пожаловать в мир инженерии и магии! Сборка основана на модах Create, Botania и Ars Nouveau. На сервере нет приватов, но есть войс-чат для удобного общения.",
      "Новичкам помогут подробные квесты, а новая система питания добавит интереса в выживании. Строй, исследуй, развивайся вместе с другими игроками!"
    ]}

  return (
    <main className="MainScene">
      <div className="main-modpacks-list" id="ml">

        <div className="modpack">
          <img src="../assets/temporary/main.jpg"/>
          <span id="modpack-title">HyperBox: Create</span>
        </div>

      </div>

      <div className="main-content">
        <button className="main-settings" id="settings"><img src="../assets/main/settings_icon.png" alt="" /></button>

        <span className="main-title" id="title">HyperBox: Create</span>

        <span className="main-description" id="description">
          <p>hjbsddfg dfgdfumjunuou hldsfgihjfdgijhdf ghjkndsgf hbkjdgfhbdgbk fjfkjn bdsfljn ksdnjmkmnvcnm vcmn vcmnvcm ncvmncvcvxc vxcv</p>
          <p>hjbsddfg dfgdfumjunu ouhld sfgihjf dgijhdfghjkndsgf hbkjdgf hbdgbkfjfkjnb dsfljnksdn jmkmnvcn mvcmnvcmnvc mncvmnc vcvxcvxcv</p>
        </span>

        <div className="main-control">
          <button type="button" className="main-play" id="play"><img src="../assets/main/play_icon.png" alt="" /> Играть</button>
          <button type="button" className="main-folder" id="gf"><img src="../assets/main/folder_icon.png" alt="" /></button>
        
          <div className="main-auth"><img src=""/> <span>Pixel_Loop</span></div>
        </div>

        <div className="main-content-2">
          <div className="main-progress-bar">
            <div className="main-progress"></div>
          </div>
            <span className="main-progress-logs" id="logs">Сосал сосал сосал</span>
        </div>
        
      </div>
    </main>
  )
}