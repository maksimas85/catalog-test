<template>
  <div class="container_category">
    <h1>Категории</h1>
    <div class="category-list">
      <ul
        class="category-list_items"
        v-for="item in listItems"
        :key="item.name"
      >
        <li class="category-list_item">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      listItems: [
        { name: "Авиация" },
        { name: "Автомобили и мотоциклы" },
        { name: "Аэрографы и компрессоры" },
        { name: "Военная техника" },
        { name: "Доработка моделей" },
        { name: "Железная дорога" },
        { name: "Инструмент" },
        { name: "Клей" },
        { name: "Краска" },
        { name: "Литература" },
        { name: "Миниатюра и диорама" },
        { name: "Модели для детей" },
        { name: "Модельная химия" },
        { name: "Печатная продукция" },
        { name: "Флот" },
        { name: "Футляры и подставки" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.container_category {
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $text-primary;
    margin-bottom: 16px;
  }
}
.category-list {
  &_items {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: $text-primary;
  }
  &_item {
    display: flex;
    align-items: center;
    padding: 8px;
    width: 100%;
    height: 36px;
    cursor: pointer;
    &:hover {
      color: $default;
    }
  }
}
</style>
