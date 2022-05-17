<template>
  <div class="admin-panel">
    <AdminMenu />
    <AdminDataContent />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminDataContent from "@/components/AdminDataContent";

export default {
  name: "AdminData",
  components: {
    AdminMenu,
    AdminDataContent,
  },
  metaInfo: {
    title: 'Панель администратора (Данные) - FunDay',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  }
}
</script>

<style scoped>

</style>