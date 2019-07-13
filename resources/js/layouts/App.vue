<template>
    <div class="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">
                    Home
                  </router-link>
                </li>
              <li class="nav-item" >
                <router-link to="/about" class="nav-link">
                  About
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container mb-3">
             <router-view></router-view>
        </div>
        <footer>
            <h5>&copy; Copyright 2019 My Vue Laravel SPA App</h5>
        </footer>
        
    </div>
</template>

<script>
    export default {
        name:'App',
    };
</script>
