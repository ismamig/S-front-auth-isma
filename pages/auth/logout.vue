<template>

</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  date: () => ({
    session: {
      email: '',
    },
  }),
  methods: {
    logout() {
      this.store.dispatch(ACTIONS.DISCONNECT, {
        email: '',
      })
    }
  }
}
</script>
