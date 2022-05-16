<template>
  <div class="modal-window-notshown">
    <div class="modal-content">
    <div class="modal-header">
      <h1 style = "margin-top: 8px">Напишите нам!</h1>
      <p @click = "closeModalWindow">X</p>
    </div>
    <div class="modal-main">
      <div class="modal-column1">
        <input name="firstName" type="text" placeholder="Имя" v-model="firstName">
        <input name="secondName" type = "text" placeholder="Фамилия" v-model="secondName">
      </div>
      <div class="modal-column2">
        <input name="phone" type = "tel" placeholder="Телефон" v-model="phone">
      </div>
      <div class="btn-submit">
        <button @click="submit">Забронировать</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
    import submitService from "@/SubmitService";
    export default {
      props : ['project'],
      data() {
        return {
          firstName: "",
          secondName: "",
          phone: "",
          projectId : this.project.id
        }
      },
      methods : {
        closeModalWindow()
        {
          const el = document.querySelector('.modal-window');
          el.classList.add('modal-window-notshown');
          el.classList.remove('modal-window');
        },
        async submit() {
          this.closeModalWindow();
          console.log(this.project);
          await submitService.addRent(this.firstName, this.secondName, this.phone, this.project.id);
        }
      }
    }
</script>
<style scoped lang="scss">
@import './src/assets/scss/5-pages/modal';
</style>