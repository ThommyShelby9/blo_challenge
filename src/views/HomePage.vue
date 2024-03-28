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
            <span class="right">Insight</span>
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
  <div class="container_content_middle mt-4">
    <div class="content">
      <div class="content_top">
        <nav class="navbar d-flex align-items-center">
          <div class="navbar_left">
            <ul>
              Acceuil
            </ul>
          </div>
          <div class="navbar_right">
            <img
              src="/src/assets/images/[removal.ai]_e806811e-6012-46da-b6ef-28d7fbf917f9-group-2.png"
              alt=""
              width="240px"
            />
          </div>
        </nav>
      </div>
      <div
        class="content_middle d-flex align-items-center justify-content-center"
      >
        <div class="content_middle_top text-center">
          <p><span>CityInsight, </span> qu'est-ce que c'est?</p>
          <div class="content_middle_middle mt-2">
            <p>
              CityInsight est un projet innovant visant à permettre aux
              populations de se manifester pour aider les responsables locaux à
              divers niveau à prendre des décisions vite et efficacement.
            </p>
            <div class="content_middle_middle_img">
              <img
                src="/src/assets/images/[removal.ai]_ad0f3ee3-e53e-470a-a8d5-d9e135ff4cc8-manage_search_fill0_wght400_grad0_opsz24-2.png"
                alt=""
                width="100px"
              />
              <img
                src="/src/assets/images/[removal.ai]_ad0f3ee3-e53e-470a-a8d5-d9e135ff4cc8-manage_search_fill0_wght400_grad0_opsz24-2.png"
                alt=""
                width="100px"
              />
              <img
                src="/src/assets/images/[removal.ai]_ad0f3ee3-e53e-470a-a8d5-d9e135ff4cc8-manage_search_fill0_wght400_grad0_opsz24-2.png"
                alt=""
                width="100px"
              />
            </div>
            <a href="/signal">
              <button class="btn">
                <p class="">SIGNALER UN PROBLEME</p>
                <img
                  src="/src/assets/images/[removal.ai]_0af98692-b0d3-4fc1-b795-d17ba983ffb4-group-5.png"
                  alt=""
                  width="60px"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="footer mt-5">
    <div
      class="container_ d-flex text-center align-items-center justify-content-center"
    >
      <p>&&copy;Copyright, Powered By LES CONFORMISTES, 2024</p>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import BackgroundImage from "@/assets/images/unnamed.jpg";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 80px;
  font-family: Jura;
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
}

.text-info span {
  color: #a74b08;
}

.navbar_left ul {
  font-size: 36px;
  margin-top: -70px;
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

.content_middle_middle_img {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top:10px;
}

.content_middle_middle_button {
  border: 1px solid black;
  height: 20vh;
}

.btn {
  border: 1px solid #a74b08;
}

.btn img {
  margin-top: -70px;
  margin-left: 80px;
}

.container p {
  font-size: 36px;
}

.navbar_left{
  margin-top: 400px;
}

.navbar_right{
  margin-top: 270px;
}
</style>
