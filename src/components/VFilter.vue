<template>
  <div class="container_productions">
    <div class="container_productions-title">
      <h1>{{ titleFilter }}</h1>
      <img
        :class="{ 'container_productions-title__arrow-icon_active': isActive }"
        class="container_productions-title__arrow-icon"
        src="@/assets/icons/arrow.svg"
        alt="arrow"
        @click="showList"
      />
    </div>
    <div class="productions-list" v-if="isActive">
      <div class="productions-list_search">
        <input
          type="text"
          class="productions-list_search-field"
          placeholder="Поиск..."
          v-model="searchData"
        />
        <img
          src="@/assets/icons/search.svg"
          alt=""
          class="productions-list_search-icon"
        />
      </div>

      <ul class="productions-list_items">
        <li
          class="productions-list_item"
          v-for="(item, index) in searchListData"
          :key="index"
        >
          <input
            class="productions-list_item-checkbox"
            type="checkbox"
            :id="item"
            :value="item"
            v-model="checkedData"
            @change="changeItem"
          />
          <label :for="item">{{ item }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductionFilter",
  props: {
    titleFilter: {
      type: String,
      required: true,
    },
    listData: {
      type: Array,
      required: true,
    },
    resFilter: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      checkedData: [],
      searchData: "",
      isActive: false,
    };
  },
  watch: {
    resFilter(newValue) {
      if (newValue) {
        this.isActive = false;
        this.checkedData.length = 0;
      } else {
        this.isActive = newValue;
        this.checkedData.length = 0;
      }
    },
  },
  computed: {
    searchListData() {
      return this.listData.filter((elem) => elem.includes(this.searchData));
    },
  },
  methods: {
    inputFilter() {
      console.log("12345");
    },
    showList() {
      this.isActive = !this.isActive;
    },
    changeItem() {
      this.$emit("changeItem", this.checkedData);
    },
  },
};
</script>

<style scoped lang="scss">
.container_productions {
  width: 100%;
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $text-primary;
  }
  &-title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &__arrow-icon {
      cursor: pointer;
      transition: all 0.2s;
      transform: rotate(180deg);
      &_active {
        transform: rotate(0);
      }
    }
  }
}
.productions-list {
  &_items {
    overflow: auto;
    height: 208px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: $text-primary;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: $bg-secondary;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: $gray-palette;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px $bg-secondary;
      border-radius: 10px;
      background-color: $bg-secondary;
    }
  }
  &_item {
    display: flex;
    align-items: center;
    padding: 4px;
    width: 100%;
    height: 24px;
    cursor: pointer;
    &-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    &-checkbox + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
    &-checkbox + label::before {
      cursor: pointer;
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 2px solid $gray-palette;
      border-radius: 4px;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-position: center center;
    }
    &-checkbox:checked + label::before {
      border-color: $default;
      background-color: $default;
      background-image: url("../assets/icons/checkbox.svg");
    }
  }
  &_search {
    display: inline-flex;
    height: 36px;
    border: 1px solid $gray-palette;
    border-radius: 9px;
    padding: 8px 12px;
    margin: 8px 0;
    &:focus-within {
      padding: 7px 11px;
      border: 2px solid $text-primary;
    }
    &-icon {
      width: 18px;
      height: 18px;
      margin-left: 11px;
    }
    &-field {
      width: 150px;
      border: 0;
    }
    &-field:focus {
      outline: none;
    }
  }
}
</style>
