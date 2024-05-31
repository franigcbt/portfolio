import React from 'react';
import './index.css';
import './drag.js';

function getRandomX() {
  const windowWidth = window.innerWidth || document.body.clientWidth;
  const centerX = windowWidth / 2;
  const variance = 100; // Valor de variación para la posición en X

  const minX = centerX - variance;
  const maxX = centerX + variance;

  const posX = Math.random() * (maxX - minX) + minX;
  console.log(posX);
  return posX;
}

function getRandomY() {
  const windowHeight = window.innerHeight || document.body.clientHeight;
  const upperY = windowHeight / 3; // Ajustar para abrir ventanas más arriba
  const variance = 200; // Valor de variación para la posición en Y

  const minY = upperY - variance;
  const maxY = upperY + variance;

  const posY = Math.random() * (maxY - minY) + minY;
  console.log(posY);
  return posY;
}



function Window({
  windowWidth = "600px",
  windowHeight = "400px",
  focussed,
  title = "Untitled",
  startPos,
  type,
  children,
  mouseDownHandler,
  clickHandler,
  ...rest
}) {
  let focusClass = "unfocussed";
  if (focussed === "true") {
    focusClass = "focussed";
  }

  const [selectedContent, setSelectedContent] = React.useState("");

  if (type === "folder") {
    return (
      <div
        className="window"
        data-x="100"
        onMouseDown={mouseDownHandler}
        onClick={clickHandler}
        style={{ left: `${startPos.x}px`, top: `${startPos.y}px` }}
      >
        <TitleBar barWidth={windowWidth}>Folder Explorer</TitleBar>
        <Box className={focusClass} boxWidth={windowWidth} style={{ height: windowHeight }}>
          <div style={{ display: "flex", height: "100%" }}>
            <div style={{ width: "200px", backgroundColor: "#383838", borderRight: "1px solid #3F3F3F", color: "white", padding: "10px" }}>
              <ul>
                <li style={{marginBottom: "10px"}} onClick={() => setSelectedContent("Documents")}>Documents</li>
                <li style={{height: "1px", backgroundColor: "#515151", marginBottom: "10px"}}></li>
                <li style={{marginBottom: "10px"}} onClick={() => setSelectedContent("Pictures")}>Pictures</li>
                <li style={{height: "1px", backgroundColor: "#515151", marginBottom: "10px"}}></li>
                <li style={{marginBottom: "10px"}} onClick={() => setSelectedContent("Music")}>Music</li>
              </ul>
            </div>
            <div style={{ flexGrow: 1, padding: "10px", overflowY: "auto" }}>
              {selectedContent === "Documents" && (
                <div>
                  <FolderIcon
                    clickHandler={() => alert("Opening Document 1")}
                    image={require("./assets/PNG/github.png")}
                    alt="document icon"
                    size="50"
                    style={{ margin: "10px" }}
                  >
                    Document 1
                  </FolderIcon>
                  <FolderIcon
                    clickHandler={() => alert("Opening Document 2")}
                    image={require("./assets/PNG/github.png")}
                    alt="document icon"
                    size="50"
                    style={{ margin: "10px" }}
                  >
                    Document 2
                  </FolderIcon>
                  <FolderIcon
                    clickHandler={() => alert("Opening Document 3")}
                    image={require("./assets/PNG/github.png")}
                    alt="document icon"
                    size="50"
                    style={{ margin: "10px" }}
                  >
                    Document 3
                  </FolderIcon>
                </div>
              )}
              {selectedContent === "Pictures" && <div>Pictures content goes here</div>}
              {selectedContent === "Music" && <div>Music content goes here</div>}
            </div>
          </div>
        </Box>
      </div>
    );
  }

  if (type === "notepad") {
    return (
      <div
        className="window"
        data-x="100"
        onMouseDown={mouseDownHandler}
        onClick={clickHandler}
        style={{ left: `${startPos.x}px`, top: `${startPos.y}px` }}
      >
        <TitleBar barWidth={windowWidth}>Notas</TitleBar>
        <Box className={focusClass} boxWidth={windowWidth}>
          <div
            style={{
              height: "calc(100% - 6px)",
              marginLeft: "3px",
              marginTop: "0px",
              marginRight: "3px"
            }}
          >
            
            <textarea
              className="notepad"
              style={{
                height: "100%",
                width: "100%",
                border: "none",
                outline: "none",
              }}
            />
          </div>
        </Box>
      </div>
    );
  }

  if (type === "trippy-file") {
    return (
      <div
        className="window"
        data-x="100"
        onMouseDown={mouseDownHandler}
        onClick={clickHandler}
        style={{ left: `${startPos.x}px`, top: `${startPos.y}px` }}
      >
        <TitleBar barWidth={windowWidth}>mixing.mp4</TitleBar>
        <Box className={focusClass} boxWidth={windowWidth}>
          <div
            style={{
              height: "calc(100% - 6px)",
              marginLeft: "3px",
              marginTop: "0px",
              marginRight: "3px",
              position: 'relative'
            }}
          >
          dsa

          </div>
        </Box>
      </div>
    );
  }

  if (type === "contact") {
    return (
      <div
        className="window"
        data-x="100"
        onMouseDown={mouseDownHandler}
        onClick={clickHandler}
        style={{ left: `${startPos.x}px`, top: `${startPos.y}px` }}
      >
        <TitleBar barWidth={windowWidth}>Contact</TitleBar>
        <Box className='{focusClass}' boxWidth={windowWidth} >
          <div
            className='contact-section'
            style={{
              height: "calc(100% - 6px)",
              marginLeft: "3px",
              marginTop: "0px",
              marginRight: "3px"
            }}
          >
            <div>
              <p>Welcome to my site. I'm Franco Goncebate, a creative web developer, 3D artist and app programmer based in Buenos Aires.</p>
              <p>I've been working locally for small and medium business for almost 8 years, guiding my clients to a better position in their brands by giving them advise on mail marketing, web services and technology in general. And I would love to work with you too!</p>
              <p>My skills include: After Effects, Photoshop, Illustrator, Blender, Cinema4D, Substance. HTML5, CSS, JavaScript, React, Bootstrap, TailwindCSS, Node.JS, Firebase, and learning.</p>
              <p>Write me about you:</p>
            </div>
            <div className='contact'>
              <a href="mailto:fgoncebate@gmail.com">Contactame</a>
            </div>
          </div>
        </Box>
      </div>
    );
  }

  //Estructura de la ventana inicial

  if (type === "welcome") {
    return (
      <div
        className="window"
        data-x="100"
        onMouseDown={mouseDownHandler}
        onClick={clickHandler}
        style={{ left: `${startPos.x}px`, top: `${startPos.y}px` }}
      >
        <TitleBar barWidth={windowWidth}>Welcome</TitleBar>
        <Box className={focusClass} boxWidth={windowWidth} style={{}}>
          
          <button
            type="button"
            className="btn btn-primary"
            
          >
            Create Friend
          </button>
        </Box>
      </div>
    );
  }

  return (
    <div
      className="window"
      onMouseDown={mouseDownHandler}
      onClick={clickHandler}
    >
      <TitleBar barWidth={windowWidth}>{title}</TitleBar>
      <Box
        className={focusClass}
        boxWidth={windowWidth}
        style={{ backgroundColor: "lightblue" }}
      >
        {children}
      </Box>
    </div>
  );
}

