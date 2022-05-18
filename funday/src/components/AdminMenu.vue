<template>
  <div class="sidebar">
    <div class="sidebar-brand">
      <router-link to="/">
        <img src="/assets/img/logo/white.png" alt="logo" class="sidebar-logo" style="cursor: pointer;">
      </router-link>
    </div>
    <div class="sidebar-menu">
      <ul>
        <AdminSidebarElement title="Главная" :href="`/admin/${this.id}`" />
        <AdminSidebarElement title="Данные" :href="`/admin/data/${this.id}`" />
        <AdminSidebarElement title="Заявки" :href="`/admin/requests/${this.id}`" />
      </ul>
    </div>
  </div>
</template>

<script>
import AdminSidebarElement from "@/components/AdminSidebarElement";

export default {
  name: "AdminMenu",
  components: {
    AdminSidebarElement
  },
  props: [
    'id',
  ],
}
</script>

<style scoped>
  .sidebar-logo {
    width: 160px;
  }

  .sidebar-brand {
    padding: 1rem 0rem 1rem 2rem;
    color: #fff;
  }

  .sidebar-menu {

  }

  .sidebar {
    width: 345px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: #7B020E;
    z-index: 100;
  }
</style>