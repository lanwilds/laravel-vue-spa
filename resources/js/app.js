//Import Vue and Vue Router Packages
import Vue from 'vue';
import VueRouter from 'vue-router';

//Import Main Layout Component
import App from './layouts/App.vue';

//Import Pages
import Home from './pages/Home';
import About from './pages/About';

//Register VueRouter inside VueJs
Vue.use(VueRouter);

//Create New Router instance
const router = new VueRouter({
	routes:[
		{
			path:'/',
			component: Home
			
		},
		{
			path:'/about',
			component: About
			
		},
	],
	mode:'history'
});

//Create Vue Instance
const app = new Vue({
    el: '#app',
    router,
    components:{
    	App
    }
});