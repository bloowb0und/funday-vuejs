<template>
  <li>
    <a :href="this.href">
      <span>{{ this.title }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: "AdminSidebarElement",
  props: [
      'title',
      'href',
  ],
}
</script>

<style scoped>
  li {
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 2rem;
  }

  a {
    display: block;
    color: #fff;
    font-size: 1.2rem;
  }
</style>