<template>
  <div class="calTable">
    <table align=center>
      <thead>
        <tr>
          <th><h3>Date</h3></th>
          <th><h3>Description</h3> </th>
          <th><h3>Income</h3></th>
          <th><h3>Expenses</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(info1,index) in info" :key="index">
          <td>
            {{info1.date}}
          </td>
          <td>
            {{info1.description}}
          </td>
          <td v-if="info1.amount>0">
            {{info1.amount}}
          </td>
          <td v-if="info1.amount>0">
            0
          </td>
          <td v-if="info1.amount==''">
            0
          </td>
          <td v-if="info1.amount<0">
            0
          </td>
          <td v-if="info1.amount<0">
            {{info1.amount}}
          </td>
          <td v-if="info1.amount==''">
            0
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Balance : {{getBalance()}} Baht
    </p>
  </div>
</template>

<script>
  import IncomeExpenses from '@/store/IncomeExpenses'

  export default {
    data(){
      return{
        info:[],
        balance:0
      }
    },
    created(){
      this.fetchInfo()
      this.getBalance()
    },
    methods: {
      fetchInfo(){
        this.info=IncomeExpenses.getters.info
        console.log(this.info)
      },
      getBalance(){
        var b=0
        this.info.forEach(function(i){
          if(i.amount!==""){
            b+=parseInt(i.amount)
          }
        })
        return b 
      }
    }
  }
  
</script>

<style scoped lang="scss">
.calTable{
  text-align: center;
  padding: 20px; 
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
  tr:nth-child(even){background-color: #e6e1e1;}
  tr:hover {background-color:#a3dce9;}
  th{background-color: #fbaa82;
  color: white}; 
  p{
    font-size: 1.2em;
    font-weight: bold;
    color: rgb(230, 70, 70);
  }
}
table{
    border-collapse: collapse;
    width: 770px;
}

th,td{
  padding: 0px 50px 0px 50px;
  border: 1px solid rgb(48, 47, 95); 
}
td{
  height: 30px;
}

</style>>