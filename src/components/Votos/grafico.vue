<template>
  <div>
    <line-nocenter />
    <doughnut-center />
  </div>
</template>

<script setup>
import { Line, Doughnut } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const plugin = function (chart) {
  const width = chart.chart.width
  const height = chart.chart.height
  const ctx = chart.chart.ctx

  ctx.restore()
  const fontSize = (height / 114).toFixed(2)
  ctx.font = fontSize + 'em sans-serif'
  ctx.textBaseline = 'middle'

  const text = 800
  const textX = Math.round((width - ctx.measureText(text).width) / 2)
  const textY = height / 2

  ctx.fillText(text, textX, textY)
  ctx.save()
}

const LineNocenter = {
  extends: Line,
  mounted() {
    this.renderChart({
      labels: ['Hello', 'World', 'Chart', 'Test'],
      datasets: [
        {
          backgroundColor: ['#f87979', '#ff0000', '#00ff00', '#0000ff'],
          data: [3, 5, 6, 7]
        }
      ]
    })
  }
}

const DoughnutCenter = {
  extends: Doughnut,
  data() {
    return {
      chartdata: {
        labels: ['Cambodia', 'Thailand', 'Vietnam', 'Laos'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#a3c7c9', '#889d9e', '#647678', '#f87979'],
            data: [91, 3, 3, 3]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.addPlugin({
      id: 'my-plugin',
      beforeDraw: plugin
    })
    this.renderChart(this.chartdata, this.options)
  }
}
</script>