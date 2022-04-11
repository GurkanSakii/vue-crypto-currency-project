<template>
  <div v-if="showLoading"><LoadingRe /></div>
  <div v-else>
    <div v-if="!!searchResult.length">
      <CryptoList
        :cryptoData="searchResult"
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
            <h2 class="mb-4">No result for "{{ searchTerm }}" found </h2>
            <router-link :to="{ name: 'HomeRe' }" class="btn btn-primary">Please click to make a new search</router-link>
          </div>
          <div class="col-6">
            <img src="../assets/img/no-search-result.svg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CryptoList from "../components/CryptoList.vue";
import LoadingRe from "../components/LoadingRe.vue";

import {SEARCH_RESULT, CRYPTO_TABLE_TITLE, CRYPTO_TABLE_DATA_FIELDS, CRYPTO_DATA_SYMBOLS, CRYPTO_DATA_PRECISIONS } from "../../constants";

export default {
  name: "SearchResult",
  components: {
    CryptoList,
    LoadingRe,
  },
  data() {
    return {
      fetchErrorMessage: SEARCH_RESULT.fetchErrorMessage,
      tableTitles: CRYPTO_TABLE_TITLE,
      tableDataFields: CRYPTO_TABLE_DATA_FIELDS,
      tableDataSymbols: CRYPTO_DATA_SYMBOLS,
      tableDataPrecisions: CRYPTO_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions("search", ["clearSearchTerm"]),
  },
  computed: {
    ...mapGetters("search", ["searchTerm", "searchResult"]),
    ...mapGetters("crypto", ["showLoading"]),
  },
  beforeUnmount() {
    this.clearSearchTerm();
  },
};
</script>

<style lang="scss" scoped>
.wrapper-row {
  background-color: #f6f5fc;
  border-radius: 30px;
  color: #645f88;
}
</style>
