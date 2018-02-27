<template lang="pug">
    .boxpersonal
      img(src="./../../static/img/img/user.png")
</template>

<script>
    export default {
        name: "personal",
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.$parent.shows=true
        })
      },
      beforeRouteLeave (to, from , next) {
        this.$parent.shows=false
        next()
      }
    }
</script>

<style scoped>

</style>
