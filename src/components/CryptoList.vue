<template>
  <div class="container">
    <div v-if="showLoading"><LoadingRe /></div>
    <div v-else>
      <div v-if="!showLoading && !!cryptoData.length">
        <div>
          <table class="table table-hover mt-3 data-table shadow text-center mb-5">
            <thead class="table-primary">
              <tr>
                <th v-for="(title, i) in tableTi" :key="i">{{ title }}</th>
              </tr>
            </thead>
            <tbody class="border-0 text-black-50 tbody-border" v-for="crypto in cryptoData" :key="crypto.id">
              <tr>
                <td v-for="(key, i) in tableDataFi" :key="i">
                  <small>{{ checkValue(crypto[key], tableDataSym[key], tableDataPre[key]) }}</small>
                </td>
                <td v-if="!checkPortfolio(crypto.id)" v-show="showPortfolio">
                  <span @click="addToPortfolio(crypto.id)">Ekle</span>
                </td>
                <td v-else v-show="showPortfolio">
                  <span @click="removeFromPortfolio(crypto.id)">Çıkar</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>{{ fetchErrorMess }}</div>
    </div>
  </div>
</template>

<script>
import LoadingRe from "./LoadingRe.vue";
import valueConverter from "../utils/valueConverter";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CryptoList",
  props: ["cryptoData", "fetchErrorMess", "tableTi", "tableDataFi", "tableDataSym", "tableDataPre", "showPortfolio"],
  components: {
    LoadingRe,
  },
  computed: {
    ...mapGetters("crypto",["showLoading", "cryptoPortfolio"]),
  },
  methods: {
    checkValue: function (val, symbol, precision) {
      return valueConverter(val, symbol, precision);
    },
    checkPortfolio(cryptoId) {
      if (!!this.cryptoPortfolio.length && !!this.cryptoData.length) {
        return this.cryptoPortfolio.includes(cryptoId);
      } else {
        return false;
      }
    },
    ...mapActions("crypto",["addToPortfolio", "removeFromPortfolio", "checkLocalStoragePortfolio"]),
  },
  created() {
    this.checkLocalStoragePortfolio();
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  border-radius: 8px;
  overflow: hidden;
}
.tbody-border {
  border-color: #f0f0f0 !important;
}
</style>
