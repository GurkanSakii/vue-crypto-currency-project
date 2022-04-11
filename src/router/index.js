import { createRouter, createWebHistory } from "vue-router";
import HomeRe from "../views/HomeRe.vue";
import TrendingListings from "../views/TrendingListings.vue";
import PortfolioRe from "../views/PortfolioRe.vue";
import SearchResult from "../views/SearchResult.vue";
import ExchangesRe from "../views/ExchangesRe.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "HomeRe",
    component: HomeRe,
  },
  {
    path: "/trendinglistings",
    name: "TrendingListings",
    component: TrendingListings,
  },
  {
    path: "/exchanges",
    name: "ExchangesRe",
    component: ExchangesRe,
  },
  {
    path: "/portfolio",
    name: "PortfolioRe",
    component: PortfolioRe,
  },
  {
    path: "/searchresult",
    name: "SearchResult",
    component: SearchResult,
    beforeEnter: (to, from, next) => {
        const searchTerm = store.getters["search/searchTerm"];
    
        if (!searchTerm) {
          next('/');
        } else {
          next();
        }
      },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;