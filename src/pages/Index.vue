<template>
  <q-page class="container" :style="{backgroundImage: 'linear-gradient( 135deg, #4B79A1, #283E51)'}">
    <div class="overflow-auto">
      <div class="row q-col-gutter-md q-px-md q-pt-md">
        <div class="col-md-6 col-sm-12 col-xs-12">
        <card-base>
          <line-chart/>
        </card-base>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <card-base>
            <bar-chart/>
          </card-base>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import CardBase from 'components/CardBase'

export default defineComponent({
  name: 'PageIndex',
  components: {
    CardBase,
    LineChart: defineAsyncComponent( () => import('components/charts/LineChart')),
    BarChart: defineAsyncComponent(() => import('components/charts/BarChart'))
  },

  setup () {


    return {

    }
  }
})
</script>
