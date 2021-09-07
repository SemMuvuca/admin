// file: /src/boot/register-my-component.js
import VueApexCharts from 'vue3-apexcharts'

// we globally register our component with Vue
export default ({ app }) => {
  app.component('apex-chart', VueApexCharts)
}
