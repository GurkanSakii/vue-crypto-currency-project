<template>
  <CryptoList
    :cryptoData="cryptoValues"
    :fetchErrorMess="fetchErrorMessage"
    :tableTi="tableTitles"
    :tableDataFi="tableDataFields"
    :tableDataSym="tableDataSymbols"
    :tableDataPre="tableDataPrecisions"
    :showPortfolio="true"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList.vue";
import { TRENDING_LISTING, CRYPTO_TABLE_TITLE, CRYPTO_TABLE_DATA_FIELDS, CRYPTO_DATA_PRECISIONS, CRYPTO_DATA_SYMBOLS } from "../../constants";

export default {
  name: "TrendingListings",
  components: {
    CryptoList,
  },
  data() {
    return {
      fetchErrorMessage: TRENDING_LISTING.fetchErrorMessage,
      tableTitles: CRYPTO_TABLE_TITLE,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions("crypto",["fetchCryptoCurrencies"]),
  },
  computed: {
    ...mapGetters("crypto",["cryptoValues", "showLoading"]),
  },
  beforeMount() {
    if (!this.cryptoValues.length) {
      this.fetchCryptoCurrencies();
    }
  },
};
</script>

<style></style>
