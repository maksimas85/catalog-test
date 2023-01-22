<template>
  <div class="container_product">
    <div class="product">
      <div
        :class="[largeCard ? 'product_image-lg' : 'product_image-sm']"
        class="product_image"
      >
        <img src="../assets/product_image.png" alt="#" />
      </div>
      <div class="product_info">
        <div class="product_info-price">
          <h1>{{ card.price }} &#8381;</h1>
        </div>

        <div class="product_info-title">
          <p>{{ card.name }}</p>
          <div class="product_info-title__scale">
            <div class="product_info-title__scale_fraction">
              {{ card.scale }}
            </div>
            <p>{{ card.manufacturer }}</p>
          </div>
        </div>

        <div class="product_info-reviews">
          <div class="product_info-reviews_stars">
            <div class="star" v-for="star in stars" :key="star + 'point'"></div>
            <div class="star-half" v-if="isIntegerStar"></div>
            <div
              class="star-unpainted"
              v-for="star in unPaintedStar"
              :key="star + 'unpoint'"
            ></div>
          </div>
          <div class="product_info-reviews_count">
            <p>{{ card.reviews }} отзыва</p>
          </div>
        </div>
        <VButton typeButton="primary" label="В корзину" />
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
export default {
  components: {
    VButton,
  },
  name: "ProductCard",
  props: {
    largeCard: {
      type: Boolean,
      required: true,
    },
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    stars() {
      return Math.floor(this.card.stars);
    },
    isIntegerStar() {
      return !Number.isInteger(this.card.stars);
    },
    unPaintedStar() {
      if (this.isIntegerStar) {
        return 5 - this.stars - 1;
      } else {
        return 5 - this.stars;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container_product {
  width: 100%;
  height: 100%;
}
.product {
  width: 100%;
  height: 100%;
  &_image {
    width: 100%;
    &-lg {
      height: 50%;
    }
    &-sm {
      height: 42%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px 16px 0 0;
    }
  }
  &_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 196px;
    gap: 8px;
    background: $bg-secondary;
    border-radius: 0 0 16px 16px;
    padding: 8px;
    &-price {
      width: 100%;
      text-align: left;
    }
    &-price > h1 {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
    &-title > p {
      min-height: 32px;
      margin-bottom: 4px;
    }
    &-title {
      width: 100%;
      text-align: left;
      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
      }
      &__scale {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        p {
          flex-grow: 1;
        }
        &_fraction {
          margin-right: 8px;
          padding: 4px 8px;
          width: 40px;
          height: 24px;
          background: $bg-scale;
          border-radius: 4px;

          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          color: $text-white;
        }
      }
    }
    &-reviews {
      display: flex;
      flex-direction: column;
      &_stars {
        display: flex;
        margin-bottom: 6px;
        .star {
          display: block;
          background: url("../assets/icons/star.svg") no-repeat;
          width: 14px;
          height: 14px;
          cursor: pointer;
          &-half {
            display: block;
            background: url("../assets/icons/half-star.svg") no-repeat;
            width: 14px;
            height: 14px;
            cursor: pointer;
          }
          &-unpainted {
            display: block;
            background: url("../assets/icons/star-unpaint.svg") no-repeat;
            width: 14px;
            height: 14px;
            cursor: pointer;
          }
        }
      }
      &_count {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: $text-gray;
      }
    }
  }
}
</style>
