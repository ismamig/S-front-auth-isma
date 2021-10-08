<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        {{ $store.state }}
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data: () => ({
    name: '',
  }),
  methods: {
    add() {
      this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
        name: this.name,
      })
    }
  }
}

</script>
