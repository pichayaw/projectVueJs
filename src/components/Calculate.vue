<template>
  <div class="calculate">

    <div>
      <label for="date">Date : </label>
      <input type="date" id="date" name="date" v-model="form.date" value-type="DD/MM/YY">
    </div><br>
    <div>
        <label for="amount">Amount : </label>
        <input type="number" v-model="form.amount"> Baht
        <label for="money">Income(+) , Expenses(-)</label>
        <p>
          หมายเหตุ : รายรับให้กรอกจำนวนเต็มบวก และรายจ่ายให้กรอกเครื่องหมายลบ(-)ด้านหน้าจำนวนเต็ม
        </p>
        
    </div>
    <div>
        <label for="description">Description : </label>
        <input type="text" v-model="form.description">
    </div><br>
  
    <div class="submit">
      <button @click="addIncomeExpenses">Submit</button>
    </div>
    
  </div>
</template>

<script>
import InExStore from "@/store/IncomeExpenses"
export default {
  data() {
    return {
      form: {
        date: "",
        amount: "",
        description: "",
      },
    }
  },
  methods: {
    clearForm() {
      this.form = {
        date: "",
        amount: "",
        description: "",
      }
    },
    addIncomeExpenses() {
      let payload = {
        date: this.form.date,
        amount: this.form.amount,
        description: this.form.description
      }
      
      console.log(payload)
      InExStore.dispatch("addIncomeExpenses", payload)
      this.clearForm()
    },
  },
}
</script>

<style scoped lang="scss">
.calculate {
  display: inline-block;
  width: 700px;
  height: 200px;
  padding: 5px;
  border: 2px solid rgb(48, 47, 95); 
  background-color: rgb(247, 247, 179); 
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
p{
  color: rgb(244, 40, 104);
}
.submit{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  font-weight: bold;
}
}
</style>>