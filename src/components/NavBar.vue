<template>
  <nav>
      
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Studio</span>
        <span>Ghibli</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>visit Ghibli</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route" link>
          <v-list-item-action>
            <v-icon class="white--text" v-text="link.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
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
                 { icon: "mdi-home-circle", text: "Home", route: "/" },
                 { icon: "mdi-filmstrip-box-multiple", text: "Films", route: "/films" },
                 { icon: "mdi-heart", text: "About", route: "/about" },
            ]
        }
    },
}
</script>

<style>

</style>