<template>
  <div>
    <div class="text-right">
      <button class="btn btn-primary mt-4" @click='openModal'>建立新產品</button>
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
        <tr v-for="(item) in products" :key="item.id">
          <td width="120">{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right" width="120">{{ item.origin_price }}</td>
          <td class="text-right" width="120">{{ item.price }}</td>
          <td width="80">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts(){
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`;
      const vm = this;
      this.$http.get(api).then(response => {
        console.log(api);
        console.log(response.data.products);
        vm.products = response.data.products;
      });
    },
    openModal(){
      $('#productModal').modal('show');
    },
  },
  created() {
    this.getProducts()
  },
};
</script>