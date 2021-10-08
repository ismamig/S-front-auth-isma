<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-text-field
      v-model="userEmail"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="userPass"
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
      this.login()
    },
    login() {
      console.log(this.email)
      for (let user of this.$store.state.users.users) {
        //console.log(user.name)
        if (user.email === this.userEmail) {
          if (user.password === this.userPass) {
            this.$store.dispatch(ACTIONS.CONNECT, {
              email: this.userEmail
            })
            this.$router.push('../dashboard/')
            //console.log("Connecté!")
          }
        } else {
          //console.log("non")
        }
      }
      //console.log(this.$store.state.users.users)
      //check if user exists
    }
  },
}
</script>
