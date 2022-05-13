<template>
    <div class="footer-widget mb-0">
        <h4 class="footer-widget__title">{{ contactWidgetData.widgetTitle }}</h4>
        <div class="footer-widget__content">
            <p class="address">{{ contactWidgetData.widgetDesc }}</p>
            <ul class="contact-details">
                <li v-for="list in contactWidgetData.contactInfo" :key="list.id" v-html="list.title">
                    {{ list.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['contactWidgetData']
    };
</script>