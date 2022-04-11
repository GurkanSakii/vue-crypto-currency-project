<template>
  <CryptoList
    :cryptoData="exchangeValues"
    :fetchErrorMess="fetchErrorMessage"
    :tableTi="tableTitles"
    :tableDataFi="tableDataFields"
    :tableDataSym="tableDataSymbols"
    :tableDataPre="tableDataPrecisions"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CryptoList from "../components/CryptoList.vue";
import { EXCHANGES, EXCHANGE_TABLE_TITLE, EXCHANGE_TABLE_DATA_FIELDS, EXCHANGE_DATA_SYMBOLS, EXCHANGE_DATA_PRECISIONS } from "../../constants";

export default {
  name: "ExchangesRe",
  components: {
    CryptoList,
  },
  data() {
    return {
      fetchErrorMessage: EXCHANGES.fetchErrorMessage,
      tableTitles: EXCHANGE_TABLE_TITLE,
      tableDataFields: EXCHANGE_TABLE_DATA_FIELDS,
      tableDataSymbols: EXCHANGE_DATA_SYMBOLS,
      tableDataPrecisions: EXCHANGE_DATA_PRECISIONS,
    };
  },
  methods: {
    ...mapActions("crypto",["fetchExchanges"]),
  },
  computed: {
    ...mapGetters("crypto",["exchangeValues"]),
  },
  beforeMount() {
    if (!this.exchangeValues.length) {
      this.fetchExchanges();
    }
  },
};
</script>

<style></style>
