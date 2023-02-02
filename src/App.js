import '../css/styles.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>
          <img class="logo" src="img/logo.png" alt="Guess The Word" />
        </h1>
        <p class="message"></p>
        <p class="word-in-progress"></p>
        <p class="remaining">
          You have <span>8 guesses</span> remaining.
        </p>
        <ul class="guessed-letters"></ul>
        <form action="" class="guess-form">
          <label for="letter">Type one letter:</label>
          <input type="text" name="letter" class="letter" />
          <div class="form-element button-element">
            <button class="guess">Guess!</button>
          </div>
        </form>
        <button class="play-again hide">Play Again!</button>
      </div>
    </div>
  );
}
