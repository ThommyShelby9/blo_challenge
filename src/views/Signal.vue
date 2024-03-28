<template>
 <div class="container">
    <div class="row justify-content-center align-items-center min-vh-100">
        <form method="post" class="col-md-6 border border-danger p-5 rounded-lg" @submit.prevent="add_problem()">
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
import clientHttp from "@/lib/clientHttp.ts";
import { toast } from "vue3-toastify";

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
