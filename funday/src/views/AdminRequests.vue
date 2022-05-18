<template>
  <div class="admin-panel">
    <AdminMenu :id="admin.id" />
    <AdminRequestsContent :id="admin.id" />
  </div>
</template>

<script>


import AdminMenu from "@/components/AdminMenu";
import AdminRequestsContent from "@/components/AdminRequestsContent";
import AdminService from "@/AdminService";

export default {
  name: "AdminRequests",
  components: {
    AdminMenu,
    AdminRequestsContent,
  },
  data() {
    return {
      admin: {},
    }
  },
  metaInfo: {
    title: 'Панель администратора (Заявки) - FunDay',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  },
  async created() {
    this.admin = await AdminService.getAdminsId(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>