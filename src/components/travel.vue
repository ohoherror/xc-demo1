<template>
  <div class="travel">
    <router-link :to="{path:'/travel/'+travel.ObjectId}"></router-link>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    travel: Object
  },
  data() {
    return {}
  },
  filters: {
    formatTime(value) {
      return moment(value).format(YYYY - MM - DD)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
