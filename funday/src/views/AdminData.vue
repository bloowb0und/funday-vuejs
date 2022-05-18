<template>
  <div class="admin-panel">
    <AdminMenu :id="admin.id" />
    <AdminDataContent :admin="admin" />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminDataContent from "@/components/AdminDataContent";
import AdminService from "@/AdminService";

export default {
  name: "AdminData",
  components: {
    AdminMenu,
    AdminDataContent,
  },
  data() {
    return {
      admin: {},
    }
  },
  metaInfo: {
    title: 'Панель администратора (Данные) - FunDay',
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