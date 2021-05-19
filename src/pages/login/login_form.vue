<template>
  <form
    @submit="checkForm"
  >
    <div class='error-message' v-for="(error, index) in errors" :key="index">{{ error }}</div>
    <div class='item-wrapper'>
      <label htmlFor='email'>Email</label><br/>
      <input
        type='text'
        id='email'
        name='email'
        placeholder='Nhập email'
        v-model="email"
      />
    </div>
    <div class='item-wrapper'>
      <label htmlFor='password'>Password</label><br/>
      <input
        type='password'
        id='password'
        name='password'
        placeholder='Nhập password'
        v-model="password"
      />
    </div>
    <div class='item-wrapper button'>
      <button type='submit' :disabled="!email || !password || loading">Đăng nhập</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => ({
    errors: [],
    email: null,
    password: null,
  }),
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.$data.errors = [];

      if (!this.$data.email) {
        this.$data.errors.push('Email là bắt buộc.');
      }
      if (!this.$data.password) {
        this.$data.errors.push('Password là bắt buộc.');
      }

      if (!this.$data.email || !this.$data.password) {
        return;
      }

      this.$store.dispatch('loginContruction', {
        data: { email: this.$data.email, password: this.$data.password },
      })
        .then(() => {
          this.$router.push('/home/animals');
        });
    },
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
  },
})
export default class LoginForm extends Vue {}
</script>
