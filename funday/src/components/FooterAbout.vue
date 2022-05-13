<template>
    <div class="footer-intro-wrapper">
        <div class="footer-logo">
            <router-link to="/">
                <img :src="logo" class="img-fluid" alt="logo" width="75px">
            </router-link>
        </div>
        <div class="footer-desc">
            {{ desc }}
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'logo', 'desc' ]
    };
</script>