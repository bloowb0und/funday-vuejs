<template>
  <div class="admin-panel">
    <AdminMenu />
    <AdminRequestsContent />
  </div>
</template>

<script>


import AdminMenu from "@/components/AdminMenu";
import AdminRequestsContent from "@/components/AdminRequestsContent";

export default {
  name: "AdminRequests",
  components: {
    AdminMenu,
    AdminRequestsContent,
  },
  metaInfo: {
    title: 'Панель администратора (Заявки) - FunDay',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  }
}
</script>

<style scoped>

</style>