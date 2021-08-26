<template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title>This is a header</v-toolbar-title>

          <v-toolbar-items>
            <v-btn text dark>
              Browse
            </v-btn>
          </v-toolbar-items>
          <v-spacer right></v-spacer>
          <v-toolbar-items>
            <v-btn text dark>
              Sign Up
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </template>

<script>
export default{

}
</script>

<style scoped>

</style>
