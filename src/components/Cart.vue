<template>
  <div class="cart">
    <div class="container">
      <table class="table mt-4">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in cartData.carts" :key='item.id'>
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm ml-auto">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.total }}</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td>總計</td>
            <td>{{ cartData.final_total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cartData'],
  data() {
    return {
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    }
  }
};
</script>

<style scope>
  .container {
    margin: 0 auto;
    max-width: 600px;
  }
</style>