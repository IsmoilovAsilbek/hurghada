<script setup>
import { ref } from 'vue'
import { vReveal } from '@/directives/reveal'

import swimImg from '@/assets/images/swim.jpg'
import aquariumImg from '@/assets/images/Rectangle 41.jpg'
import badgeImg from '@/assets/images/stat.jpg'
import shareIcon from '@/assets/images/Rectangle 42.svg'
import heartIcon from '@/assets/images/follow.svg'
import starsImg from '@/assets/images/Frame 5.svg'

const cards = [
  {
    id: 'snorkel',
    image: swimImg,
    alt: 'Qizil dengizda snorkeling',
    reviews: 376,
    title: 'Snorkel in one of the best snorkeling destinations in Egypt',
    text: 'Hurghada is known within Egypt as one of the main capitals of snorkeling and scuba diving, due to the pristine clear blue waters.',
  },
  {
    id: 'aquarium',
    image: aquariumImg,
    alt: 'Hurghada Grand Aquarium',
    reviews: 376,
    title: 'Learn about Egypt’s marine life at Hurghada Grand Aquarium',
    text: 'The Hurghada Grand Aquarium is a space dedicated not only to showcasing the abundant sea life that inhabits the Red Sea, but also as an initiative to inspire..',
  },
]

const liked = ref([])
const toggleLike = (id) => {
  liked.value = liked.value.includes(id)
      ? liked.value.filter((x) => x !== id)
      : [...liked.value, id]
}
</script>

<template>
  <section id="adventure" class="adventure">
    <div class="adventure-box">
      <header class="adventure-box__item" v-reveal>
        <h2 class="adventure-box__title">Things To Do in Hurghada</h2>
        <a href="#!" class="adventure-item__btn">See all</a>
      </header>

      <div class="adventure-list">
        <article
            v-for="(card, i) in cards"
            :key="card.id"
            class="adventure-card"
            :class="{ 'adventure-card--reverse': i % 2 === 1 }"
        >
          <div class="adventure-swim__images" v-reveal.clip>
            <img :src="card.image" :alt="card.alt" class="adventure-swim__img" loading="lazy">
            <img :src="badgeImg" alt="" class="adventure-swim__title">

            <div class="adventure-swim__icons">
              <button type="button" class="adventure-icons__btn" aria-label="Ulashish">
                <img :src="shareIcon" alt="" class="adventure-icons__hug">
              </button>
              <button
                  type="button"
                  class="adventure-icons__btn"
                  :class="{ 'adventure-icons__btn--active': liked.includes(card.id) }"
                  :aria-pressed="liked.includes(card.id)"
                  aria-label="Sevimlilarga qo'shish"
                  @click="toggleLike(card.id)"
              >
                <img :src="heartIcon" alt="" class="adventure-icons__hurt">
              </button>
            </div>
          </div>

          <div class="adventure-box__stars" v-reveal="250">
            <div class="adventure-stars__item">
              <img :src="starsImg" alt="5 yulduz" class="adventure-item__img">
              <span class="adventure-stars__reviews">({{ card.reviews }} reviews)</span>
            </div>
            <h3 class="adventure-stars__text-one">{{ card.title }}</h3>
            <p class="adventure-stars__text-two">{{ card.text }}</p>
            <a href="#!" class="adventure-cta"><span>View tour</span></a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adventure {
  --deep: #072f43;
  --lagoon: #12a4a8;
  --coral: #ff6b4a;

  padding: clamp(2.5rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 8vw, 6rem);
  scroll-margin-top: 72px;
  color: var(--deep);
}

.adventure-box {
  max-width: 1280px;
  margin-inline: auto;
}

.adventure-box__item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: clamp(2rem, 5vw, 4rem);
}

