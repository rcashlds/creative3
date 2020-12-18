<template>
<div id="app">
  <div id="header">
    <div id="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/bio">Bio</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/commission">Commission</router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <img src="../images/illustrated_profile.png" id="bio-photo">
    <div class="foot-text">
      <a href="#" id="github-link"><strong>GITHUB REPOSITORY</strong></a>
      <p id="bio-text">MADDIE BAKER | @maddiebakermakes</p>
    </div>
  </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');

#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
}

#header {
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: #DCDCDC;
}

.footer {
  display: flex;
  background-color: #DCDCDC;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.foot-text {
  padding-top: 40px;
  font-family: 'Julius Sans One';
}

#bio-photo {
  max-width: 80px;
  max-height: 80px;
  border-radius: 50%;
  margin: 2em 1em 1em 1em;
}

a {
  color: black;
  font-family: 'Julius Sans One';
  padding-left: 1em;
  padding-right: 1em;
}

a:hover {
  color: grey;
}
</style>
