<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import logo from '@/assets/images/Logos.png'
import cloudIcon from '@/assets/images/CloudSun.svg'
import tempIcon from '@/assets/images/41° C.svg'
import searchIcon from '@/assets/images/delivery.svg'
import userIcon from '@/assets/images/user.svg'
import menuIcon from '@/assets/images/nav-menu.svg'
import langIcon from '@/assets/images/En.svg'

const links = [
  { label: 'Things to do', href: '#adventure' },
  { label: 'News', href: '#news' },
  { label: 'Night life', href: '#' },
  { label: 'Food guide', href: '#' },
]

const isOpen = ref(false)
const isScrolled = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 40
}
const onKeydown = (e) => {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <nav class="nav" :class="{ 'nav--scrolled': isScrolled || isOpen }" aria-label="Asosiy menyu">
    <div class="nav-box">
      <a class="nav-image" href="#" aria-label="Hurghada — bosh sahifa">
        <img alt="Hurghada logotipi" class="nav-image__photo" :src="logo">
      </a>

      <ul id="nav-menu" class="nav-list" :class="{ 'nav-list--open': isOpen }">
        <li v-for="link in links" :key="link.label">
          <a class="nav-list__link" :href="link.href" @click="isOpen = false">{{ link.label }}</a>
        </li>
      </ul>

      <div class="nav-sea">
        <img alt="Bulutli, quyoshli ob-havo" class="nav-sea__img" :src="cloudIcon">
        <img alt="41 daraja" class="nav-sea__img" :src="tempIcon">
      </div>

      <div class="nav-human">
        <button type="button" class="nav-btn" aria-label="Qidirish">
          <img alt="" class="nav-btn__img" :src="searchIcon">
        </button>
        <button type="button" class="nav-btn" aria-label="Profil">
          <img alt="" class="nav-btn__img" :src="userIcon">
        </button>
        <button type="button" class="nav-btn" aria-label="Til: English">
          <img alt="" class="nav-btn__img" :src="langIcon">
        </button>
        <button
            type="button"
            class="nav-btn nav-toggle"
            :aria-expanded="isOpen"
            aria-controls="nav-menu"
            aria-label="Menyuni ochish"
            @click="isOpen = !isOpen"
        >
          <img alt="" class="nav-btn__img" :src="menuIcon">
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  --deep: #072f43;
  --sand: #f7f1e6;
  --coral: #ff6b4a;

  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  isolation: isolate;
  background-color: transparent;
  transition: background-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
}

/* Rasm ustida yozuv o'qilishi uchun yuqoridagi yumshoq soya */
.nav::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to bottom, rgba(7, 47, 67, 0.65), rgba(7, 47, 67, 0));
  transition: opacity 0.35s ease;
}

.nav--scrolled {
  background-color: rgba(7, 47, 67, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
}

.nav--scrolled::before {
  opacity: 0;
}

.nav-box {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 1280px;
  margin-inline: auto;
  padding: 0.75rem clamp(1rem, 4vw, 2rem);
}

.nav-image {
  display: block;
  flex-shrink: 0;
}

.nav-image__photo {
  display: block;
  height: 44px;
  width: auto;
}

.nav-list {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: clamp(1rem, 2.5vw, 2.25rem);
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-list__link {
  position: relative;
  display: inline-block;
  padding: 0.5rem 0;
  color: var(--sand);
  font-weight: 500;
  text-decoration: none;
}

.nav-list__link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 2px;
  background: var(--coral);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-list__link:hover::after {
  transform: scaleX(1);
}

.nav-sea {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.nav-sea__img {
  display: block;
  height: 28px;
  width: auto;
}

.nav-human {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-btn {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  transform: translateY(-2px);
}

.nav-btn__img {
  display: block;
  height: 22px;
  width: auto;
}

.nav-toggle {
  display: none;
}

.nav a:focus-visible,
.nav button:focus-visible {
  outline: 2px solid var(--coral);
  outline-offset: 3px;
  border-radius: 6px;
}

/* ---------- Planshet va telefon ---------- */
@media (max-width: 900px) {
  .nav-toggle {
    display: grid;
  }

  .nav-sea {
    margin-left: auto;
  }

  .nav-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    padding: 0.5rem clamp(1rem, 4vw, 2rem) 1.25rem;
    background: rgba(7, 47, 67, 0.97);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  }

  .nav-list--open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  .nav-list li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  .nav-list__link {
    display: block;
    padding: 1rem 0;
    font-size: 1.1rem;
  }

  .nav-list__link::after {
    display: none;
  }
}

@media (max-width: 560px) {
  .nav-sea {
    display: none;
  }

  .nav-human {
    margin-left: auto;
  }

  .nav-image__photo {
    height: 38px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav,
  .nav::before,
  .nav-btn,
  .nav-list,
  .nav-list__link::after {
    transition: none;
  }
}
</style>