.adventure-box__title {
  margin: 0;
  font-size: clamp(2rem, 5.5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.adventure-item__btn {
  position: relative;
  flex-shrink: 0;
  color: var(--deep);
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  text-decoration: none;
}

.adventure-item__btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background: var(--coral);
  transform: scaleX(0.35);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.adventure-item__btn:hover::after {
  transform: scaleX(1);
}

.adventure-list {
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 8vw, 7rem);
}

/* Karta: rasm katta, matn paneli rasm ustiga chiqib turadi */
.adventure-card {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
}

.adventure-swim__images {
  position: relative;
  grid-column: 1 / 8;
  grid-row: 1;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 28px;
}

.adventure-box__stars {
  position: relative;
  z-index: 2;
  grid-column: 7 / 13;
  grid-row: 1;
  padding: clamp(1.5rem, 3.2vw, 3rem);
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 30px 70px -25px rgba(7, 47, 67, 0.3);
}

.adventure-card--reverse .adventure-swim__images {
  grid-column: 6 / 13;
}

.adventure-card--reverse .adventure-box__stars {
  grid-column: 1 / 7;
}

.adventure-swim__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.9s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.adventure-card:hover .adventure-swim__img {
  transform: scale(1.06);
}

.adventure-swim__title {
  position: absolute;
  left: clamp(0.75rem, 2vw, 1.25rem);
  bottom: clamp(0.75rem, 2vw, 1.25rem);
  width: clamp(90px, 14vw, 150px);
  height: auto;
  border-radius: 12px;
}

.adventure-swim__icons {
  position: absolute;
  top: clamp(0.75rem, 2vw, 1.25rem);
  right: clamp(0.75rem, 2vw, 1.25rem);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.adventure-icons__btn {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(7, 47, 67, 0.45);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.adventure-icons__btn:hover {
  transform: scale(1.1);
}

.adventure-icons__btn--active {
  background: var(--coral);
  animation: pop 0.35s ease;
}

.adventure-icons__btn img {
  display: block;
  width: 22px;
  height: 22px;
}

@keyframes pop {
  50% { transform: scale(1.22); }
}

.adventure-stars__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.adventure-item__img {
  display: block;
  height: 18px;
  width: auto;
}

.adventure-stars__reviews {
  color: rgba(7, 47, 67, 0.7);
}

.adventure-stars__text-one {
  margin: 0.9rem 0 0;
  font-size: clamp(1.5rem, 2.8vw, 2.2rem);
  font-weight: 700;
  line-height: 1.2;
}

.adventure-stars__text-two {
  margin: 0.9rem 0 0;
  color: rgba(7, 47, 67, 0.72);
  line-height: 1.65;
}

/* Tugma: hover da rang pastdan to'ladi */
.adventure-cta {
  position: relative;
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.7rem;
  overflow: hidden;
  border: 2px solid var(--deep);
  border-radius: 999px;
  color: var(--deep);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.35s ease, border-color 0.35s ease;
}

.adventure-cta::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--coral);
  transform: translateY(101%);
  transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.adventure-cta span {
  position: relative;
}

.adventure-cta:hover {
  border-color: var(--coral);
  color: #fff;
}

.adventure-cta:hover::before {
  transform: none;
}

.adventure-icons__btn:focus-visible,
.adventure-item__btn:focus-visible,
.adventure-cta:focus-visible {
  outline: 2px solid var(--coral);
  outline-offset: 3px;
}

/* ---------- Planshet va telefon ---------- */
@media (max-width: 900px) {
  .adventure-card {
    grid-template-columns: 1fr;
  }

  .adventure-swim__images,
  .adventure-card--reverse .adventure-swim__images,
  .adventure-box__stars,
  .adventure-card--reverse .adventure-box__stars {
    grid-column: 1;
  }

  .adventure-box__stars,
  .adventure-card--reverse .adventure-box__stars {
    grid-row: 2;
    margin: -3rem clamp(0.5rem, 4vw, 1.5rem) 0;
  }
}

@media (max-width: 480px) {
  .adventure-swim__images {
    aspect-ratio: 1 / 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .adventure-swim__img,
  .adventure-icons__btn,
  .adventure-item__btn::after,
  .adventure-cta,
  .adventure-cta::before {
    transition: none;
  }

  .adventure-icons__btn--active {
    animation: none;
  }
}
</style>