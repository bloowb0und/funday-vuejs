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
              <input name="con_title" type="text" placeholder="Название" required v-model="addPlaceDetails.title">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="number" placeholder="Этажей" required v-model="addPlaceDetails.floors">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_img" type="text" placeholder="Путь к картинке" required v-model="addPlaceDetails.image">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_location" type="text" placeholder="Локация" required v-model="addPlaceDetails.location">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_year" type="number" placeholder="Год открытия" required v-model="addPlaceDetails.year">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_places" type="number" placeholder="Вместимость (Мест)" required v-model="addPlaceDetails.places">
            </div>
            <div class="col-12 section-space--bottom--20">
              <input name="con_desc" type="text" placeholder="Описание" required v-model="addPlaceDetails.desc">
            </div>
            <div class="col-12">
              <button @click="add" type="button">Добавить</button>
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
              <select style="padding: 0 25px" v-model="selectedChangePlace">
                <option disabled value="" selected="selected">Выберите место</option>
                <option v-for="place in places" :value="place">{{ place.title }}</option>
              </select>
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="text" placeholder="Название" v-model="selectedChangePlace.title">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="number" placeholder="Этажей" v-model="selectedChangePlace.floors">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="text" placeholder="Путь к картинке" v-model="selectedChangePlace.image">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="text" placeholder="Локация" v-model="selectedChangePlace.location">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="text" placeholder="Год открытия" v-model="selectedChangePlace.year">
            </div>
            <div class="col-md-6 col-12 section-space--bottom--20">
              <input name="con_floors" type="number" placeholder="Вместимость (мест)" v-model="selectedChangePlace.places">
            </div>
          </div>
          <div class="row row-10">
            <div class="col-12 section-space--bottom--20">
              <input name="con_desc" type="text" placeholder="Описание" v-model="selectedChangePlace.desc">
            </div>
          </div>
          <div class="col-12">
            <button @click="change" type="button" :disabled="!selectedChangePlace">Изменить</button>
          </div>
        </form>
      </div>
      <hr>
      <h1>Удаление места</h1>
      <div class="form-wrapper pb-4">
        <form id="contact-form">
          <div class="row row-10">
            <div class="col-12 section-space--bottom--20">
              <select style="padding: 0 25px" v-model="selectedDelPlace">
                <option disabled value="" selected="selected">Выберите место</option>
                <option v-for="place in places" :value="place">{{ place.title }}</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <button @click="del" :disabled="!selectedDelPlace" type="button">Удалить</button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import ProjectService from "@/ProjectService";

export default {
  name: "AdminDataContent",
  data() {
    return {
      places: [],
      addPlaceDetails: {
        title: '',
        image: '',
        year: '',
        desc: '',
        floors: '',
        location: '',
        places: ''
      },
      selectedChangePlace: '',
      selectedDelPlace: '',
    }
  },
  methods: {
    async add() {
      let isEmpty = Object.values(this.addPlaceDetails).some(obj => obj === '');

      if(!isEmpty) {
        await ProjectService.postProject(this.addPlaceDetails.title, this.addPlaceDetails.desc, this.addPlaceDetails.image, this.addPlaceDetails.location, this.addPlaceDetails.year, this.addPlaceDetails.places, this.addPlaceDetails.floors);
        this.$router.go();
      }
      else {
        alert('Все поля должны быть заполнены.');
      }
    },
    async change() {
      let isEmpty = Object.values(this.selectedChangePlace).some(obj => obj === '');

      if(!isEmpty) {
        await ProjectService.putProject(this.selectedChangePlace.title, this.selectedChangePlace.desc, this.selectedChangePlace.image, this.selectedChangePlace.location, this.selectedChangePlace.year, this.selectedChangePlace.places, this.selectedChangePlace.floors, this.selectedChangePlace.id)
        this.$router.go();
      }
    },
    async del() {
      console.log(this.selectedDelPlace);
      await ProjectService.deleteProject(this.selectedDelPlace.id);
      this.$router.go();
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

button:disabled,
button[disabled]{
  cursor: not-allowed;
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