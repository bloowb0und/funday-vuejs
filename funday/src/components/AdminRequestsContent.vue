<template>
  <div class="main-content">
    <header>
      <div class="header-title">
        <h1>
          Заявки
        </h1>
      </div>
    </header>
    <main>
      <Request class="request" v-for="request in requests" :id="request.id" :title="request.title" :date="request.date" :fullname="request.fullname" :phone="request.phone" :adminId="admin.id" />
      <h3 v-if="requests.length < 1" style="margin-top: 20px;">На данный момент нет необработанных заявок.</h3>
    </main>
  </div>
</template>

<script>
import Request from "@/components/Request";
import SubmitService from "@/SubmitService";

export default {
  name: "AdminRequestsContent",
  components: {
    Request,
  },
  props: [
    'admin',
  ],
  data() {
    return {
      requests: [],
    }
  },
  async created() {
    this.requests = await SubmitService.getRents();
  }
}
</script>

<style scoped>
.main-content {
  margin-left: 345px;
}

.request {
  margin-bottom: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 345px;
  width: calc(100% - 345px);
  top: 0;
  z-index: 100;
  background-color: #fff;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}

main > h1 {
  padding-top: 20px;
  margin-bottom: 55px;
}

main > h4 {
  text-decoration: underline;
}

.pages p:first-child {
  padding-top: 15px;
}

main p {
  margin-bottom: 0;
}
</style>