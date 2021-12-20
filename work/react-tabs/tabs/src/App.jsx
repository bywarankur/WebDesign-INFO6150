import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
  
    <div className="container">
      <div className="bloc-tabs">
        <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <b>  Basket Ball</b> 
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <b>Foot-Ball</b>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
            <b>Cricket</b>
        
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>About</h2>
          <hr />
          <p>
          Basketball is a team sport in which two teams, most commonly of five players each, 
          opposing one another on a rectangular court, 
          compete with the primary objective of shooting a basketball through the defender's hoop 
          while preventing the opposing team.
          </p>
        </div>  

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>About</h2>
          <hr />
          <p>
          Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. 
          Unqualified, the word football normally means the form of football that is the most popular where the word is used. 
          Sports commonly called football include association football (known as soccer in North America and Oceania); 
          gridiron football (specifically American football or Canadian football); Australian rules football; 
          rugby union and rugby league; and Gaelic football.
     
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>About</h2>
          <hr />
          <p>
          Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard 
          (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. 
          The game proceeds when a player on the fielding team, called the bowler, 
          "bowls" (propels) the ball from one end of the pitch towards the wicket at the other end. 
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;

