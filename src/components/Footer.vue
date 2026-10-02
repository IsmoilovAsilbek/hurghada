<script setup>
import { ref } from 'vue'
import { vReveal } from '@/directives/reveal'
import logo from '@/assets/images/Logos.png'

const year = new Date().getFullYear()

const explore = [
  { label: 'Things to do', href: '#adventure' },
  { label: 'News', href: '#news' },
  { label: 'Night life', href: '#!' },
  { label: 'Food guide', href: '#!' },
]
const info = [
  { label: 'About us', href: '#!' },
  { label: 'Contact', href: '#!' },
  { label: 'Privacy policy', href: '#!' },
  { label: 'Terms of use', href: '#!' },
]

const email = ref('')
const subscribed = ref(false)

const subscribe = () => {
  if (!email.value) return
  // Bu yerga o'z API so'rovingizni qo'shing
  subscribed.value = true
  email.value = ''
}

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer class="footer">
    <svg class="footer-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,0H1440V40Q1080,95 720,40T0,40Z"/>
    </svg>

    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand" v-reveal>
          <img :src="logo" alt="Hurghada logotipi" class="footer-brand__logo">
          <p class="footer-brand__text">
            Qizil dengiz sohilidagi eng yaxshi dam olish, sho'ng'ish, tungi hayot va
            mazali taomlar uchun yo'riqnoma.
          </p>
          <div class="footer-social">
            <a href="#!" class="footer-social__link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
            </a>
            <a href="#!" class="footer-social__link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 8h2.5V4.5H14A4 4 0 0 0 10 8.5V11H7.5v3.5H10V21h3.5v-6.5H16l.5-3.5h-3V8.8c0-.5.3-.8.5-.8z"/></svg>
            </a>
            <a href="#!" class="footer-social__link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/></svg>
            </a>
          </div>
        </div>

        <nav class="footer-col" aria-label="Sayt bo'limlari" v-reveal="100">
          <h3 class="footer-col__title">Explore</h3>
          <ul class="footer-col__list">
            <li v-for="l in explore" :key="l.label">
              <a :href="l.href" class="footer-link">{{ l.label }}</a>
            </li>
          </ul>
        </nav>

        <nav class="footer-col" aria-label="Ma'lumot" v-reveal="180">
          <h3 class="footer-col__title">Info</h3>
          <ul class="footer-col__list">
            <li v-for="l in info" :key="l.label">
              <a :href="l.href" class="footer-link">{{ l.label }}</a>
            </li>
          </ul>
        </nav>

        <div class="footer-news" v-reveal="260">
          <h3 class="footer-col__title">Yangiliklarga obuna bo'ling</h3>
          <form v-if="!subscribed" class="footer-form" @submit.prevent="subscribe">
            <input
                v-model.trim="email"
                type="email"
                required
                placeholder="Email manzilingiz"
                aria-label="Email manzil"
                class="footer-form__input"
            >
            <button type="submit" class="footer-form__btn">Obuna</button>
          </form>
          <p v-else class="footer-form__done" role="status">
            Rahmat! Siz ro'yxatga qo'shildingiz.
          </p>
        </div>
      </div>

      <div class="footer-mark" aria-hidden="true" v-reveal>HURGHADA</div>

      <div class="footer-bottom">
        <p class="footer-bottom__copy">© {{ year }} Hurghada. Barcha huquqlar himoyalangan.</p>
        <button type="button" class="footer-top" @click="toTop">
          Tepaga qaytish
          <span class="footer-top__icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  --deep: #072f43;
  --sand: #f7f1e6;
  --coral: #ff6b4a;
  --lagoon: #12a4a8;

  position: relative;
  background: var(--deep);
  color: var(--sand);
  font-family: "Outfit", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}

/* Tepadagi to'lqin Main fon rangida */
.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: clamp(40px, 6vw, 90px);
  pointer-events: none;
}

.footer-wave path {
  fill: #fbf7ef;
}

