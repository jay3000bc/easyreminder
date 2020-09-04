<template>
    <v-app-bar
      app
      color="white"
      dark
      height = 100vh;
      flat
    >
      <div class="d-flex align-center">
          COMPANY LOGO
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

      <v-btn to="/" text class="nav-items">
        <h3> HOME</h3>
      </v-btn>

      <v-btn to="/signup" text class="nav-items">  
        <h3> Sign Up </h3>
      </v-btn>

      <v-btn to="#" text class="nav-items">  
        <h3> Sign In </h3>
      </v-btn>
      
     </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

.nav-items h3 {
  color: rgba(0,0,0,.54);
  font-family: 'PT Sans', sans-serif;
}
</style>