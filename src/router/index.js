import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SportView from "../views/SportView.vue";
import DownloadView from "../views/DownloadView.vue";
import ContactView from "../views/ContactView.vue";
import PageView from "../views/PageView.vue";
import BeautyView from "../views/BeautyView.vue";
import HealthWellness from "../views/HealthWellness.vue";
import FashionStyle from "../views/FashionStyle.vue";
import MindsetConfidence from "../views/MindsetConfidence.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/sport",
    name: "sport",
    component: SportView,
  },
  {
    path:"/download",
    name: "download",
    component : DownloadView
  },
  {
    path:"/contact",
    name: "contact",
    component : ContactView
  },
    {
    path:"/page",
    name: "page",
    component : PageView
  },
  {
    path:"/beauty",
    name: "beauty",
    component : BeautyView
  },
  {
  path:"/health",
  name: "health",
  component : HealthWellness
},
  {
    path:"/fashon",
    name: "fashon",
    component : FashionStyle
  },
  {
    path:"/mindest",
    name: "mindest",
    component : MindsetConfidence
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
