<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'HomeRe' }">Crpyto Index</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link exact-active-class="active"  class="nav-link" aria-current="page" :to="{ name: 'TrendingListings' }">Trending Listings</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" exact-active-class="active" :to="{ name: 'ExchangesRe' }">Exchanges</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" exact-active-class="active" :to="{ name: 'PortfolioRe' }">Portfolio</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderRe",
};
</script>

<style scoped></style>
