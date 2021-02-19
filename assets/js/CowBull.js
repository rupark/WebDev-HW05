import React, { useState, useEffect } from 'react';
import { uniq, updatecows, updatebulls, lives_left } from './game';
import "phoenix_html"
import "../css/app.scss"

function CowBull() {
  // concept taken from https://github.com/NatTuck/scratch-2021-01/blob/master/notes-4550/04-react-intro/notes.md
  // const [secret, _setSecret] = useState(generateSecret);
  // const [guesses, setGuesses] = useState([]);
  // const [guess, setGuess] = useState("");
  // const [cows, setCows] = useState(0);
  // const [bulls, setBulls] = useState(0);

  const [state, setState] = useState({
      secret: generateSecret(),
      guess: "",
      guesses: [],
      cows: 0,
      bulls: 0,
      aperror: "",
      r1: "",
      r2: "",
      r3: "",
      r4: "",
      r5: "",
      r6: "",
      r7: "",
      r8: ""
  });


  let {secret, guess, guesses, cows, bulls, aperror, r1, r2, r3, r4, r5, r6, r7, r8} = state;

  // const [apperror, setError] = useState("");

  // Results for each round
  // const [r1, setr1] = useState("");
  // const [r2, setr2] = useState("");
  // const [r3, setr3] = useState("");
  // const [r4, setr4] = useState("");
  // const [r5, setr5] = useState("");
  // const [r6, setr6] = useState("");
  // const [r7, setr7] = useState("");
  // const [r8, setr8] = useState("");

  // concept taken from https://github.com/NatTuck/scratch-2021-01/blob/master/notes-4550/04-react-intro/notes.md
  let bads = state.guesses;
  // let blep = uniq(guesses.concat('hi'));
  // let state1 = Object.assign({}, state, {blep});
  // console.log(state1);
  console.log(state.guesses)
  let lives = lives_left(state.guesses);

  // concept taken from https://github.com/NatTuck/scratch-2021-01/blob/master/notes-4550/04-react-intro/notes.md
  function updateGuess(ev) {
    let text = ev.target.value;
    console.log(text)
    console.log(state.guesses)
    if (text.length < 5) {
      // arr = Object.assign({}, state.secret, state.guess.concat(text), state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8};
      setState({secret: state.secret,
      guess: text,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: state.aperror,
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: state.r4,
      r5: state.r5,
      r6: state.r6,
      r7: state.r7,
      r8: state.r8});
      // console.log(state.text)
      console.log(state)
      console.log(state.guesses)
      console.log(state.guess)
      // setGuess(text);
    }
  }

  function generateSecret() {
    var tsecret = 1111;
    while (isUnique(tsecret.toString()) == false) {
      tsecret = Math.floor(1000 + Math.random() * 9000);
    }
    return tsecret;
  }

  function isUnique(val) {
    let seen = new Array(0);
    var i;
    for (i = 0; i < val.length; i++) {
      if (!seen.includes(val.charAt(i))) {
        seen[i] = val.charAt(i);
      } else {
        return false;
      }
    }
    return true;
  }

  function setRoundVal(c, b) {
    console.log("round");
    console.log(state.guesses);
    let result = guess + " C" + c + " B" + b;
    switch (lives){
      case 8:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, result, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8);
        // setr1(result);
        setState({secret: state.secret,
        guess: state.guess,
        guesses: state.guesses,
        cows: state.cows,
        bulls: state.bulls,
        aperror: state.aperror,
        r1: result,
        r2: state.r2,
        r3: state.r3,
        r4: state.r4,
        r5: state.r5,
        r6: state.r6,
        r7: state.r7,
        r8: state.r8});
        break;
      case 7:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, result, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8);
        setState({secret: state.secret,
        guess: state.guess,
        guesses: state.guesses,
        cows: state.cows,
        bulls: state.bulls,
        aperror: state.aperror,
        r1: state.r1,
        r2: result,
        r3: state.r3,
        r4: state.r4,
        r5: state.r5,
        r6: state.r6,
        r7: state.r7,
        r8: state.r8});
        // setr2(result);
        break;
      case 6:
      // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, result, state.r4, state.r5, state.r6, state.r7, state.r8);
      setState({secret: state.secret,
      guess: state.guess,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: state.aperror,
      r1: state.r1,
      r2: state.r2,
      r3: result,
      r4: state.r4,
      r5: state.r5,
      r6: state.r6,
      r7: state.r7,
      r8: state.r8});
        // setr3(result);
        break;
      case 5:
      // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, result, state.r5, state.r6, state.r7, state.r8);
      setState({secret: state.secret,
      guess: state.guess,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: state.aperror,
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: result,
      r5: state.r5,
      r6: state.r6,
      r7: state.r7,
      r8: state.r8});
        // setr4(result);
        break;
      case 4:
      // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, result, state.r6, state.r7, state.r8);
      setState({secret: state.secret,
      guess: state.guess,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: state.aperror,
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: state.r4,
      r5: result,
      r6: state.r6,
      r7: state.r7,
      r8: state.r8});
        // setr5(result);
        break;
      case 3:
      // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, result, state.r7, state.r8);
      setState({secret: state.secret,
      guess: state.guess,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: state.aperror,
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: state.r4,
      r5: state.r5,
      r6: result,
      r7: state.r7,
      r8: state.r8});
        // setr6(result);
        break;
      case 2:
      // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, result, state.r8);
      setState({secret: state.secret,
      guess: state.guess,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: state.aperror,
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: state.r4,
      r5: state.r5,
      r6: state.r6,
      r7: result,
      r8: state.r8});
        // setr7(result);
        break;
      case 1:
      // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, result);
      setState({secret: state.secret,
      guess: state.guess,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: state.aperror,
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: state.r4,
      r5: state.r5,
      r6: state.r6,
      r7: state.r7,
      r8: result});
        // setr8(result);
        break;
    }
  }

  function makeGuess() {
    if (state.guess.length == 4 && isUnique(state.guess)) {
      console.log('in make');
      console.log(state.guess);
      // setState(state.secret, "", uniq(state.guesses.concat(state.guess)), updatecows(state.secret, state.guess), updatebulls(state.secret, state.guess), state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8);

      console.log("round");
      console.log(state.guesses);
      let cs = updatecows(state.secret, state.guess);
      let bs = updatebulls(state.secret, state.guess);
      let result = guess + " C" + cs + " B" + bs;
      switch (lives){
        case 8:
          // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, result, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8);
          // setr1(result);
          setState({secret: state.secret,
          guess: "",
          guesses: uniq(state.guesses.concat(state.guess)),
          cows: cs,
          bulls: bs,
          aperror: state.aperror,
          r1: result,
          r2: state.r2,
          r3: state.r3,
          r4: state.r4,
          r5: state.r5,
          r6: state.r6,
          r7: state.r7,
          r8: state.r8});
          break;
        case 7:
          // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, result, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8);
          setState({secret: state.secret,
          guess: "",
          guesses: uniq(state.guesses.concat(state.guess)),
          cows: cs,
          bulls: bs,
          aperror: state.aperror,
          r1: state.r1,
          r2: result,
          r3: state.r3,
          r4: state.r4,
          r5: state.r5,
          r6: state.r6,
          r7: state.r7,
          r8: state.r8});
          // setr2(result);
          break;
        case 6:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, result, state.r4, state.r5, state.r6, state.r7, state.r8);
        setState({secret: state.secret,
        guess: "",
        guesses: uniq(state.guesses.concat(state.guess)),
        cows: cs,
        bulls: bs,
        aperror: state.aperror,
        r1: state.r1,
        r2: state.r2,
        r3: result,
        r4: state.r4,
        r5: state.r5,
        r6: state.r6,
        r7: state.r7,
        r8: state.r8});
          // setr3(result);
          break;
        case 5:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, result, state.r5, state.r6, state.r7, state.r8);
        setState({secret: state.secret,
        guess: "",
        guesses: uniq(state.guesses.concat(state.guess)),
        cows: cs,
        bulls: bs,
        aperror: state.aperror,
        r1: state.r1,
        r2: state.r2,
        r3: state.r3,
        r4: result,
        r5: state.r5,
        r6: state.r6,
        r7: state.r7,
        r8: state.r8});
          // setr4(result);
          break;
        case 4:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, result, state.r6, state.r7, state.r8);
        setState({secret: state.secret,
        guess: "",
        guesses: uniq(state.guesses.concat(state.guess)),
        cows: cs,
        bulls: bs,
        aperror: state.aperror,
        r1: state.r1,
        r2: state.r2,
        r3: state.r3,
        r4: state.r4,
        r5: result,
        r6: state.r6,
        r7: state.r7,
        r8: state.r8});
          // setr5(result);
          break;
        case 3:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, result, state.r7, state.r8);
        setState({secret: state.secret,
        guess: "",
        guesses: uniq(state.guesses.concat(state.guess)),
        cows: cs,
        bulls: bs,
        aperror: state.aperror,
        r1: state.r1,
        r2: state.r2,
        r3: state.r3,
        r4: state.r4,
        r5: state.r5,
        r6: result,
        r7: state.r7,
        r8: state.r8});
          // setr6(result);
          break;
        case 2:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, result, state.r8);
        setState({secret: state.secret,
        guess: "",
        guesses: uniq(state.guesses.concat(state.guess)),
        cows: cs,
        bulls: bs,
        aperror: state.aperror,
        r1: state.r1,
        r2: state.r2,
        r3: state.r3,
        r4: state.r4,
        r5: state.r5,
        r6: state.r6,
        r7: result,
        r8: state.r8});
          // setr7(result);
          break;
        case 1:
        // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, state.aperror, state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, result);
        setState({secret: state.secret,
        guess: "",
        guesses: uniq(state.guesses.concat(state.guess)),
        cows: cs,
        bulls: bs,
        aperror: state.aperror,
        r1: state.r1,
        r2: state.r2,
        r3: state.r3,
        r4: state.r4,
        r5: state.r5,
        r6: state.r6,
        r7: state.r7,
        r8: result});
          // setr8(result);
          break;
    }
  }
    else {
      // setState(state.secret, "", uniq(guesses.concat(state.guess)), updatecows(state.secret, state.guess), updatebulls(state.secret, state.guess), "Entries must be 4 characters and unique", state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8);
      setState({secret: state.secret,
      guess: "",
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: "Entries must be 4 characters and unique",
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: state.r4,
      r5: state.r5,
      r6: state.r6,
      r7: state.r7,
      r8: state.r8});
      // setError("Entries must be 4 characters and unique");
    }
  }

  function keypress(ev) {
    if (state.aperror != "") {
      // setState(state.secret, state.guess, state.guesses, state.cows, state.bulls, "", state.r1, state.r2, state.r3, state.r4, state.r5, state.r6, state.r7, state.r8);
      setState({secret: state.secret,
      guess: state.guess,
      guesses: state.guesses,
      cows: state.cows,
      bulls: state.bulls,
      aperror: "",
      r1: state.r1,
      r2: state.r2,
      r3: state.r3,
      r4: state.r4,
      r5: state.r5,
      r6: state.r6,
      r7: state.r7,
      r8: state.r8});
      // setError("");
    }
    if (ev.key == "Enter") {
      console.log('here')
      makeGuess();
    }
  }

  function reset(){
    // setGuesses([]);
    // _setSecret(generateSecret);
    // setGuess("");
    // setCows(0);
    // setBulls(0);
    // setr1("");
    // setr2("");
    // setr3("");
    // setr4("");
    // setr5("");
    // setr6("");
    // setr7("");
    // setr8("");
    // setState(generateSecret, "", [], 0, 0, "", "", "", "", "", "", "", "", "")
    setState({secret: generateSecret(),
    guess: "",
    guesses: [],
    cows: 0,
    bulls: 0,
    aperror: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    r7: "",
    r8: ""});
  }

  if (lives <= 0) {
    return (
      <div className="CowBull">
        <h1>4digits</h1>
        <h2>You lost. The secret was {state.secret}</h2>
        <h2>Guesses:</h2>
        <h3>Round 1: {state.r1}</h3>
        <h3>Round 2: {state.r2}</h3>
        <h3>Round 3: {state.r3}</h3>
        <h3>Round 4: {state.r4}</h3>
        <h3>Round 5: {state.r5}</h3>
        <h3>Round 6: {state.r6}</h3>
        <h3>Round 7: {state.r7}</h3>
        <h3>Round 8: {state.r8}</h3>
        <p>
          <button onClick={() => reset()}>
            Reset
          </button>
        </p>
      </div>
    );
  }

  if (state.bulls == 4) {
    return (
      <div className="CowBull">
        <h1>4digits</h1>
        <h2>You win! The secret was {state.secret}.</h2>
        <h2>Guesses:</h2>
        <h3>Round 1: {state.r1}</h3>
        <h3>Round 2: {state.r2}</h3>
        <h3>Round 3: {state.r3}</h3>
        <h3>Round 4: {state.r4}</h3>
        <h3>Round 5: {state.r5}</h3>
        <h3>Round 6: {state.r6}</h3>
        <h3>Round 7: {state.r7}</h3>
        <h3>Round 8: {state.r8}</h3>
        <p>
          <button onClick={() => reset()}>
            Reset
          </button>
        </p>
      </div>
    );
  }

  //input text box inspired by https://github.com/NatTuck/scratch-2021-01/blob/master/notes-4550/04-react-intro/notes.md
  return (
    <div className="CowBull">
      <h1 id="title">4digits</h1>
      <h2>Lives: {lives}</h2>
      <h2>Guesses:</h2>
      <h3>Round 1: {state.r1}</h3>
      <h3>Round 2: {state.r2}</h3>
      <h3>Round 3: {state.r3}</h3>
      <h3>Round 4: {state.r4}</h3>
      <h3>Round 5: {state.r5}</h3>
      <h3>Round 6: {state.r6}</h3>
      <h3>Round 7: {state.r7}</h3>
      <h3>Round 8: {state.r8}</h3>

      <h4>{state.aperror}</h4>
      <p>
        <input type="number"
               value={state.guess}
               onChange={updateGuess}
               onKeyPress={keypress} />
      </p>
      <p>
        <button onClick={() => reset()}>
          Reset
        </button>
      </p>
    </div>
  );
}

export default CowBull;
