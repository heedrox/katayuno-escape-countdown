<template>
  <div class="home-view">
    <h1>Welcome to Katayuno Escape Edition</h1>
    <p><strong>How to play: </strong></p>
    <p> - To start the experience, open following pages in different tabs:</p>
    <ul>
      <li><a href="briefings" target="_blank">The mission briefings</a></li>
      <li><a href="countdown" target="_blank">The 3 hour countdown timer</a></li>
      <li><a href="keypad1" target="_blank">The keypad Room 1</a></li>
      <li><a href="keypad2" target="_blank">The keypad Room 2</a></li>
      <li><a href="keypad3" target="_blank">The kataboom! keypad</a></li>
    </ul>
    <p> - Open the envelope with the MISSION BRIEFING <b>P</b> AND <b>NUMBER 1</b>.</p>
    <p> - Read it carefully, and make sure you know what to do. Breathe deeply.</p>
    <p> - Go to the countdown timer tab, and press START. Do not stop it unless it's an emergency.</p>
    <p> - Follow instructions of the mission during the following 3 hours. Good luck, Agent!</p>
  </div>
</template>
<style>
  @import url(https://fonts.googleapis.com/css?family=VT323:400);

  .home-view {
    text-align: left;
    padding-left: 10vw;
    padding-top: 8vh;
    font-size: 1vw;
  }

  .home-view h1,.home-view p {
    color: #999;
  }
  .home-view a {
    color: #006600;
  }
  .home-view h1,.home-view p,.home-view a {
    font-family: 'VT323', serif;
  }

  @media screen and (orientation:portrait) {
    .home-view h1 {
      font-size: 4vh;
    }
    .home-view a, .home-view p {
      font-size: 3vh;
    }

  }
  @media screen and (orientation:landscape) {
    .home-view h1 {
      font-size: 4vw;
    }
    .home-view a, .home-view p {
      font-size: 2vw;
    }

  }
</style>
