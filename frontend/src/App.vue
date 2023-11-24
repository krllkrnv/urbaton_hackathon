<template>
  <div class="app">
    <v-app>
    	<v-app-bar
          rounded
          elevation="1"
                   color="#CAF822"
                   prominent>
			<div class="d-flex align-center">
				<v-icon size="50" class="mr-3 ma-2">mdi-city</v-icon>
				<div class="header-title">Навигатор чистоты</div>
			</div>
        <v-spacer></v-spacer>
        <div>
          <v-btn class="ma-1" rounded variant="tonal">Оставить заявку</v-btn>
          <v-btn class="ma-5" rounded variant="tonal" prepend-icon="mdi: mdi-login">Войти</v-btn>
        </div>
		</v-app-bar>
		<v-main>
      <main-page/>
		</v-main>
      <v-card class="footer bg-body-tertiary text-center text-lg-start">
        <div class="text-center p-3"><br>
          2023 — <strong>MicroPyrziky</strong>
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


</style>