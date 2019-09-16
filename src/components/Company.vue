<template>
  <div>
    <router-link to="/">Home</router-link>
    <div class="md-alignment-center">
      <div class="md-layout-item md-xlarge-size-66 md-large-size-66 md-medium-size-80 md-small-size-90 md-xsmall-size-100">
        <md-card>
          <md-card-area>
            <md-card-media>
              <img src="../assets/logo.png" alt="People">
            </md-card-media>

            <md-card-header>
              <div class="md-title">Kompanija {{ $route.params.id }}</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
          </md-card-area>

          <md-card-actions md-alignment="left">
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>
