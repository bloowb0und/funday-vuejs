<template>
  <div class="main-content">
    <header>
        <div class="header-title">
          <h1>
            Главная
          </h1>
        </div>
    </header>
    <main>
      <h1>Добро пожаловать в админ-панель</h1>
      <h2>{{ email }}</h2>
      <h4>В меню слева выберите интересующий раздел:</h4>
      <div class="pages">
        <p>Данные - изменение данных в каталоге</p>
        <p>Заявки - текущие заявки от клиентов</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminContent",
  props: [
    'email',
  ],
}
</script>

<style scoped>
  .main-content {
    margin-left: 345px;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 345px;
    width: calc(100% - 345px);
    top: 0;
    z-index: 100;
    background-color: #fff;
  }

  main {
    margin-top: 100px;
    text-align: center;
  }

  main > h1 {
    padding-top: 20px;
    margin-bottom: 55px;
  }

  main > h4 {
    text-decoration: underline;
  }

  .pages p:first-child {
    padding-top: 15px;
  }

  main p {
    margin-bottom: 0;
  }
</style>