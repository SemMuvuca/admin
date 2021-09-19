
<template>
  <q-page :style="{backgroundImage: 'linear-gradient( 135deg, #4B79A1, #283E51)'}">
    <div class="column justify-center window-height">
      <div class="col-4 self-center text-center" >
         <!-- <img
          alt="Quasar logo"
          src="/analysis.svg"
          style="width: 300px"
        > -->
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_xrrp4bkp.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="col-4">
          <p class="text-h3 text-white text-weight-bold full-width text-center">
           Sem Muvuca Admin
          </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
})
</script>

<style scoped>
.pink-custom {
  color: #D705DC;
}
</style>
