<template>
  <div>
    <div class='text-right'>
      <button class='btn btn-primary mt-4'>建立新產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>分類</th>
          <th>商品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item) in products' :key='item.id'>
          <td width='120'>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class='text-right' width='120'>{{ item.origin_price }}</td>
          <td class='text-right' width='120'>{{ item.price }}</td>
          <td width='80'>
            <button class='btn btn-outline-primary btn-sm'>編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      products: [],
    };
  },
  created(){
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`
    const vm = this
    this.$http.get(api).then((response)=> {
      console.log(api);
      console.log(response.data.products);
      vm.products = response.data.products
    })
  },
}
</script>