<template>
  <div class="background-styling">
    <v-card id="map" class="map rounded-xl"/>
    <v-card variant="text">
          <v-card-title class="text-center">
              Добро пожаловать в Информационный портал населения "Навигатор чистоты"
          </v-card-title>
      </v-card>
      <v-responsive
              class="mx-auto mt-12"
              max-width="750"
      min-width="350">
          <v-autocomplete
                  v-model="searchValue"
                  @update:modelValue="console.log(searchValue)"
                  :items="items"
                  auto-select-first
                  class="flex-full-width pa-1 ma-1"
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

function init(){
  let map = new ymaps.Map('map', {
center: [60.00381161410379,30.362975130188094],
    zoom: 12
  })
  let placemark = new ymaps.Placemark([59.990073703305846,30.33182238821428], {
    balloonContent: `
    <v-card>
    Кто прочитал тот прочитал
</v-card>
    `
  }, {
    //iconLayout: 'default#image',
    //iconImageHref: 'https://cdn.iconscout.com/icon/free/png-512/free-attachment-66-438892.png?f=webp&w=256',
    //iconImageSize: [20, 20],
    //iconImageOffset: [0, 0]
  })


  // Для того, чтобы элемент не рисовать, нужно убрать комментарии. Как я понял, Ya запрещает это делать.
 // map.controls.remove('geolocationControl'); // удаляем геолокацию
 // map.controls.remove('searchControl'); // удаляем поиск
 // map.controls.remove('trafficControl'); // удаляем контроль трафика
 // map.controls.remove('typeSelector'); // удаляем тип
 // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
 // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
 // map.controls.remove('rulerControl'); // удаляем контрол правил
 // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
 // placemark.balloon.open(); // открыть по умолчанию балун
}
ymaps.ready(init);

export default {
data(){
  return{
    colData: [{
      name: 'Выберите свой город',
      body: 'Выберите ваш город, чтобы просмотреть новости и заявки вашего города',
      icon: 'mdi: mdi-city'
    }, {name: 'Test Name',
      body: 'Test Body',
    icon: 'mdi: mdi-city'}, {name: 'Test Name',
      body: 'Test Body',
      icon: 'mdi: mdi-city'},
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
              title: 'Москва',
          },
          {
              title: 'Санкт-Петербург',
          },
          {
              title: 'Краснодар',
          },
          {
              title: 'Нижний Новгород',
          },
          {
              title: 'Абакан',
          },{
              title: 'Москва',
          },
          {
              title: 'Санкт-Петербург',
          },
          {
              title: 'Краснодар',
          },
          {
              title: 'Нижний Новгород',
          },
          {
              title: 'Абакан',
          },
      ],
      searchValue: null,
    }
  }
}
</script>

<style scoped>
.map{
  width: 100%;
  height: 500px;
  background-color: #535bf2;
}
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
    background-image: url("city_img.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
</style>