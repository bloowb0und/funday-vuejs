<template>
  <div class="request">
    <div class="header">
      <p class="date">{{ this.date }}</p>
      <i class="zmdi zmdi-check-circle" @click="deleteRequest"></i>
    </div>
    <div class="info">
      <div class="vertical-info">
        <h3>Место:</h3>
        <p>{{ this.title }}</p>
      </div>
      <div class="vertical-info">
        <h3>Имя:</h3>
        <p>{{ this.fullname }}</p>
      </div>
      <div class="vertical-info">
        <h3>Телефон:</h3>
        <p>{{ this.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitService from "@/SubmitService";

export default {
  name: "Request",
  props: [
      'id',
      'date',
      'title',
      'fullname',
      'phone'
  ],
  methods: {
    async deleteRequest() {
      await SubmitService.delRent(this.id);
      this.$router.go();
    }
  },
}
</script>

<style scoped>
  .request {
    padding: 10px;
    width: 500px;
    border-radius: 25px;
    border: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  i {
    font-size: 15pt;
    margin-right: 10px;
    cursor: pointer;
    color: green;
  }

  .info {
    display: flex;
    align-self: center;
    text-align: center;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 5px;
  }

  .vertical-info {
    display: flex;
    flex-direction: column;
  }

  .vertical-info > h3 {
    text-decoration: underline;
  }

  .date {
    margin-left: 2%;
    color: gray;
  }
</style>