//Botón menú desplegable
function MenuButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-button">
      <button onClick={toggleMenu} className="menu-icon">
        <div style={{ width: '20px', height: '20px', backgroundColor: 'white' }}></div>
      </button>
      
        <div className={`menu-dropdown ${isOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => alert("Option 1")}>Option 1</li>
            <li onClick={() => alert("Option 2")}>Option 2</li>
            <li onClick={() => alert("Option 3")}>Option 3</li>
          </ul>
        </div>
      
    </div>
  );
}


//SISTEMA DE VENTANAS

function Desktop(numWindows = 3, ...rest) {
  const [windowArr, setWindowArr] = React.useState([
    {
      id: "_" + Math.random().toString(36).substring(2, 9),
      type: "contact",
      startPos: { x: `${getRandomX()}`, y: `${getRandomY()}` }
    }
  ]);

  //Focus, arreglo de ventanas
  
  function reorderArr(win) {
    let tempWinArr = currentWinArr.slice();
    let focussedWin = tempWinArr.splice(tempWinArr.indexOf(win), 1);
    let newArray = tempWinArr.concat(focussedWin);
    setWindowArr(newArray);
  }
  const currentWinArr = windowArr.slice();

  const getID = () => "_" + Math.random().toString(36).substr(2, 9);

  const addWindow = (type) =>
    setWindowArr(
      currentWinArr.concat({
        id: getID(),
        type: type,
        startPos: { x: `${getRandomX()}`, y: `${getRandomY()}` }
      })
    );

  function removeWindow(win) {
    var newArray = currentWinArr.slice();
    newArray.splice(currentWinArr.indexOf(win), 1);
    setWindowArr(newArray);
  }

  function handleWindowClick(win, e) {
    if (e.target.classList.contains("exit-icon")) {
      removeWindow(win);
      console.log("removing");
      return;
    }
  }

  function handlemouseDown(win) {
    //todo: trigger window close on 'onclick' but reorder on 'mousedown'
    reorderArr(win);
  }

  function renderWindows() {
    //todo: refactor focus handling
    return (
      <div
        className="desktop"
        style={{
          pointerEvents: "none",
          position: "fixed",
          width: "100%",
          height: "100%"
        }}
      >
        {windowArr.map((winObj, index) =>
          index === windowArr.length - 1 ? (
            <Window
              focussed="false"
              clickHandler={(e) => handleWindowClick(winObj, e)}
              mouseDownHandler={() => handlemouseDown(winObj)}
              key={winObj.id}
              type={winObj.type}
              startPos={winObj.startPos}
            />
          ) : (
            <Window
              focussed="true"
              clickHandler={(e) => handleWindowClick(winObj, e)}
              mouseDownHandler={() => handlemouseDown(winObj)}
              key={winObj.id}
              type={winObj.type}
              startPos={winObj.startPos}
            />
          )
        )}
      </div>
    );
  }
  return (
    

    <div>
      <TopBar>
        <NavItem icon='X'/>
        <NavItem icon='X'/>
        <NavItem icon='X'/>
        <Clock />
      </TopBar>

      <Icon
        className=""
        clickHandler={() => addWindow("folder")}
        image={require("./assets/PNG/carpeta.png")}
        alt="folder icon"
        style={{
          top: "350px"
        }}
        size="65"
      >
        Carpeta
      </Icon>
      
      <Icon
        className=""
        clickHandler={() => addWindow("trippy-file")}
        image={require("./assets/PNG/github.png")}
        alt="github icon"
        style={{
          top: "250px"
        }}
        size="65"
      >
        GitHub
      </Icon>

      <Icon
        className="draggable"
        clickHandler={() => addWindow("contact")}
        image={require("./assets/Mail.png")}
        alt="notepad icon"
        style={{
          top: "150px"
        }}
        size="65"
      >
        Contact
      </Icon>

      <Icon
        className=""
        clickHandler={() => addWindow("notepad")}
        image={require("./assets/PNG/notas.png")}
        alt="notepad icon"
        style={{
          top: "50px"
        }}
        size="65"
      >
        Notepad
      </Icon>

      
      
      {renderWindows()}
    </div>
  );
}

function FolderIcon({ image, alt, clickHandler = "", className = "", size, style, children, ...rest }) {
  return (
    <div
      style={style}
      className={`folder-icon ${className}`}
      onDoubleClick={clickHandler}
    >
      <img type="image" src={image} alt={alt} width={size} height={size} />
      <div>{children}</div>
    </div>
  );
}

function Clock() {
  const [datetime, setDatetime] = React.useState(getTime());

  function getTime() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return `${date} - ${time}`;
  }

  React.useEffect(() => {
    var timerID = setInterval(() => setDatetime(getTime()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [datetime]);

  return datetime;
}

function TopBar(props) {
  return (
    <nav className="nav-bar">
      <div className="left-section">
        <MenuButton />
      </div>
      <div className="center-section">
        
      </div>
      <div className="right-section">
        <Clock />
      </div>
    </nav>
  );
}


function NavItem(props){
  return(
    <li className='nav-item'>
      <a href="#" className='icon-button'>
        { props.icon }
      </a>
    </li>
  )
}

function Icon({
  image,
  alt,
  clickHandler = "",
  className = "",
  size,
  style,
  children,
  ...rest
}) {
  console.log(children);

  return (
    <div style={style} className={`icon draggable drag-cursor ${className}`}
      onDoubleClick={clickHandler}>
      <img type="image" src={image} alt={alt} width={size} height={size} />
      <div>{children}</div>
    </div>
  );
}

function Box({ className = "", style, boxWidth, ...rest }) {
  return (
    <div
      className={`box resizable ${className}`}
      style={{ width: `${boxWidth}`, height: `${boxWidth}`, ...style }}
      {...rest}
    />
  );
}
function TitleBar({ className = "", barWidth, children, ...rest }) {
  return (
    <div className={`titlebar draggable ${className}`} {...rest}>
      {children}
      <div style={{ float: "right", marginRight: "0px" }}>
        <p className="exit-icon">X</p>
      </div>
    </div>
  );


}

export default Desktop;

