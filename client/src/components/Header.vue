<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'songs'
        }">
        Header
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        text
        dark
        :to="{
          name: 'songs'
        }">
        Songs
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn
        text
        dark
        :to="{
          name: 'songs-create'
        }">
        CreateSongs
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn
        text
        dark
        :to="{
          name: 'test'
        }">
        TEST
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        text
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: '/'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style>
