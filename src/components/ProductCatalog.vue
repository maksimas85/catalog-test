<template>
  <div class="container">
    <div class="container_functional">
      <SortingViews />
      <div class="container_functional__view">
        <VButton
          @clickButtonActive="clickBtnActive"
          typeButton="ghost"
          icon="view-bg"
          :active="!active"
        />
        <VButton
          @clickButtonActive="clickBtnActive"
          typeButton="ghost"
          icon="view-sm"
          :active="active"
        />
      </div>
    </div>
    <div
      :class="[gridMode ? 'container_catalog__lg' : 'container_catalog__sm']"
    >
      <div
        class="container_product"
        v-for="(card, index) in sortProductData"
        :key="index"
      >
        <ProductCard :largeCard="gridMode" :card="card" />
      </div>
    </div>
    <VPagination
      @clickPrevious="clickPrevious"
      @clickNext="clickNext"
      @changePage="changePage"
      :total="totalCard"
      :limit="limit"
      :current-page="currentPage"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import VButton from "@/components/VButton";
import SortingViews from "@/components/SortingViews";
import VPagination from "@/components/VPagination";

export default {
  name: "ProductCatalog",
  components: {
    ProductCard,
    VButton,
    SortingViews,
    VPagination,
  },
  props: {
    productData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: null,
      currentPage: 1,
    };
  },
  mounted() {
    this.active = this.$store.getters.isShowLargeGridMode;
    this.$store.commit("setMinMaxPrice", this.minMaxPrice);
  },
  watch: {
    limit() {
      this.currentPage = 1;
    },
  },
  computed: {
    gridMode() {
      return this.$store.getters.isShowLargeGridMode;
    },
    totalCard() {
      return this.productData.length;
    },
    limit() {
      if (!this.$store.getters.getCount) {
        return this.totalCard;
      } else {
        return this.$store.getters.getCount;
      }
    },
    sortProductData() {
      if (this.currentPage === 1) {
        return this.productData.slice(0, +this.limit);
      } else {
        return this.productData.slice(
          (this.currentPage - 1) * +this.limit,
          this.currentPage * +this.limit
        );
      }
    },
    pageCount() {
      return Math.ceil(this.totalCard / this.limit);
    },
  },
  methods: {
    clickPrevious() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    clickNext() {
      if (this.currentPage < this.pageCount) {
        this.currentPage += 1;
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
    clickBtnActive(isActive) {
      if (!this.active) {
        this.active = true;
      } else {
        this.active = isActive;
      }
      this.$store.commit("changeLargeGridMode");
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  &_functional {
    display: flex;
    justify-content: space-between;
    margin: 32px 16px;
    &__view {
      display: flex;
      justify-content: space-between;
      width: 56px;
      button {
        padding: 0;
        width: 24px;
        height: 24px;
        background: #fafafa;
      }
    }
  }
  &_catalog {
    &__lg {
      display: grid;
      gap: 0 32px;
      margin: 0 16px;
      grid-template-columns: repeat(4, 260px);
      //grid-template-rows: repeat(auto-fill, 400px);
    }
    &__sm {
      display: grid;
      gap: 0 32px;
      margin: 0 16px;
      grid-template-columns: repeat(5, 202px);
      //grid-template-rows: repeat(auto-fill, 348px);
    }
  }
}
</style>
