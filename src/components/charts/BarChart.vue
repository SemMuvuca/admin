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
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
          text: 'line',
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
