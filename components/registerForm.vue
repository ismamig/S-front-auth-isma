<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="userEmail"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="userPass"
      :counter="10"
      :rules="passRules"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    userEmail: '',
    userPass: '',
    valid: true,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passRules: [
      v => !!v || 'Password is required',
    ],
  }),
  methods: {
    validate () {
      this.add()
    },
    reset () {
      this.$refs.form.reset()
    },
    add() {
      // console.log(this.name)
      // console.log(this.$store)
      this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
        name: this.username,
        email: this.userEmail,
        password: this.userPass,

      })
    },
  },
}
</script>
