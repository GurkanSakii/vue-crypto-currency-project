<template>
  <div v-if="!!cryptoPortfolioFullData.length">
    <CryptoList
      :cryptoData="cryptoPortfolioFullData"
      :fetchErrorMess="fetchErrorMessage"
      :tableTi="tableTitles"
      :tableDataFi="tableDataFields"
      :tableDataSym="tableDataSymbols"
      :tableDataPre="tableDataPrecisions"
      :showPortfolio="true"
    />
  </div>
  <div v-else>
    <div class="container">
      <div class="row wrapper-row mt-5 p-5 align-items-center">
        <div class="col-6 text-center">
          <h1 class="mb-4">You don't have any cryptocurrency in your portfolio.</h1>
          <router-link :to="{ name: 'TrendingListings' }" class="btn btn-primary">Check trending cryptos to add your portfolio</router-link>
        </div>
        <div class="col-6" text-center>
          <img src="../assets/img/no-portfolio.png" class="img-fluid portfolio-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList.vue";
import { PORTFOLIO, CRYPTO_TABLE_TITLE, CRYPTO_TABLE_DATA_FIELDS, CRYPTO_DATA_PRECISIONS, CRYPTO_DATA_SYMBOLS } from "../../constants";
export default {
  name: "PortfolioRe",
  components: {
    CryptoList,
  },
  data() {
    return {
      fetchErrorMessage: PORTFOLIO.fetchErrorMessage,
      tableTitles: CRYPTO_TABLE_TITLE,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions("crypto",["fetchCryptoCurrencies", "checkLocalStoragePortfolio"]),
  },
  computed: {
    ...mapGetters("crypto",["cryptoValues", "cryptoPortfolioFullData"]),
  },
  created() {
    this.checkLocalStoragePortfolio();

    if (!this.cryptoValues.length) {
      this.fetchCryptoCurrencies();
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper-row{
    background-color: #f6f5fc;
    border-radius: 30px;
    color: #645f88;
}
.portoflio-img{
    width:  380px;
}
</style>
