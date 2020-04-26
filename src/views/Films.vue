<template>
  <div class="films">
     
      <h1 class="subtitle grey--text">film index</h1>

        <v-container class="my-5">

            <v-card outlined class="px-3" v-for="(film, index) in ghibliFilms" :film="film" :key="index">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="caption grey--text">Movie Title</div>
                        <div>{{ film.title }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Director</div>
                        <div>{{ film.director }}</div>
                    </v-col>
                    <v-col cols="6" sm="4" md="2">
                        <div class="caption grey--text">Release Year</div>
                        <div>{{ film.release_date }}</div>
                    </v-col>
                    <v-col cols="4" sm="4" md="2">
                        <div class="caption grey--text">RT Score</div>
                        <div>{{ film.rt_score }}</div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <div class="caption grey--text">Description</div>
                        <div>{{ film.description }}</div>
                    </v-col>
                </v-row>
            </v-card>

           
            

        </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            ghibliFilms: []
        }
    },
    methods: {
        getFilms: function(){
            fetch("https://ghibliapi.herokuapp.com/films/")
            .then(res => res.json())
            .then(ghibliFilms => this.ghibliFilms = ghibliFilms)
        }
    },
    mounted(){
        this.getFilms();
    }
}
</script>

<style>

</style>