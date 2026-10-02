<script setup>
import { vReveal } from '@/directives/reveal'
import newsImg from '@/assets/images/background.jpg'

// Yangi yangilik qo'shish uchun shu massivga obyekt qo'shing
const news = [
  {
    id: 1,
    image: newsImg,
    title: 'EGYPT - HURGHADA RECEIVES 1ST TOURIST GROUP',
    iso: '2022-12-20T15:16',
    label: '12/20/2022 3:16 PM',
  },
]
</script>

<template>
  <section id="news" class="hurgada">
    <div class="hurgada-inner">
      <header class="hurgada-item" v-reveal>
        <h2 class="hurgada-item__title">Hurghada NEWS</h2>
        <a href="#!" class="hurgada-item__btn">See all</a>
      </header>

      <div class="hurgada-box">
        <a
            v-for="(item, i) in news"
            :key="item.id"
            v-reveal.clip="i * 120"
            href="#!"
            class="hurgada-box_new"
        >
          <div class="hurgada-new__images">
            <img :src="item.image" :alt="item.title" class="hurgada-images__img" loading="lazy">
          </div>

          <div class="hurgada-new__info">
            <div class="hurgada-new__text">
              <time class="hurgada-new__date" :datetime="item.iso">{{ item.label }}</time>
              <h3 class="hurgada-new__title">{{ item.title }}</h3>
            </div>
            <span class="hurgada-new__go" aria-hidden="true"></span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hurgada {
  --deep: #072f43;
  --coral: #ff6b4a;

  padding: 0 clamp(1rem, 4vw, 2rem) clamp(3.5rem, 9vw, 7rem);
  scroll-margin-top: 72px;
  color: var(--deep);
}

.hurgada-inner {
  max-width: 1280px;
  margin-inline: auto;
}

.hurgada-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
}

.hurgada-item__title {
  margin: 0;
  font-size: clamp(2rem, 5.5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.05;
}

.hurgada-item__btn {
  flex-shrink: 0;
  color: rgba(7, 47, 67, 0.75);
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  text-decoration: none;
  transition: color 0.25s ease;
}

.hurgada-item__btn:hover {
  color: var(--coral);
}

.hurgada-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}

.hurgada-box_new {
  position: relative;
  display: block;
  min-height: clamp(340px, 52vw, 620px);
  overflow: hidden;
  border-radius: 28px;
  color: #fff;
  text-decoration: none;
}

.hurgada-box_new:first-child {
  grid-column: 1 / -1;
}

.hurgada-new__images {
  position: absolute;
  inset: 0;
}

.hurgada-images__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.hurgada-box_new:hover .hurgada-images__img {
  transform: scale(1.06);
}

.hurgada-new__info {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 6rem clamp(1.25rem, 3.5vw, 2.75rem) clamp(1.25rem, 3.5vw, 2.5rem);
  background: linear-gradient(to top, rgba(7, 47, 67, 0.9), rgba(7, 47, 67, 0));
}

.hurgada-new__date {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.hurgada-new__title {
  max-width: 22ch;
  margin: 0.5rem 0 0;
  font-size: clamp(1.5rem, 4.2vw, 3.1rem);
  font-weight: 700;
  line-height: 1.1;
}

/* Dumaloq tugma: hover da aylanadi va rangi o'zgaradi */
.hurgada-new__go {
  position: relative;
  flex-shrink: 0;
  width: clamp(52px, 6vw, 72px);
  height: clamp(52px, 6vw, 72px);
  border: 2px solid rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  transition: background-color 0.35s ease, border-color 0.35s ease, transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.hurgada-new__go::before,
.hurgada-new__go::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 38%;
  height: 2px;
  background: #fff;
  transform: translate(-50%, -50%);
}

.hurgada-new__go::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.hurgada-box_new:hover .hurgada-new__go {
  background: var(--coral);
  border-color: var(--coral);
  transform: rotate(90deg);
}

.hurgada-box_new:focus-visible,
.hurgada-item__btn:focus-visible {
  outline: 2px solid var(--coral);
  outline-offset: 3px;
}

@media (max-width: 560px) {
  .hurgada-box_new {
    border-radius: 22px;
  }

  .hurgada-new__info {
    padding-top: 4rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hurgada-images__img,
  .hurgada-new__go,
  .hurgada-item__btn {
    transition: none;
  }
}
</style>