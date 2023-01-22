<template>
  <ul class="pagination">
    <li @click="clickPrevious" class="pagination_page-previous pagination-text">
      <i class="caret" />
      Предыдущая
    </li>
    <li
      v-for="page in pages"
      :key="page"
      class="pagination_page-item"
      :class="{ active: currentPage === page }"
    >
      <div @click="changePage(page)" class="page-link">
        {{ page }}
      </div>
    </li>
    <li @click="clickNext" class="pagination_page-next pagination-text">
      Следующая
      <i class="caret caret-right" />
    </li>
  </ul>
</template>

<script>
import { range } from "@/helpers/utils";
export default {
  name: "VPagination",
  props: {
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit);
      return range(1, pagesCount);
    },
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
    clickPrevious() {
      this.$emit("clickPrevious");
    },
    clickNext() {
      this.$emit("clickNext");
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  margin: 56px 16px 64px;
  gap: 4px;
  &-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    cursor: pointer;
    user-select: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: $text-primary;
  }
  &_page-previous {
    .caret {
      display: block;
      background: url("../assets/icons/arrow-sm.svg") no-repeat;
      width: 6px;
      height: 12px;
      margin-right: 10px;
      &-right {
        transform: rotate(180deg);
      }
    }
  }
  &_page-item {
    cursor: pointer;
    &:hover {
      background: $bg-link;
      border-radius: 7px;
    }
    .page-link {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 10px;
      width: 29px;
      height: 32px;
      border-radius: 7px;

      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: $text-primary;
    }
  }
  .active {
    border-radius: 7px;
    background: $default;
    .page-link {
      color: $text-white;
    }
  }
  &_page-next {
    .caret {
      display: block;
      background: url("../assets/icons/arrow-sm.svg") no-repeat;
      width: 6px;
      height: 12px;
      margin-left: 10px;
      &-right {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
