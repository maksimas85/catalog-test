<template>
  <div class="container">
    <CategoryList />
    <VFilter
      @changeItem="changeElemProd"
      titleFilter="Производитель"
      :listData="prodList"
      :resFilter="resFilter"
    />
    <VFilter
      @changeItem="changeElemScale"
      titleFilter="Масштаб"
      :listData="scaleList"
      :resFilter="resFilter"
    />
    <PriceFilter :resFilter="resFilter" />
    <VSelect @selected-item="selectedCount" />
    <VButton
      @click.native="resetFilter"
      typeButton="outline"
      label="Сбросить товары"
    />
    <VButton typeButton="ghost" label="Сохранить подборку" icon="heart" />
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";
import VFilter from "@/components/VFilter";
import PriceFilter from "@/components/PriceFilter";
import VSelect from "@/components/VSelect";
import VButton from "@/components/VButton";

export default {
  name: "NavSidebar",
  components: {
    CategoryList,
    VFilter,
    PriceFilter,
    VSelect,
    VButton,
  },
  props: {
    prodList: {
      type: Array,
      required: true,
    },
    scaleList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      resFilter: false,
    };
  },
  methods: {
    changeElemProd(dataChangeList) {
      this.$store.commit("changeProdList", dataChangeList);
    },
    changeElemScale(dataChangeList) {
      this.$store.commit("changeScaleList", dataChangeList);
    },
    resetFilter() {
      this.$store.commit("changeProdList", []);
      this.$store.commit("changeScaleList", []);
      this.$store.commit("setStockCheckbox", false);
      this.resFilter = !this.resFilter;
    },
    selectedCount(count) {
      this.$store.commit("setCount", count);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin: 0 16px 16px;
  gap: 16px;

  width: 240px;
  height: fit-content;

  background: $bg-secondary;
  border-radius: 16px;
}
</style>
