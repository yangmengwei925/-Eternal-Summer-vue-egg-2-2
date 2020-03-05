<template>
  <div class="main">
    <!-- <Choose /> -->
    <Welcome />
    <Ourserves />
    <Last />
    <Special />
  </div>
</template>
<script>
import Choose from '@/components/home/choose'
import Welcome from '@/components/home/welcome'
import Ourserves from '@/components/home/ourServes'
import Last  from '@/components/home/last.vue'
import Special  from '@/components/home/special.vue'
export default {
   components: {
        Choose,
        Welcome,
        Ourserves,
        Last,
        Special
   }
}
</script>
<style scoped>
.main{
  width: 100vw;
}
</style>