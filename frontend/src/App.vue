<template>
  <div class="app">
    <v-app>
    	<v-app-bar
          rounded
          elevation="0"
                   color="#CAF822"
                   prominent>
        <router-link  style="text-decoration: none; color: inherit;"
                      @click="this.$store.commit('SET_CITY_NAME', '')"
                      to="/">
          <div class="d-flex align-center">
            <v-icon size="50" class="mr-3 ma-2">mdi-city-variant-outline</v-icon>
            <div class="header-title font-weight-bold">Навигатор </div>
          </div>
        </router-link>
        <div
            :class="{'hide-on-small-screen': isSmallScreen}"
            class="header-title "
            v-if="this.$store.getters.GET_CITY_NAME">/{{this.$store.getters.GET_CITY_NAME}}</div>
        <v-spacer></v-spacer>
        <div>
          <v-btn
              class="ma-1"
              :class="{'hide-on-small-screen': isSmallScreen}"
              rounded variant="tonal">Оставить заявку</v-btn>
          <v-btn
              class="ma-1"
              :class="{'hide-on-small-screen': !isSmallScreen}"
              icon="mdi: mdi-plus"
              variant="tonal"/>
          <router-link
              style="text-decoration: none; color: inherit;"
              to="/news"
              @click="this.$store.commit('SET_CITY_NAME', '')">
            <v-btn class="ma-1"
                   prepend-icon="mdi: mdi-newspaper-variant-outline"
                   rounded
                   variant="tonal"
                   :class="{'hide-on-small-screen': isSmallScreen}"
            >Новости</v-btn>
            <v-btn class="ma-1"
                                   :class="{'hide-on-large-screen': !isSmallScreen}"
                                   icon="mdi: mdi-newspaper-variant-outline"

                                   variant="tonal"></v-btn>
          </router-link>
          <router-link
              style="text-decoration: none; color: inherit;"
              to="/signin"
              @click="this.$store.commit('SET_CITY_NAME', '')">
            <v-btn
              class="ma-1"
              rounded
              variant="tonal"
              :class="{'hide-on-small-screen': isSmallScreen}"
              prepend-icon="mdi: mdi-login">Войти</v-btn>
            <v-btn
                class="ma-1"
                variant="tonal"
                :class="{'hide-on-large-screen': !isSmallScreen}"
                icon="mdi: mdi-login"/>
          </router-link>
        </div>
		</v-app-bar>
		<v-main>
      <router-view>
      </router-view>
		</v-main>
      <v-card class="footer bg-body-tertiary text-center text-lg-start">
        <div class="text-center p-3"><br>
          2023 — <strong>Квантовая Запутанность</strong>
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import mainPage from "./pages/mainPage.vue";
export default {
  name: 'App',
  components: {mainPage},
  data() {
    return {
      isSmallScreen: false
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
    }
  }
}
</script>

<style scoped>
.header-title{
  font-family: Helvetica, serif;
  font-size: 22px;
}
.footer{
  background-color: #CAF822;
}
.hide-on-small-screen {
  display: none;
}

.hide-on-large-screen {
  display: none;
}

@media (max-width: 767px) {
  .hide-on-small-screen {
    display: none;
  }
}

@media (min-width: 768px) {
  .hide-on-large-screen {
    display: none;
  }
}
</style>