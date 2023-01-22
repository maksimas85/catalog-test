<template>
  <div class="price-filter">
    <div class="price-filter_title">
      <h1>Цена</h1>
      <img
        :class="{ 'price-filter_title__arrow-icon_active': isActive }"
        class="price-filter_title__arrow-icon"
        src="@/assets/icons/arrow.svg"
        alt="arrow"
        @click="showList"
      />
    </div>

    <div class="price-filter_range" v-if="isActive">
      <div class="price-filter_range__input">
        <div class="price-filter_range__input-block">
          <label for="price-start">От</label>
          <input
            class="range-price_input__start"
            id="price-start"
            v-model.number="price[0]"
          />
        </div>
        <div class="price-filter_range__input-block">
          <label for="price-end">До</label>
          <input
            class="range-price_input__end"
            id="price-end"
            v-model.number="price[1]"
          />
        </div>
      </div>
      <div class="price-filter_range__slider">
        <vue-slider
          v-model="price"
          tooltip="none"
          :order="false"
          :min="0"
          :max="1000"
          :dotSize="16"
          :width="192"
          @drag-end="dragend"
        ></vue-slider>
      </div>
      <div class="panel-body">
        <div class="panel-body_switch">
          <label class="switch">
            <input type="checkbox" @click="toggleCheckbox" />
            <div class="slider round"></div>
          </label>
        </div>
        <div class="panel-body_description">Только товары в наличии</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  name: "PriceFilter",
  components: {
    VueSlider,
  },
  props: {
    resFilter: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isActive: false,
      isToggle: false,
    };
  },
  watch: {
    resFilter(newValue) {
      if (newValue) {
        this.isActive = false;
        this.isToggle = false;
      } else {
        this.isActive = newValue;
        this.isToggle = newValue;
      }
    },
  },
  computed: {
    price: {
      get() {
        return this.$store.getters.getMinMaxPrice;
      },
      set(newValue) {
        this.$store.commit("setMinMaxPrice", newValue);
      },
    },
  },
  methods: {
    dragend() {
      this.$store.commit("setMinMaxPrice", this.price);
    },
    showList() {
      this.isActive = !this.isActive;
    },
    toggleCheckbox() {
      this.isToggle = !this.isToggle;
      this.$store.commit("setStockCheckbox", this.isToggle);
    },
  },
};
</script>

<style scoped lang="scss">
.price-filter {
  width: 100%;
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $text-primary;
  }
  &_title {
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
  &_range {
    display: flex;
    flex-direction: column;
    &__slider {
      display: flex;
      justify-content: center;
    }
    &__input {
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
      &-block {
        display: flex;
        flex-direction: column;
        label {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: $text-input;
        }
        input {
          width: 98px;
          height: 36px;
          border: 1px solid $gray-palette;
          border-radius: 9px;
          padding: 8px 12px;
          margin: 4px 0;
          &:focus-within {
            padding: 7px 11px;
            border: 2px solid $text-primary;
          }
          &-field {
            border: 0;
          }
          &-field:focus {
            outline: none;
          }
        }
      }
    }
  }
}
.panel-body {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin-top: 16px;
  &_switch {
    display: flex;
    align-items: center;
    width: 40px;
    margin-right: 10px;
  }
  &_description {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: $text-primary;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $text-gray;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: $bg-secondary;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    &.round {
      border-radius: 12px;
      &:before {
        border-radius: 50%;
      }
    }
  }
  input {
    display: none;
    &:checked + .slider {
      background-color: $default;
      &:before {
        transform: translateX(16px);
      }
    }
  }
}
</style>
