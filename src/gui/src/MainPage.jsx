const { useState } = React;

function MainScene ({ ramQuantity, selectedRamQuantity, autoRamQuantity, gameDir }) {
  const [ramValue, setRamValue] = useState(selectedRamQuantity);
  const [autoRamQuantitY, setAutoRamQuantitY] = useState(autoRamQuantity);


  const updateSlider = (event) => {
    setRamValue(event.target.value)
  };

  const autoRamQuantityToggle = () => {
    setAutoRamQuantitY(!autoRamQuantitY)

    setRamValue(ramQuantity / 2)
  };

  return (
    <main className="MainScene">
      <div className="main-modpacks-list" id="ml">

        <div className="modpack">
          <img src=""/>
          <span id="modpack-title">HyperBox: Create</span>
        </div>
      </div>

      <div className="main-content">
        <button className="main-settings-toggle" id="settings"><img src="../assets/main/settings_icon.png" alt="" /></button>

        <span className="main-title" id="title">HyperBox: Create</span>

        <span className="main-description" id="description">
          <p>hjbsddfg dfgdfumjunuou hldsfgihjfdgijhdf ghjkndsgf hbkjdgfhbdgbk fjfkjn bdsfljn ksdnjmkmnvcnm vcmn vcmnvcm ncvmncvcvxc vxcv</p>
          <p>hjbsddfg dfgdfumjunu ouhld sfgihjf dgijhdfghjkndsgf hbkjdgf hbdgbkfjfkjnb dsfljnksdn jmkmnvcn mvcmnvcmnvc mncvmnc vcvxcvxcv</p>
        </span>

        <div className="main-control">
          <button type="button" className="main-play" id="play"><img src="../assets/main/play_icon.png" alt="" /> Играть</button>
          <button type="button" className="main-folder" id="gf"><img src="../assets/main/folder_icon.png" alt="" /></button>
        
          <div className="main-auth">
            <label>
              <img src="../assets/main/imsteeve.jpg"/>
              <input type="file" name="skin" id="Si" hidden />
            </label>
              <span>k4tsuro_</span>
          </div>
        </div>

        <div className="main-content-2">
          <div className="main-progress-bar">
            <div className="main-progress"></div>
          </div>
            <span className="main-progress-logs" id="logs">Сосал сосал сосал</span>
        </div>
      </div>

      <div className="blur"></div>

      <div className="settings">
        <div className="settings-close">⨯</div>

        <div className="settings-title">Настройки</div>

        <div className="settings-ram">
          <span><input type="checkbox" checked={autoRamQuantitY} onChange={autoRamQuantityToggle}/> Автоматически</span>

          <input 
            type="range" 
            className="ram-slider" 
            min="2" max={ramQuantity} 
            step="2" value={ramValue} 
            onChange={updateSlider}

            style={{ opacity: autoRamQuantitY ? 0.5 : 1, pointerEvents: autoRamQuantitY ? 'none' : 'auto', transition: 'opacity 0.3s'}}
          />

          <div className="tick-labels"
            style={{ opacity: autoRamQuantitY ? 0.5 : 1, transition: 'opacity 0.3s'}}
          >
            <span>2 Gb</span> <span>Выделено: <b>{ramValue} Gb</b></span> <span>{ramQuantity} Gb</span>
          </div>
        </div>

        <div className="settings-checkboxs">
          <span><input type="checkbox" checked={''} onChange={''}/> Полноэкранный режим</span>
          <span><input type="checkbox" checked={''} onChange={''}/> Режим отладки</span>
        </div>
      </div>
    </main>
  )
}