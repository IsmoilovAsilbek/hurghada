<script setup>
import pager from '@/assets/images/Sliders tabs.png'

const title = 'HURGHADA'
</script>

<template>
  <div class="header-content">
    <div class="header-bg">
      <div class="header-content__info">
        <div class="header-info__item">
          <p class="header-item__littleTitle">Welcome to</p>
          <h1 class="header-item__title" :aria-label="title">
                        <span
                            v-for="(letter, i) in title"
                            :key="i"
                            class="header-item__letter"
                            :style="{ '--i': i }"
                            aria-hidden="true"
                        >{{ letter }}</span>
          </h1>
        </div>

        <div class="header-info__images">
          <img :src="pager" alt="" class="header-info__pager">
        </div>
      </div>

      <!-- Dengiz to'lqini: hero va kontent o'rtasidagi o'tish -->
      <svg class="header-wave header-wave--back" viewBox="0 0 2880 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,60 Q180,10 360,60 T720,60 T1080,60 T1440,60 T1800,60 T2160,60 T2520,60 T2880,60 L2880,120 L0,120Z"/>
      </svg>
      <svg class="header-wave header-wave--front" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,70 Q360,20 720,70 T1440,70 L1440,120 L0,120Z"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.header-content {
  flex-grow: 1;
  display: flex;
  /* Rasm endi ekranni to'liq egallamaydi: o'rtacha balandlik */
  height: clamp(540px, 86vh, 820px);
  height: clamp(540px, 86svh, 820px);
  overflow: hidden;
}

.header-bg {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  background-image: url("@/assets/images/Background.png");
  background-size: cover;
  background-position: center 40%;
  background-repeat: no-repeat;
}

.header-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to top,
      rgba(7, 47, 67, 0.7) 0%,
      rgba(7, 47, 67, 0.1) 50%,
      rgba(7, 47, 67, 0.35) 100%
  );
}

.header-content__info {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  gap: clamp(1.25rem, 4vw, 3rem);
  width: min(1280px, 100%);
  margin-inline: auto;
  padding: 6rem clamp(1rem, 4vw, 2rem) clamp(4rem, 12vh, 7rem);
}

.header-info__images {
  order: -1;
  flex-shrink: 0;
  animation: slide-in 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) 1.1s both;
}

/* Pager rasmi kichik va qat'iy chegaralangan */
.header-info__pager {
  display: block;
  width: clamp(90px, 11vw, 150px);
  max-width: 100%;
  height: auto;
}

.header-item__littleTitle {
  margin: 0 0 0.25rem;
  color: #f7f1e6;
  font-size: clamp(1.1rem, 2.6vw, 2rem);
  animation: fade-in 0.8s ease 0.1s both;
}

.header-item__title {
  display: flex;
  margin: 0;
  color: #fff;
  font-size: clamp(2.8rem, 11vw, 7.5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0.02em;
}

.header-item__letter {
  display: inline-block;
  animation: rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: calc(0.25s + var(--i) * 70ms);
}

/* To'lqin */
.header-wave {
  position: absolute;
  left: 0;
  bottom: -1px;
  z-index: 2;
  height: clamp(44px, 7vw, 100px);
  pointer-events: none;
}

.header-wave path {
  fill: #fbf7ef;
}

.header-wave--front {
  width: 100%;
}

.header-wave--back {
  width: 200%;
  height: clamp(56px, 9vw, 130px);
  opacity: 0.45;
  animation: drift 18s linear infinite;
}

@keyframes drift {
  to { transform: translateX(-50%); }
}

@keyframes rise {
  from { opacity: 0; transform: translateY(45%); }
  to { opacity: 1; transform: none; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in {
  from { opacity: 0; transform: translateX(-24px); }
  to { opacity: 1; transform: none; }
}

@media (max-width: 700px) {
  .header-content__info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .header-info__images {
    order: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .header-item__littleTitle,
  .header-item__letter,
  .header-info__images,
  .header-wave--back {
    animation: none;
  }
}
</style>