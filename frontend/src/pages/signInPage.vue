<template>    <v-card variant="tonal" class="error-msg ma-1" v-if="errorMessage" rounded="5" color="red">{{ errorMessage }}</v-card>

  <div class="background-styling">
    <v-card variant="text">
      <v-card-title class="mt-6">
      </v-card-title>
    </v-card>
    <div class="text-center">
      <v-card variant="text" class="mx-auto rounded-xl form-card">
        <v-form fast-fail @submit.prevent="submitUser">
          <v-text-field :rules="rules" required class="ma-5" variant="underlined" v-model="login" label="Логин"></v-text-field>
          <v-text-field :rules="rules" required class="ma-5" variant="underlined" v-model="password" label="Пароль" type="password"></v-text-field>
          <v-btn rounded type="submit" variant="text" >Войти</v-btn>
        </v-form>
        <div class="mt-2">
          <p class="text-body-2">Нет аккаунта? <router-link to="/signup"><a href="#">Зарегистрируйтесь</a></router-link></p>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      login: '',
      password: '',
      errorMessage: null,
      rules: [
        value => {
          if (value) return true

          return 'Введите ваши данные'
        },
      ],
    };
  },
  methods: {
    async submitUser() {
      try {
        const response = await axios.post('', {
          email: this.login,
          password: this.password
        });
        if (response.status === 200) {
          console.log(this.$store.getters.GET_USER)
          localStorage.setItem('token', response.data.access_token)
          console.log(response.data.access_token)
          this.$store.dispatch('DISPATCH_SET_USER', {
            userId: response.data.userId,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            patronymic: response.data.patronymic,
            login: response.data.login,
            email: '',
            phoneNumber: response.data.phoneNumber,
            telegram: response.data.telegram,
            role: response.data.role
          })
          console.log(this.$store.getters.GET_USER)
          this.$router.push('/user')
        }
      } catch (error) {
        this.handleError(error)
        this.errorMessage = 'Приехали'
      }
    }
    ,
    handleError(error) {
      if (error.response) {
        if (error.response.status === 403) {
          this.errorMessage = "Не найдено или введены некорректные данные";
        } else if (error.response.status === 500) {
          this.errorMessage = "Ошибка сервера";
        }
      } else {
        this.errorMessage = "Произошла ошибка при отправке запроса";
      }
    }
  }
}
</script>
<style>
.background-styling{
  background-image: url("/city_img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.form-card{
  width: 70%;
}
.registration-btn{
  font-size: 10px;
}
</style>