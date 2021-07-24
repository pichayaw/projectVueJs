<template>
  <div>
      <h1>Income - Expenses</h1>
      <calculate></calculate>
      <calculate-table></calculate-table>

  </div>
</template>

<script>
import CalculateTable from '@/components/CalculateTable.vue'
import calculate from '@/components/Calculate.vue'
export default {
  components: {
    calculate, 
    CalculateTable
    },
}
</script>

<style scoped lang="scss">
h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 3px 3px rgb(187, 55, 77);
    font-size: 3em;

}
</style>>