.footer-inner {
  max-width: 1280px;
  margin-inline: auto;
  padding: clamp(6rem, 11vw, 9rem) clamp(1rem, 4vw, 2rem) 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.5fr;
  gap: clamp(2rem, 5vw, 4rem);
}

.footer-brand__logo {
  display: block;
  height: 48px;
  width: auto;
}

.footer-brand__text {
  max-width: 34ch;
  margin: 1.25rem 0 0;
  color: rgba(247, 241, 230, 0.72);
  line-height: 1.65;
}

.footer-social {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.footer-social__link {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(247, 241, 230, 0.3);
  border-radius: 50%;
  color: var(--sand);
  transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

.footer-social__link svg {
  width: 20px;
  height: 20px;
}

.footer-social__link:hover {
  background: var(--coral);
  border-color: var(--coral);
  transform: translateY(-4px);
}

.footer-col__title {
  margin: 0 0 1.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
}

.footer-col__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-link {
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
  color: rgba(247, 241, 230, 0.75);
  text-decoration: none;
  transition: color 0.25s ease;
}

.footer-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--coral);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.footer-link:hover {
  color: #fff;
}

.footer-link:hover::after {
  transform: scaleX(1);
}

/* Obuna formasi */
.footer-form {
  display: flex;
  gap: 0.5rem;
  padding: 0.35rem;
  border: 1px solid rgba(247, 241, 230, 0.3);
  border-radius: 999px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.footer-form:focus-within {
  border-color: var(--lagoon);
  box-shadow: 0 0 0 3px rgba(18, 164, 168, 0.25);
}

.footer-form__input {
  flex: 1;
  min-width: 0;
  padding: 0.6rem 0.9rem;
  border: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  outline: none;
}

.footer-form__input::placeholder {
  color: rgba(247, 241, 230, 0.5);
}

.footer-form__btn {
  padding: 0.7rem 1.4rem;
  border: 0;
  border-radius: 999px;
  background: var(--coral);
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.footer-form__btn:hover {
  background: #ff8466;
  transform: scale(1.04);
}

.footer-form__done {
  margin: 0;
  color: var(--sand);
  animation: fade-in 0.5s ease both;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
}

/* Katta kontur yozuv */
.footer-mark {
  margin-top: clamp(2.5rem, 7vw, 5rem);
  font-size: clamp(3rem, 17.5vw, 14rem);
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: 0.02em;
  text-align: center;
  color: transparent;
  -webkit-text-stroke: 1px rgba(247, 241, 230, 0.28);
  user-select: none;
  transition: color 0.6s ease;
}

.footer-mark:hover {
  color: rgba(247, 241, 230, 0.06);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: clamp(1.5rem, 4vw, 2.5rem);
  padding-top: 1.25rem;
  border-top: 1px solid rgba(247, 241, 230, 0.15);
}

.footer-bottom__copy {
  margin: 0;
  color: rgba(247, 241, 230, 0.6);
  font-size: 0.95rem;
}

.footer-top {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--sand);
  font: inherit;
  cursor: pointer;
}

.footer-top__icon {
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(247, 241, 230, 0.4);
  border-radius: 50%;
  transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

/* Strelka CSS bilan chiziladi */
.footer-top__icon::before {
  content: "";
  position: absolute;
  top: 55%;
  left: 50%;
  width: 9px;
  height: 9px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  transform: translate(-50%, -50%) rotate(45deg);
}

.footer-top:hover .footer-top__icon {
  background: var(--coral);
  border-color: var(--coral);
  transform: translateY(-4px);
}

.footer a:focus-visible,
.footer button:focus-visible {
  outline: 2px solid var(--coral);
  outline-offset: 3px;
  border-radius: 6px;
}

/* ---------- Planshet ---------- */
@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand,
  .footer-news {
    grid-column: 1 / -1;
  }

  .footer-news {
    max-width: 480px;
  }
}

/* ---------- Telefon ---------- */
@media (max-width: 560px) {
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-social__link,
  .footer-link,
  .footer-link::after,
  .footer-form__btn,
  .footer-top__icon,
  .footer-mark {
    transition: none;
  }

  .footer-form__done {
    animation: none;
  }
}
</style>