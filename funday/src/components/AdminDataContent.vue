<template>
  <div class="main-content">
    <header>
      <div class="header-title">
        <h1>
          Данные
        </h1>
      </div>
    </header>
    <main>
      <h1>Добавление места</h1>
      <div class="form-wrapper">
        <form id="contact-form">
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_title" type="text" placeholder="Название">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="number" placeholder="Этажей">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_img" type="text" placeholder="Путь к картинке">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_location" type="text" placeholder="Локация">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_year" type="number" placeholder="Год открытия">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_places" type="number" placeholder="Вместимость (Мест)">
            </div>
            <div class="col-12 section-space--bottom--20">
              <input name="con_desc" type="text" placeholder="Описание">
            </div>
            <div class="col-12">
              <button>Добавить</button>
            </div>
          </div>
        </form>
      </div>
      <hr>
      <h1>Изменение места</h1>
      <div class="form-wrapper">
        <form id="contact-form">
          <div class="row row-10">
            <div class="col-12 section-space--bottom--20">
              <select style="padding: 0 25px" v-model="selectedPlace">
                <option disabled value="">Выберите место</option>
                <option v-for="place in places" :value="place">{{ place.title }}</option>
              </select>
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="number" placeholder="Название" :value="selectedPlace.title">
            </div>
          </div>
          <div class="col-12">
            <button @click="change" type="button">Изменить</button>
          </div>
        </form>
      </div>
      <hr>
      <h1>Удаление места</h1>
    </main>
  </div>
</template>

<script>
import ProjectService from "@/ProjectService";

export default {
  name: "AdminDataContent",
  data() {
    return {
      places: [
        {title: 'ad', as: 'rerer4'},
        {title: 'dad', as: '777'},
      ],
      selectedPlace: {},
    }
  },
  methods: {
    change(value)
    {
      console.log(value);
      console.log(this.selectedPlace);
    }
  },
  async mounted() {
    this.places = (await ProjectService.getProjects());
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/scss/0-base/variables";
@import "./src/assets/scss/5-pages/contact";

.form-wrapper {
  margin: 0 50px;
}

#contact-form {
  align-items:center;
  & h3 {
    margin-bottom: 30px;
  }
  & input {
    width: 100%;
    height: 50px;
    border: 1px solid #eeeeee;
    padding: 5px 20px;
  }
  & textarea {
    width: 100%;
    height: 120px;
    border: 1px solid #eeeeee;
    padding: 10px 20px;
    resize: none;
  }
  & input[type="submit"], & button, & .submit {
    width: auto;
    height: 50px;
    border: none;
    padding: 5px 30px;
    background-color: $theme-color--default;
    color: $white;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 15px;
    &:hover {
      background-color: $heading-text-color;
    }
  }
}
.form-message{
  line-height: 2;
}

//---------------------

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