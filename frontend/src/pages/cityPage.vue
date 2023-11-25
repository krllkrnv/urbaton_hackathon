<template>
  <div id="mapContainer" class="background-styling">
    <v-card variant="text">
      <div class="">
      </div>
    </v-card>

    <div class="text-center">
      <div id="map-controls">
        <button
            :class="{'red-button': this.$store.getters.GET_SHOW_EVENTS}"
            class="category-button rounded-xl"
            data-category="category1"
            @click="this.$store.commit('PRESS_EVENTS')"
        >
          События
        </button>
        <button
            :class="{'red-button': this.$store.getters.GET_SHOW_REQUESTS}"
            class="category-button rounded-xl"
            data-category="category2"
            @click="this.$store.commit('PRESS_REQUESTS')">
          Обращения
        </button>
        <button
            :class="{'red-button': this.$store.getters.GET_SHOW_NEWS}"
            class="category-button rounded-xl"
            data-category="category3"
            @click="this.$store.commit('PRESS_NEWS')">
          Новости
        </button>
        <button
            :class="{'red-button': this.$store.getters.GET_SHOW_BRIEF}"
            class="category-button rounded-xl"
            data-category="category4"
            @click="this.$store.commit('PRESS_BRIEF')">
          Опросы
        </button>
      </div>
      <v-card id="map" class="map rounded-xl mb-6"/>
    </div>
    <city-events v-show="this.$store.getters.GET_SHOW_EVENTS"/>
    <city-requests v-show="this.$store.getters.GET_SHOW_REQUESTS"/>
    <city-news v-show="this.$store.getters.GET_SHOW_NEWS"/>
    <city-brief v-show="this.$store.getters.GET_SHOW_BRIEF"/>
  </div>
</template>

<script>
import axios from "axios";
import cityEvents from "../components/cityEvents.vue";
import cityNews from "../components/cityNews.vue";
import cityRequests from "../components/cityRequests.vue";
import cityBrief from "../components/cityBrief.vue";

export default {
  components: {
    cityEvents, cityNews, cityRequests, cityBrief
  },
  data() {
    return {
      categoriesData: {
        category1: [{
          lat: 55.75222,
          lon: 37.61556,
          name: 'Метка 1 - Категория 1',
        },
          {
            lat: 55.75159,
            lon: 37.61688,
            name: 'Метка 2 - Категория 1'
          },
        ],
        category2: [{
          lat: 55.75583,
          lon: 37.61778,
          name: 'Метка 1 - Категория 2'
        },
          {
            lat: 55.75651,
            lon: 37.61622,
            name: 'Метка 2 - Категория 2'
          },
        ],
        category3: [{
          lat: 55.75444,
          lon: 37.61833,
          name: 'Метка 1 - Категория 3'
        },
          {
            lat: 55.75333,
            lon: 37.61722,
            name: 'Метка 2 - Категория 3'
          },
        ],
      },
    }
  },
  methods: {
    async init() {
      const map = new ymaps.Map('map', {
        center: await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=69f1320c-11d6-4167-9d5c-8fd0273ee37a&geocode=${this.$store.getters.GET_CITY_NAME}&format=json`)
            .then(result => {
              console.log(result.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(Number));
              return result.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(Number).reverse();
            }),
        zoom: 12,
      });

      let activeCategory = "category1";
      const showCategory = (category) => {
        map.geoObjects.removeAll();

        if (this.categoriesData[category]) {
          this.categoriesData[category].forEach((item) => {
            const placemark = new ymaps.Placemark([item.lat, item.lon], {
              hintContent: item.name,
              balloonContent: `
              <v-card>
    Кто прочитал тот прочитал
</v-card>
              `,
            });
            // Для того, чтобы элемент не рисовать, нужно убрать комментарии. Как я понял, Ya запрещает это делать.
             map.controls.remove('geolocationControl'); // удаляем геолокацию
             map.controls.remove('searchControl'); // удаляем поиск
             map.controls.remove('trafficControl'); // удаляем контроль трафика
            // map.controls.remove('typeSelector'); // удаляем тип
             //map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
             //map.controls.remove('rulerControl'); // удаляем контрол правил
             //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
            map.geoObjects.add(placemark);
          });
        }

        activeCategory = category;
      };

      const categoryButtons = document.querySelectorAll('.category-button');
      categoryButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const category = e.currentTarget.dataset.category;
          showCategory(category);
        });
      });

      showCategory(activeCategory);
    }
  },
  mounted() {
    ymaps.ready(this.init);

  }
}
</script>

<style scoped>
.map {
  width: 80%;
  height: 500px;
  background-color: #CAF822;
  margin: 0 auto;
}

.background-styling {
  background-image: url("/city_img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

#map-controls {
  justify-content: center;
}

.category-button {
  margin: 1rem;
}

.red-button {
  background-color: #CAF822;
}
</style>