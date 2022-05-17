<template>
  <div class="admin-panel">
    <AdminMenu />
    <AdminMainContent />
  </div>
</template>

<script>
import AdminMenu from "@/components/AdminMenu";
import AdminMainContent from "@/components/AdminMainContent";

export default {
  name: "AdminPanel",
  components: {
    AdminMenu,
    AdminMainContent,
  },
  metaInfo: {
    title: 'Панель администратора - FunDay',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  }
}
</script>

<style scoped>

</style>