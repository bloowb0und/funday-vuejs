<template>
    <div class="breadcrumb-area bg-img" :style="{'background-image':'url(/assets/img/backgrounds/funfact-bg.jpg)'}">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="page-banner text-center">
                        <h1>{{title}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'title']
    }
</script>