<template>
    <div class="error-not-found">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="error-inner text-center">
                        <div class="image">
                            <img src="assets/img/icons/404.png" alt="404">
                        </div>
                        <h1 class="heading-h3 text-white">Похоже, вы потерялись.</h1>
                        <div class="error-text">
                            <p class="text-white">Похоже, что по этому адресу ничего не существует. Вы можете либо вернуться на предыдущую страницу, либо перейти на главную страницу.</p>
                            <div class="error-button-group">
                                <button class="btn-submit bg-wht" @click="$router.go(-1)">
                                    Вернуться на предыдущую
                                </button>
                                <router-link class="btn-submit" to="/">
                                    Перейти на главную
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>