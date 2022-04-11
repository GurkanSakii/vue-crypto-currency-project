<template>
  <div class="container">
    <div class="row wrapper-row mt-5 p-5 align-items-center">
      <div class="col-6">
        <h2 class="text-center mb-5">Keep up with the crypto world by searching coins!</h2>
        <form @submit.prevent="onSubmit()">
          <div class="form-group position-relative">
            <input
              type="text"
              :class="inputValidity === 'invalid' ? 'border-danger' : 'border-0'"
              @blur="validateInput(searchTerm)"
              class="form-control rounded-pill shadow-lg"
              placeholder="Search by cyptocurrency name"
              name="searchTerm"
              v-model.trim="searchTerm"
            />
            <span class="error-span mt-2 text-danger" v-if="inputValidity === 'invalid'">Please do not leave this field blank or do not enter numbers</span>
          </div>
        </form>
      </div>
      <div class="col-6">
        <img src="../assets/img/landing-right-bg.png" class="img-fluid" />
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img class="card-icon-size" src="../assets/img/trending.png" alt="trending-cryptocurrencies" />
            <p class="card-text mt-2 card-description">Get to know about the most popular and trending cryptocurrencies</p>
            <router-link :to="{ name: 'TrendingListings' }" class="btn btn-dark text-light text-center">Trending Listings</router-link>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img class="card-icon-size" src="../assets/img/exchanges.png" alt="crypto-exchangfes" />
            <p class="card-text mt-2 card-description">Keep up with the crypto exchange markets</p>
            <router-link :to="{ name: 'ExchangesRe' }" class="btn btn-dark text-light text-center">Exchanges</router-link>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card border-0 text-center">
          <div class="card-body">
            <img class="card-icon-size" src="../assets/img/portfolio.png" alt="portfolio" />
            <p class="card-text mt-2 card-description">Check your portfolio and see how they perform</p>
            <router-link :to="{ name: 'PortfolioRe' }" class="btn btn-dark text-light text-center">My Portfolio</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HomeRe",
  data() {
    return {
      searchTerm: "",
      inputValidity: "pending",
    };
  },
  methods: {
    onSubmit() {
      this.setSearchTerm(this.searchTerm);
    },
    ...mapActions("search", ["setSearchTerm"]),

    validateInput(val) {
      var valid = /^[a-z A-ZiİçÇşŞğĞÜüÖö]/;
      if (!valid.test(val)) {
        this.inputValidity = "invalid";
      } else {
        this.inputValidity = "valid";
      }
      return valid.test(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-row {
  background-color: #f6f6fc;
  border-radius: 30px;
  color: #645f88;

  & form div {
    min-height: 100px;
  }
}
.card-description {
  height: 50px;
}
span .error-span {
  display: block;
  margin-left: 15px;
  height: 20px;
}
</style>
