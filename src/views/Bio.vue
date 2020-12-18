<template>
<div>
  <div class="bio">
    <img src="../../images/profile.jpg" id="profile-pic">
    <div class="bio-text">
      <h2>About the Artist</h2>
      <p class="description">Maddie hails from Idaho but currently lives in Utah while pursuing a
        BFA in Illustration from Brigham Young University. She served a mission
        for the Church of Jesus Christ of Latter-Day Saints in Oklahoma. She
        also has three younger siblings and a loving family who have encouraged
        her to pursue her passion for art since a young age.</p>
      <p class="description">Her work has been exhibited in the Springville Art Museum, in the BYU
        Harris Fine Arts Center, and on utility boxes in the Meridian area of Idaho.</p>
      <div class="contact">
        <h3 id="contact-text"><strong>Find her on: </strong></h3>
        <!--I'm not actually going to link to anything here, because I don't feel
          like finding her Instagram and she doesn't have an Etsy or a TikTok.
          Also idk why it where the text at a different level than the links??-->
        <a class="contact-link" href="#">Instagram </a>
        <a class="contact-link" href="#">Etsy </a>
        <a class="contact-link" href="#">TikTok </a>
      </div>
    </div>
  </div>
</div>
</template>


<style scoped>
#profile-pic {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin: 1em 1em 1em 1em;
}

.bio {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bio-text {
  width: 50%;
}

.description {
  padding-top: 1.25em;
  font-size: 1.25em;
}

.contact {
  display: flex;
  align-items: center;
  padding-top: 1.25em;
  padding-bottom: 1.5em;
}

h2 {
  font-family: 'Cedarville Cursive';
  font-size: 4em;
  margin-top: 0.5em;
}

#contact-text {
  font-family: 'Julius Sans One';
  font-size: 1.25em;
  padding-right: 1em;
}

.contact-link {
  font-size: 1.25em;
  padding-right: 1em;
}

</style>
