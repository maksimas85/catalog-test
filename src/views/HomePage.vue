<template>
  <div class="home">
    <NavSidebar :prodList="prodList" :scaleList="scaleList" />
    <ProductCatalog :productData="totalFilter" />
  </div>
</template>

<script>
import ProductCatalog from "@/components/ProductCatalog";
import NavSidebar from "@/components/NavSidebar";

export default {
  name: "HomePage",
  components: {
    ProductCatalog,
    NavSidebar,
  },
  data() {
    return {
      mockData: [
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 1.5,
          price: 100,
          stock: false,
        },
        {
          manufacturer: "AVD",
          category: "Автомобили и мотоциклы",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 100,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Военная техника",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 2.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Аэрографы и компрессоры",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 3.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Аэрографы и компрессоры",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 1.5,
          price: 300,
          stock: false,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Доработка моделей",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 3.5,
          price: 300,
          stock: true,
        },
        {
          manufacturer: "Advanced Models",
          category: "Железная дорога",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 2.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "Advanced Models",
          category: "Инструмент",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 0.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Клей",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: false,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Краска",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Восточный",
          category: "Литература",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "Advanced Экспресс",
          category: "Миниатюра и диорама",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Восточный Экспресс",
          category: "Модели для детей",
          scale: "1:72",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: true,
        },
        {
          manufacturer: "ModelGun",
          category: "Модельная химия",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Печатная продукция",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: false,
        },
        {
          manufacturer: "Modelcollect",
          category: "Флот",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: true,
        },
        {
          manufacturer: "Modelcollect",
          category: "Футляры и подставки",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: true,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: false,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 100,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Автомобили и мотоциклы",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 100,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Военная техника",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Аэрографы и компрессоры",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Аэрографы и компрессоры",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 300,
          stock: true,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Доработка моделей",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 300,
          stock: false,
        },
        {
          manufacturer: "Advanced Models",
          category: "Железная дорога",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: false,
        },
        {
          manufacturer: "Advanced Models",
          category: "Инструмент",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Клей",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Краска",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Восточный",
          category: "Литература",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: false,
        },
        {
          manufacturer: "Advanced Экспресс",
          category: "Миниатюра и диорама",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Восточный Экспресс",
          category: "Модели для детей",
          scale: "1:72",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: true,
        },
        {
          manufacturer: "ModelGun",
          category: "Модельная химия",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Печатная продукция",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: true,
        },
        {
          manufacturer: "Modelcollect",
          category: "Флот",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: false,
        },
        {
          manufacturer: "Modelcollect",
          category: "Футляры и подставки",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: true,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: false,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 100,
          stock: false,
        },
        {
          manufacturer: "AVD",
          category: "Автомобили и мотоциклы",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 100,
          stock: false,
        },
        {
          manufacturer: "AVD",
          category: "Военная техника",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Аэрографы и компрессоры",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Аэрографы и компрессоры",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 300,
          stock: true,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Доработка моделей",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 300,
          stock: false,
        },
        {
          manufacturer: "Advanced Models",
          category: "Железная дорога",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "Advanced Models",
          category: "Инструмент",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Клей",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Краска",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: false,
        },
        {
          manufacturer: "Advanced Восточный",
          category: "Литература",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "Advanced Экспресс",
          category: "Миниатюра и диорама",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Восточный Экспресс",
          category: "Модели для детей",
          scale: "1:72",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: false,
        },
        {
          manufacturer: "ModelGun",
          category: "Модельная химия",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Печатная продукция",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: true,
        },
        {
          manufacturer: "Modelcollect",
          category: "Флот",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: true,
        },
        {
          manufacturer: "Modelcollect",
          category: "Футляры и подставки",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: false,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 100,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Автомобили и мотоциклы",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 100,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Военная техника",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Аэрографы и компрессоры",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 200,
          stock: true,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Аэрографы и компрессоры",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 300,
          stock: true,
        },
        {
          manufacturer: "Modelcollect Восточный",
          category: "Доработка моделей",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 300,
          stock: false,
        },
        {
          manufacturer: "Advanced Models",
          category: "Железная дорога",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: false,
        },
        {
          manufacturer: "Advanced Models",
          category: "Инструмент",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Клей",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Studia",
          category: "Краска",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Восточный",
          category: "Литература",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "Advanced Экспресс",
          category: "Миниатюра и диорама",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Восточный Экспресс",
          category: "Модели для детей",
          scale: "1:72",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: true,
        },
        {
          manufacturer: "ModelGun",
          category: "Модельная химия",
          scale: "1:48",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Печатная продукция",
          scale: "1:36",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: true,
        },
        {
          manufacturer: "Modelcollect",
          category: "Флот",
          scale: "1:24",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 1000,
          stock: true,
        },
        {
          manufacturer: "Modelcollect",
          category: "Футляры и подставки",
          scale: "1:20",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 900,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:16",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 800,
          stock: true,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:12",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 700,
          stock: true,
        },
        {
          manufacturer: "Edmon Studia",
          category: "Авиация",
          scale: "1:10",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "AVD",
          category: "Авиация",
          scale: "1:8",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:5",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 600,
          stock: true,
        },
        {
          manufacturer: "Start Scale Models (SSM)",
          category: "Авиация",
          scale: "1:4",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:3",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 500,
          stock: true,
        },
        {
          manufacturer: "Advanced Modeling",
          category: "Авиация",
          scale: "1:2",
          name: "Сборная модель Экскаватор UDS-114 Tatra",
          reviews: 22,
          stars: 4.5,
          price: 400,
          stock: true,
        },
      ],
      dataListProduction: [],
      dataListScale: [],
    };
  },
  watch: {
    minMaxPrice() {
      this.$store.commit("setMinMaxPrice", this.minMaxPrice);
    },
  },
  mounted() {
    this.$store.commit("setMinMaxPrice", this.minMaxPrice);
  },
  computed: {
    sortBy() {
      return this.$store.getters.getSort;
    },
    prodList() {
      return this.mockData.reduce((acc, elem) => {
        if (!acc.includes(elem.manufacturer)) {
          acc.push(elem.manufacturer);
        }
        return acc;
      }, []);
    },
    scaleList() {
      return this.mockData.reduce((acc, elem) => {
        if (!acc.includes(elem.scale)) {
          acc.push(elem.scale);
        }
        return acc;
      }, []);
    },
    minMaxPrice() {
      return this.productDataFilter.length
        ? [
            Math.min.apply(
              null,
              this.productDataFilter.map((elem) => elem.price)
            ),
            Math.max.apply(
              null,
              this.productDataFilter.map((elem) => elem.price)
            ),
          ]
        : [
            Math.min.apply(
              null,
              this.mockData.map((elem) => elem.price)
            ),
            Math.max.apply(
              null,
              this.mockData.map((elem) => elem.price)
            ),
          ];
    },
    productDataFilter() {
      const prod = this.$store.getters.getSearchProdList;
      const scale = this.$store.getters.getSearchScaleList;
      const stock = this.$store.getters.getStockCheckbox;

      if (!scale.length && !prod.length && !stock) {
        return this.mockData;
      }

      let prodFilterList = [];
      let scaleFilterList = [];
      let stockFilterList = [];

      if (prod.length) {
        prodFilterList = this.mockData.filter((elem) =>
          prod.includes(elem.manufacturer)
        );
      }

      if (prodFilterList.length && scale.length) {
        scaleFilterList = prodFilterList.filter((elem) =>
          scale.includes(elem.scale)
        );
      } else if (scale.length) {
        scaleFilterList = this.mockData.filter((elem) =>
          scale.includes(elem.scale)
        );
      }

      if (scaleFilterList.length) {
        if (stock) {
          stockFilterList = scaleFilterList.filter(
            (elem) => elem.stock === stock
          );
        } else stockFilterList = scaleFilterList;
      } else if (prodFilterList.length) {
        if (stock) {
          stockFilterList = prodFilterList.filter(
            (elem) => elem.stock === stock
          );
        } else stockFilterList = prodFilterList;
      } else {
        if (stock) {
          stockFilterList = this.mockData.filter(
            (elem) => elem.stock === stock
          );
        } else stockFilterList = this.mockData;
      }

      return stockFilterList;
    },
    totalFilter() {
      const rangePrice = this.$store.getters.getMinMaxPrice;
      if (rangePrice?.length) {
        if (this.sortBy.ascDescSorting !== "" && this.sortBy.name === "Цене") {
          return this.productDataFilter
            .filter(
              (elem) =>
                elem.price >= rangePrice[0] && elem.price <= rangePrice[1]
            )
            .sort((a, b) => {
              if (this.sortBy.ascDescSorting) {
                if (a.price > b.price) {
                  return 1;
                }
                if (a.price < b.price) {
                  return -1;
                }
                return 0;
              }
              if (!this.sortBy.ascDescSorting) {
                if (a.price > b.price) {
                  return -1;
                }
                if (a.price < b.price) {
                  return 1;
                }
                return 0;
              }
            });
        } else {
          return this.productDataFilter.filter(
            (elem) => elem.price >= rangePrice[0] && elem.price <= rangePrice[1]
          );
        }
      } else {
        if (this.sortBy.ascDescSorting !== "" && this.sortBy.name === "price") {
          return this.productDataFilter
            .filter(
              (elem) => this.minMaxPrice[0] <= elem.price <= this.minMaxPrice[1]
            )
            .sort((a, b) => {
              if (this.sortBy.ascDescSorting) {
                if (a.price > b.price) {
                  return 1;
                }
                if (a.price < b.price) {
                  return -1;
                }
                return 0;
              }
              if (!this.sortBy.ascDescSorting) {
                if (a.price > b.price) {
                  return -1;
                }
                if (a.price < b.price) {
                  return 1;
                }
                return 0;
              }
            });
        } else {
          return this.productDataFilter.filter(
            (elem) => this.minMaxPrice[0] <= elem.price <= this.minMaxPrice[1]
          );
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  background: $bg-primary;
  width: 1440px;
  padding-top: 48px;
}
</style>
