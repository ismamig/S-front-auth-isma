<template>
  <div>
    <p>{{ $store.state }}</p>
    <div v-if="$store.state.users.users.length == 0">Pas d'utilisateurs</div>

    <ul v-else>
      <li v-for="(user, i) in $store.state.users.users" :key="i">
        {{ user.name }} | {{ user.email }} | {{ user.password }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    //number: 0,
  }),
  methods: {
    add() {
      //this.number++
      //this.$store.dispatch('add')
    }
  }
}
</script>
