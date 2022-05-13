<template>
    <div class="footer-widget">
        <h4 class="footer-widget__title">{{ title }}</h4>
        <ul class="footer-widget__navigation">
            <li v-for="list in nav" :key="list.id">
                <router-link :to="list.navUrl">{{ list.navTitle }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'title', 'nav' ]
    };
</script>

<style lang="scss">

</style>