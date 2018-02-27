<template lang="pug">
  .index
    .box
      train_header
    router-view
</template>

<script>
  import train_header from './train_header'
    export default {
      name: "train",
      components:{
        train_header
      },
        mounted(){
          this.$router.push({ name: 'trains' })
        },
      beforeRouteEnter (to, from, next) {
        next(vm => {
          vm.$parent.shows=true
        })
      },
      beforeRouteLeave (to, from , next) {
        this.$parent.shows=false
        next(
        )
      }
    }
</script>

<style scoped>

</style>
