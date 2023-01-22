<template>
  <div class="container_sort">
    <div class="sort-title">Сортировать по:</div>
    <VButton
      v-for="option in options"
      :key="option.value"
      typeButton="ghost"
      :label="option.label"
      :icon="option.isShowIcon ? 'low-to-high' : ''"
      @clickSort="clickSort"
    />
  </div>
</template>

<script>
import VButton from "@/components/VButton";

export default {
  name: "SortingViews",
  components: {
    VButton,
  },
  data() {
    return {
      options: [
        { value: 1, label: "Популярности", isShowIcon: false },
        { value: 2, label: "Рейтингу", isShowIcon: false },
        { value: 3, label: "Цене", sort: "price", isShowIcon: false },
        { value: 4, label: "Скидке", isShowIcon: false },
        { value: 5, label: "Обновлению", isShowIcon: false },
      ],
      currentLabel: "",
    };
  },
  methods: {
    clickSort(label) {
      if (this.currentLabel !== label) {
        this.options.forEach((elem) => {
          elem.isShowIcon = false;
        });
        const currentLabel = this.options.find((elem) => elem.label === label);
        currentLabel.isShowIcon = !currentLabel.isShowIcon;
        this.currentLabel = currentLabel.label;
        this.$store.commit("setSort", {
          name: currentLabel.label,
          ascDescSorting: true,
        });
      } else {
        this.$store.commit("setSort", {
          name: this.currentLabel,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container_sort {
  display: flex;
  justify-content: space-between;
  width: 55%;
  button {
    gap: 4px;
    background: #fafafa;
    padding: 0;
    width: fit-content;
  }
  .sort-title {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $text-gray;
  }
}
</style>
