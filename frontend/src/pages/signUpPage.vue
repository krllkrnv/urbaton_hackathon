<template>
  <div class="background-styling">
    <v-card variant="text">
      <v-card-title class="mt-6">
      </v-card-title>
    </v-card>
    <div class="text-center">
      <v-card variant="text" class="mx-auto rounded-xl form-card">
        <v-form fast-fail @submit.prevent="login">
          <v-text-field :rules="rules" required class="ma-1" variant="underlined" v-model="firstName" label="Имя" placeholder="Иван"></v-text-field>
          <v-text-field :rules="rules" required class="ma-1" variant="underlined" v-model="surname" label="Фамилия" placeholder="Иванов"></v-text-field>
          <v-text-field :rules="rules" required class="ma-1" variant="underlined" v-model="email" label="Почта" type="email" placeholder="johndoe@gmail.com"></v-text-field>
          <v-text-field :rules="rules" required class="ma-1" variant="underlined" v-model="phoneNumber" label="Номер" type="text" placeholder="+7 (902) 123-45-67"></v-text-field>
          <v-text-field :rules="rules" required class="ma-1" variant="underlined" v-model="city" label="Город" type="text" placeholder="Москва"></v-text-field>
          <v-text-field :rules="rules" required class="ma-1" variant="underlined" v-model="password" label="Пароль" type="password"></v-text-field>
          <v-text-field :rules="rules" required class="ma-1" variant="underlined" v-model="confirmPassword" label="Подтвердите пароль" type="password"></v-text-field>
          <v-btn rounded type="submit" variant="text" >Зарегистрироваться</v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      city: '',
      rules: [
        value => {
          if (value) return true

          return 'Введите ваши данные'
        },
      ],
    };
  },
  methods: {
    login() {
      // Your login logic here
    },
  },
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
</style>