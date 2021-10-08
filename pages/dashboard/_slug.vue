<template>
  <v-container class="mt-10">
    <v-row>
      <v-avatar color="primary" size="50" class="mr-2">

      </v-avatar>
      <h1>{{ slug }}'s profile</h1>

    </v-row>
    <v-row>
      <v-expansion-panels class="mt-10">
        <v-expansion-panel>
          <v-expansion-panel-header>
            Edit profile
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-row>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    slug: '',
  }),
  created() {
    console.log(this.$route.params['slug'])
    this.slug = this.$route.params['slug']
  },
}
</script>
