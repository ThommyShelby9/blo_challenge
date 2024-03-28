<template>
    <div class="container">
    <div class="container_content">
      <div class="container_content">
        <div class="container_content_top"></div>
        <div
          class="content_top_text text-center d-flex align-items-center justify-content-center"
        >
          <p class="d-flex align-items-center">
            <span class="left">
              <img
                src="/src/assets/images/mdi_arrow-all.png"
                alt=""
                width="70px"
              />
            </span>
            <span class="text-primary">City</span>
          </p>
          <p class="d-flex align-items-center text-info">
            <span class="right_text">Insight</span>
            <span class="right">
              <img
                src="/src/assets/images/[removal.ai]_bec8681b-dbee-47c2-b638-876c91808773-vector.png"
                alt=""
                width="60px"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
 <div class=" formumaire mt-5">
    <div class="row justify-content-center align-items-center min-vh-100">
        <form method="post" class=" form_class col-md-6 border border-danger p-5 rounded-lg" @submit.prevent="add_problem()">
          <h2 class="mt-2">Signalez votre problème</h2>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" id="title" class="form-control" v-model="problem.title" />
            </div>
            <div class="mb-3">
                <label for="images" class="form-label">Images (up to 4)</label>
                <input type="file" id="images" class="form-control" accept="image/*" multiple
                    v-on:change="handleImageUpload($event)" />
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="firstname" class="form-label">First Name</label>
                    <input type="text" id="firstname" class="form-control" v-model="problem.firstname" />
                </div>
                <div class="col">
                    <label for="lastname" class="form-label">Last Name</label>
                    <input type="text" id="lastname" class="form-control" v-model="problem.lastname" />
                </div>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea id="description" rows="3" class="form-control" v-model="problem.description"></textarea>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="latitude" class="form-label">Latitude</label>
                    <input type="text" id="latitude" readonly class="form-control" v-model="latitude" />
                </div>
                <div class="col">
                    <label for="longitude" class="form-label">Longitude</label>
                    <input type="text" id="longitude" readonly class="form-control" v-model="longitude" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import clientHttp from "@/lib/clientHttp";
import { toast } from "vue3-toastify";
import router from "@/router";

const latitude = ref();
const longitude = ref();
const problem = ref({
  title: "",
  description: "",
  images: "",
  firstname: "",
  lastname: "",
  longitude: longitude,
  latitude: latitude,
});

function getLocalisation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      console.log(
        "Latitude: " +
          position.coords.latitude +
          ", Longitude: " +
          position.coords.longitude
      );
    });
  } else {
    console.log(
      "La géolocalisation n'est pas prise en charge par ce navigateur."
    );
  }
}

getLocalisation();

async function sendProblem() {
  try {
    const response = clientHttp.post('/api/problems', problem.value)
    console.log(response)
    toast.success('Votre probleme à été envoyé!', {
        position: toast.POSITION.BOTTOM_LEFT
    })
    setTimeout(() => {
      router.push('/')
    }, 3000);
  } catch {
    console.error
    toast.error('Oups, quelques choses a mal tourné', {
        position: toast.POSITION.BOTTOM_LEFT
    })
  }
}

function handleImageUpload(this: any, event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files || files.length === 0) return;

    // Limiter le nombre d'images sélectionnées à 4
    const selectedImages = Array.from(files).slice(0, 4);

    // Réinitialiser la liste des images
    this.problem.images = [];

    // Boucler à travers les images sélectionnées
    selectedImages.forEach((file: File) => {
        // Créer un objet URL pour chaque image et l'ajouter à la liste des images
        const imageURL: string = URL.createObjectURL(file);
        this.problem.images.push(imageURL);
    });
}

function add_problem(){
    sendProblem()
}

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Jura;
  font-size: 20px;
}

.text-primary{
  font-size: 80px;
}

.right_text{
  font-size: 80px;
}


.container_content_top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/unnamed.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(30%);
  z-index: -1;
  transition: transform 0.5s ease;
  transform: scale(1);
  height: 80vh;
}

.left,
.right {
  display: inline-block;
}

.content_top_text {
  margin-top: 200px;
  margin-left: 160px
}

.text-info span {
  color: #a74b08;
}

.navbar_left ul {
  font-size: 36px;
  margin-top: 30px;
}

.content_middle_top {
  width: 600px;
  height: 10vh;
  background-color: #a74a0877;
}

.content_middle_top p {
  font-size: 36px;
}

.content_middle_top span {
  font-size: 36px;
  font-weight: bold;
  color: #a74b08;
}
.content_middle_middle {
  width: 400px;
  margin-left: 110px;
}

.content_middle_middle p {
  font-size: 20px;
}

.form_class{
  margin-top: 300px;
} 

</style>
