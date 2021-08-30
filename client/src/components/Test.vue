<template>
<div>
  <head>
    <meta charset="utf-8">
    <title>Head</title>
  </head>

  <body>

    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">GloW</div>
            <nav class="nav">

              <router-link class="nav_link" to="/songs">
              Songs
              </router-link>

              <router-link class="nav_link" to ="/login">
              Login
              </router-link>

              <router-link class="nav_link" to="/register">
              Register
              </router-link>

          </nav>
        </div>
      </div>
    </header>

  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">Music world around you</h1>
      </div>
    </div>
  </div>

<div class="songs">
  <div v-for="song in songs"
    :key="song.id"
    class="article">
      <div class="article_img">
        <img class="article_img" :src="song.albumImageUrl">

      </div>
      <h1 class="intro__title">{{song.title}}</h1>
    </div>
  <button class="btn">Load More</button>
  </div>
</body>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  },

  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },

  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=New+Rocker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

h1,h2,h3,h4,h5,h6{
margin: 0;
}

body{
  margin: 0  ;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.2rem;
  line-height: 1.6;
  color: #333;
  background:
  url("../assets/intro.jpg") center;
  -webkit-background-size: cover;
  background-size:cover;
}
*,
*:before,
*:after
{
  box-sizing: border-box;
}

/*container*/
.container{
  width: 100%;
  max-width: 200vw;
  margin: 0 auto;

}

/* Intro */
.intro{
  display: flex;
  flex-direction: column;
  justify-content: top;
  width: 100%;
  height: 100vh;

  -webkit-background-size: cover;
  background-size:cover;
}

.intro__title{
  font-family: 'New Rocker', cursive;
  font-size:3rem;
  font-weight: 900;
  text-transform: uppercase;
  color:whitesmoke;
  margin-top: 12vh;
}

.intro__inner{
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
}

.btn{
  display: inline-block;
  vertical-align: bottom;
  padding: 1vh;
  border: 1.5px solid #fff;
  font-size: 14px;
  font-weight: 700;
  color:whitesmoke;
  text-decoration: none;

  transition: background .1s
  linear, color .1s linear;
}

.btn:hover{
  background-color: lightgray;
  color:black
}

/* Header */
.header{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header__logo{
  font-family: 'New Rocker', cursive;
  padding-left: 4vw;
  font-size: 3rem;
  font-weight: 700;
  color: #aaa9ad;
}

.header__inner{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Nav */
.nav{
  font-size: 1.25rem;
  text-transform: uppercase;

}

.nav_link{
  display: inline-block;
  vertical-align: top;
  margin: 0 15px;
  position: relative;
  color: #aaa9ad;
  text-decoration: none;
  transition: color .2s linear;
}

.nav_link:after{
  content: "";
  width: 100%;
  height: 3px;
  background-color: whitesmoke;
  display: none;

  position: absolute;
  top:100%;
  left:0;
  z-index: 1;
}

.nav_link:hover{
  color: whitesmoke;
}

.nav_link:hover:after{
  display: block;
}
/* Article*/
.songs{
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
}
.article{
  width: 30%
}
.article_img{
  width: 19rem;
  height: 19rem;
}

</style>
