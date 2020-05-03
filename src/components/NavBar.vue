<template>
  <nav>
      
    <v-app-bar flat app color="#EEE4E1">
      <v-app-bar-nav-icon class="text--grey darken-3" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Studio</span>
        <span class="font-weight-medium">Ghibli</span>
        <span class="font-weight-light"> Movie Index</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app color="#AA857A">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route" link>
          <v-list-item-action>
            <v-icon class="white--text" v-text="link.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title white--text" v-text="link.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      
  </nav>
</template>

<script>
export default {
    name: 'nav-bar',
    data(){
        return{
            drawer: false,
            links: [
                 { icon: "mdi-filmstrip-box-multiple", text: "Films", route: "/" },
                 { icon: "mdi-heart", text: "About", route: "/about" },
            ]
        }
    },
}
</script>

<style>

.nav-drawer{
  color: #EEE4E1;
}

</style>