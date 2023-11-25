<template>
  <div class="background-styling">
    <v-card variant="text">
          <v-card-title class="text-center mt-6">
              Добро пожаловать в Информационный портал населения "Навигатор чистоты"
          </v-card-title>
      </v-card>
      <v-responsive
              class="mx-auto mt-6"
              max-width="750"
      min-width="350">
          <v-autocomplete
                  v-model="searchValue"
                  @update:modelValue="pushCityAndRoute(this.searchValue)"
                  :items="items"
                  auto-select-first
                  density="comfortable"
                  menu-icon=""
                  placeholder="Укажите ваш город"
                  append-inner-icon="mdi-magnify"
                  rounded
                  theme="light"
                  variant="solo"
          ></v-autocomplete>
      </v-responsive>
      <v-card variant="text" class="card-list">
          <v-row class="pa-5">
              <v-col v-for="(elem, index) in this.colData"
                     :key="index"
                     sm="6">
                  <v-card
                          class="cycled-cards v-card-element ma-2 pa-2 rounded-xl" elevation="1"
                          color="#CAF822"
                  >
                      <v-card-title> <v-icon :icon="elem.icon"/>{{elem.name}}</v-card-title>
                      <div class="text-md-subtitle-1 card-text ma-5">{{elem.body}}</div>
                  </v-card>
              </v-col>
          </v-row>
      </v-card>
  </div>

</template>

<script>
import cityPage from "./cityPage.vue";
export default {
  components: {
    cityPage
  },
data(){
  return{
    colData: [{
      name: 'Города',
      body: 'Выберите в списке желаемый город',
      icon: 'mdi: mdi-city'
    }, {name: 'Новости',
      body: 'Просматривайте новости вашего города',
    icon: 'mdi: mdi-newspaper-variant-multiple'},
      {name: 'Карта',
      body: 'Просматривайте карту вашего города',
      icon: 'mdi: mdi-map-marker'},
      {name: 'Test Name',
        body: 'Test Body',
        icon: 'mdi: mdi-city'},
      {name: 'Test Name',
        body: 'Test Body',
        icon: 'mdi: mdi-city'},
      {name: 'Test Name',
        body: 'Test Body',
        icon: 'mdi: mdi-city'}],
      dialog: false,
      items: [
        {
          title: "Абакан",
          id: 0
        },
        {
          title: "Анапа",
          id: 1
        },
        {
          title: "Архангельск",
          id: 2
        },
        {
          title: "Астрахань",
          id: 3
        },
        {
          title: "Барнаул",
          id: 4
        },
        {
          title: "Белгород",
          id: 5
        },
        {
          title: "Благовещенск",
          id: 6
        },
        {
          title: "Брянск",
          id: 7
        },
        {
          title: "Владивосток",
          id: 8
        },
        {
          title: "Владикавказ",
          id: 9
        },
        {
          title: "Владимир",
          id: 10
        },
        {
          title: "Волгоград",
          id: 11
        },
        {
          title: "Вологда",
          id: 12
        },
        {
          title: "Воронеж",
          id: 13
        },
        {
          title: "Грозный",
          id: 14
        },
        {
          title: "Екатеринбург",
          id: 15
        },
        {
          title: "Иваново",
          id: 16
        },
        {
          title: "Ижевск",
          id: 17
        },
        {
          title: "Иркутск",
          id: 18
        },
        {
          title: "Йошкар-Ола",
          id: 19
        },
        {
          title: "Казань",
          id: 20
        },
        {
          title: "Калининград",
          id: 21
        },
        {
          title: "Калуга",
          id: 22
        },
        {
          title: "Кемерово",
          id: 23
        },
        {
          title: "Киров",
          id: 24
        },
        {
          title: "Кострома",
          id: 25
        },
        {
          title: "Краснодар",
          id: 26
        },
        {
          title: "Красноярск",
          id: 27
        },
        {
          title: "Курган",
          id: 28
        },
        {
          title: "Курск",
          id: 29
        },
        {
          title: "Москва",
          id: 30
        },
        {
          title: 'Санкт-Петербург',
          id: 31
        }
      ],
      searchValue: null,
    }
  },
  methods: {
    pushCityAndRoute(cityName){
      this.$store.commit('SET_CITY_NAME', cityName);
      this.$router.push({
        name: 'cityPage',
        params: {
          cityId: this.items.find(item => item.title === this.searchValue).id
        }
      })
    }
  }
}
</script>

<style scoped>

.v-card-element{
  transition: transform 0.45s ease-in-out;
}
.v-card-element:hover{
  transform: scale(1.02)
}
.card-text{
  color: black;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
.cycled-cards{
  width: 100%;
  min-height: 80px;

}
.card-list{
  margin: auto;
  width: 80%;
  min-width: 350px;

}
.background-styling{
    background-image: url("/city_img.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
</style>