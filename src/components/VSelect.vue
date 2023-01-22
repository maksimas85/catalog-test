<template>
  <div class="select-container">
    <label class="select-container_label"> {{ label }} </label>
    <div @blur="open = false" class="select-container_custom-select">
      <div @click="onClickSelect" :class="{ open }" class="selected">
        {{ selected }}
      </div>

      <div :class="{ selectHide: !open }" class="items">
        <div
          class="item"
          v-for="(option, i) of options"
          :key="i"
          @click="onChangeSelectItem(option)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
    <i @click="onClickSelect" :class="{ rotateCaret: open }" class="caret" />
  </div>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    label: {
      type: String,
      required: false,
      default() {
        return "Показывать на странице";
      },
    },
  },
  data() {
    return {
      open: false,
      selected: null,
      options: [
        { name: "20 товаров", count: 20 },
        { name: "40 товаров", count: 40 },
        { name: "80 товаров", count: 80 },
        { name: "120 товаров", count: 120 },
        { name: "160 товаров", count: 160 },
      ],
    };
  },

  watch: {
    options() {
      this.selected = this.options[0]?.name;
    },
  },

  methods: {
    onClickSelect() {
      this.open = !this.open;
    },

    onChangeSelectItem(selectItem) {
      this.selected = selectItem.name;
      this.open = false;
      this.$emit("selected-item", selectItem.count);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  &_label {
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $text-input;
  }
  &_custom-select {
    position: relative;
    text-align: left;
    outline: none;
    line-height: 40px;
    width: 208px;
    height: 36px;

    .selected {
      display: flex;
      align-items: center;
      color: $text-primary;
      padding-left: 12px;
      cursor: pointer;
      user-select: none;
      height: 32px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      background: #ffffff;

      border: 2px solid $gray-palette;
      border-radius: 9px;

      &:hover {
        background-color: $bg-secondary;
      }
      .open {
        border: 2px solid $text-primary;
        border-radius: 9px;
      }
    }
    .items {
      max-height: 250px;
      margin-top: 4px;
      overflow-y: auto;
      color: $text-primary;
      position: absolute;
      background-color: $bg-secondary;
      box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      left: 0;
      right: 0;
      z-index: 1;
      .item {
        color: $text-primary;
        padding: 10px 20px;
        cursor: pointer;
        user-select: none;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        &:hover {
          background-color: $default;
          color: $text-white;
        }
      }
    }
    .disabled {
      background-color: $bg-secondary;
    }
  }
}
.selectHide {
  display: none;
}
.select-container {
  .caret {
    display: block;
    background: url("../assets/icons/arrow.svg") no-repeat;
    transform: rotate(180deg);
    position: absolute;
    margin-right: 16px;
    right: 0;
    top: 32px;
    width: 16px;
    height: 9px;
    cursor: pointer;
  }
  .rotateCaret {
    animation-name: rotateCaret;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }
  @keyframes rotateCaret {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
