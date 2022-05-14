<template>
    <div class="page-wrapper section-space--inner--120">
        <!--Contact section start-->
        <div class="conact-section">
            <div class="container">

                <div class="row section-space--bottom--50">
                    <div class="col">
                      <div class="google-map-area section" id="support">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3727761684713!2d37.6153107160353!3d55.75202629951916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sus!4v1651945916933!5m2!1sru!2sus" loading="lazy"  style="width: 100%; height: 400px"></iframe>
                      </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-12">
                        <div class="contact-information">
                            <h3>{{ data.contactInfo.title }}</h3>
                            <ul>
                                <li>
                                    <span class="icon">
                                        <i :class="data.contactInfo.address.icon"></i>
                                    </span>
                                    <span class="text">
                                        {{ data.contactInfo.address.location }}
                                    </span>
                                </li>
                                <li>
                                    <span class="icon">
                                        <i :class="data.contactInfo.telephone.icon"></i>
                                    </span>
                                    <span class="text">
                                        <a href="tel:123456789">{{ data.contactInfo.telephone.no_1 }}</a>
                                        <a href="tel:123456789">{{ data.contactInfo.telephone.no_1 }}</a>
                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 col-12">
                        <div class="contact-form">
                            <h3>Зайдите в аккаунт</h3>
                            <form id="contact-form">
                                <div class="row row-10">
                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                        <input name="con_name" type="text" placeholder="Почта">
                                    </div>
                                    <div class="col-md-6 col-12 section-space--bottom--20">
                                        <input name="con_email" type="email" placeholder="Пароль">
                                    </div>
                                    <div class="col-12">
                                        <button>Войти</button>
                                    </div>
                                </div>
                            </form>
                            <p class="form-message"></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!--Contact section end-->
    </div>
</template>

<script>
    import data from '../../dataFolder/contact.json'
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>