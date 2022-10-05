<template>
  <div>
    <div v-if="cpiData.year1" class="py-1">
      <span class="font-semibold dark:text-dark-highlight">{{ year1 }}</span> <span class="dark:text-dark-description">CPI: {{ cpiData.year1 }}</span>
    </div>
    <div class="dark:text-dark-highlight" v-else>
      No data
    </div>
    <div v-if="cpiData.year2" class="py-1">
      <span class="font-semibold dark:text-dark-highlight">{{ year2 }}</span> <span class="dark:text-dark-description">CPI: {{ cpiData.year2 }}</span>
    </div>
    <div class="dark:text-dark-highlight" v-else>
      No data
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { getCPI } from '@/services/inflationService'
import { calculatorState } from '@/state/calculatorState'

const { year1, year2, inflationType, part } = calculatorState

const cpiData = computed(() => {
  const cpi = getCPI(year1.value, year2.value, inflationType.value, part.value)

  return cpi
})
</script>
