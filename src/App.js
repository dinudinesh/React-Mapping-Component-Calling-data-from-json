import React from "react";

import Jock from "./Jock";
import JokesData from "./JokesData";

function App() {
  const Jokecomponent = JokesData.map(Joke => (
    <Jock question={Joke.question} answer={Joke.answ} />
  ));

  return <div>{Jokecomponent}</div>;
}
export default App;
