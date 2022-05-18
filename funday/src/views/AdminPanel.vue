<template>
  <div class="admin-panel">
    <AdminMenu :id="admin.id" />
    <AdminMainContent :email="admin.email" />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminMainContent from "@/components/AdminMainContent";
import AdminService from "@/AdminService";

export default {
  name: "AdminPanel",
  components: {
    AdminMenu,
    AdminMainContent,
  },
  data() {
    return {
      admin: {},
    }
  },
  metaInfo: {
    title: 'Панель администратора - FunDay',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  },
  async created() {
    this.admin = await AdminService.getAdminsId(this.$route.params.id);
    console.log(this.admin);
  }
}
</script>

<style scoped>

</style>