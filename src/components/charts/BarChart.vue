<template>
  <div>
    <apex-chart v-if="thereIsData" height="200" type="bar" :options="options" :series="series"/>
    <generic-skeleton v-else/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import GenericSkeleton from 'components/skeletons/GenericSkeleton'

export default defineComponent({
  name: 'BarCHart',
    components: {
    GenericSkeleton
  },

  setup () {

    setTimeout(() => {
      thereIsData.value = true
    }, 3800)

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
          text: 'Média de produtos vendidos por mês',
          align: 'left',
          style: {
            color: '#FFF'
          }
        }
      }

    const series = [{
        name: 'series-1',
        data: [1300, 2471, 3087, 4791, 2927, 2371, 5396, 8371 ]
      }]


    return {
      options,
      series,
      thereIsData
    }
  }
})
</script>
