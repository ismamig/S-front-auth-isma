<template>
  <v-container>
    <h1>Profile dashboard</h1>

    <v-card>
      <v-card-title>Email : {{$cookies.get('session').email}}</v-card-title>
      <v-card-text>
        <v-btn color="warning" @click="logout">Disconnect</v-btn>
        <v-btn color="red" class="ml-5">Delete account</v-btn>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
import {ACTIONS} from "@/store/users";

export default {
  data: () => ({
    session: {
      email: '',
    },
  }),
  methods: {
    logout() {
      this.$store.dispatch(ACTIONS.DISCONNECT, {
        email: '',
      })
    }
  },

}

</script>
