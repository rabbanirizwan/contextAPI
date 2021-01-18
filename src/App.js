
import './App.css';
import { useState } from 'react';
import { MyProvider } from './MyProvider';
import ListItem from './componet/ListItem';
import AddItem from './componet/AddItem-box';
import InputBox from './componet/InputBox';
import HiddenMessage from './componet/HiddenMessage';
import Display from './componet/Display';
import Controls from './componet/Controls';
import BlogPost from './componet/Theme';
import CallingData from './componet/CallingData';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const scoreStrike = () => {
    setStrikes(strikes + 1);
  }
  const scoreBall = () => {
    setBalls(balls + 1);
  }
  const scoreFoul = () => {
    setStrikes(strikes + 1);
  }
  const scoreHit = () => {
    setStrikes(0);
    setBalls(0);
  }



  return (

    <MyProvider>
      <div className="App">

        <Display strikes={strikes} balls={balls} />
        <Controls strikes={scoreStrike}
          balls={scoreBall}
          fouls={scoreFoul}
          hits={scoreHit}
        />
        <hr />

        <h5>To Do List</h5>
        <AddItem/>
        <ListItem />
        <hr />
        <InputBox />
        <hr />
        <hr />
        <HiddenMessage>sdsdsdsds</HiddenMessage>
        <hr />
        <BlogPost/>
        <hr/>
        <hr/>
        <CallingData url="https://api.chucknorris.io/jokes/random"/>

        <hr/>
        
      </div>
    </MyProvider>






  );
}

export default App;
