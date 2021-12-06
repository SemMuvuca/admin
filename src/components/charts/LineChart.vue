<template>
  <div>
    <apex-chart v-if="thereIsData" height="200" type="line" :options="options" :series="series"/>
    <generic-skeleton v-else/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import GenericSkeleton from 'components/skeletons/GenericSkeleton'

export default defineComponent({
  name: 'LineCHart',
  components: {
    GenericSkeleton
  },

  setup () {

    setTimeout(() => {
      thereIsData.value = true
    }, 3000)

    const thereIsData = ref(false)

    const options = {
        chart: {
          id: 'line-chart'
        },
        xaxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          title: {
            style: {
              color: '#FFF'
            }
          },
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        title: {
          text: 'Lucro médio (mil) por mês',
          align: 'left',
          style: {
            color: '#FFF'
          }
        }
      }

    const series = [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91 ]
      }]


    return {
      options,
      series,
      thereIsData
    }
  }
})
</script>
