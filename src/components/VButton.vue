<template>
  <button @click="clickButton(label)" :class="typeButton" class="v-button">
    <p v-if="label" class="v-button_text">{{ label }}</p>
    <i
      :class="[
        icon,
        {
          active: isActive,
          disabled: icon,
          desc: this.order === 'desc' && icon,
        },
      ]"
      class="v-button_icon"
    />
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    typeButton: {
      type: String,
      required: false,
      default() {
        return "primary";
      },
    },
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isActive: this.active,
      order: "",
    };
  },
  watch: {
    active(newValue) {
      this.isActive = newValue;
    },
    icon(newValue) {
      if (!newValue) {
        this.order = "";
      }
    },
  },
  methods: {
    clickButton(label) {
      this.order = !this.order || this.order === "desc" ? "asc" : "desc";
      if (label) {
        this.$emit("clickSort", label);
      }
      if (!this.isActive) {
        this.$emit("clickButtonActive", this.isActive);
        this.isActive = !this.isActive;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.v-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  padding: 8px 12px;
  cursor: pointer;
  &_text {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: $text-primary;
  }
  &_icon {
    width: 16px;
    height: 16px;
  }
}
.primary {
  height: 32px !important;
  background: $default;
  border: none;
  border-radius: 8px;
  .v-button_text {
    color: $text-white;
  }
}
.accent {
  height: 32px !important;
  background: $accent;
  border: none;
  border-radius: 8px;
  .v-button_text {
    color: $text-primary;
  }
}
.outline {
  border: 2px solid #bdbdbd;
  border-radius: 9px;
  background: $bg-secondary;
}
.ghost {
  gap: 12px;
  border: none;
  background: $bg-secondary;
}
.heart {
  display: block;
  background: url("../assets/icons/heart.svg") no-repeat;
  width: 14px;
  height: 13px;
  cursor: pointer;
}
.view-bg {
  display: block;
  background: url("../assets/icons/view-bg.svg") no-repeat;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &.active {
    display: block;
    background: url("../assets/icons/view-bg-active.svg") no-repeat;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
.view-sm {
  display: block;
  background: url("../assets/icons/view-sm.svg") no-repeat;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &.active {
    display: block;
    background: url("../assets/icons/view-sm-active.svg") no-repeat;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
.low-to-high {
  display: block;
  background: url("../assets/icons/low-to-high.svg") no-repeat;
  width: 16px;
  height: 16px;
  cursor: pointer;
  .disabled {
    background: none;
  }
  &.desc {
    display: block;
    background: url("../assets/icons/low-to-high.svg") no-repeat;
    transform: rotate(180deg);
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
}
</style>
