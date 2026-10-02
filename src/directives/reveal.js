// Scroll bo'yicha paydo bo'lish animatsiyasi.
// Ishlatilishi:  <div v-reveal="120">  (120 = kechikish, millisekund)
// Komponentda:   import { vReveal } from '@/directives/reveal'

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

let io = null

function getObserver() {
    if (io) return io

    io = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue

                const el = entry.target
                const delay = Number(el.dataset.revealDelay || 0)
                io.unobserve(el)

                if (el.dataset.revealClip) {
                    el.style.clipPath = 'inset(0 0 0 0)'
                } else {
                    el.style.opacity = '1'
                    el.style.transform = 'none'
                }

                // Animatsiya tugagach inline stillarni olib tashlaymiz,
                // shunda komponentning o'z hover transitionlari ishlaydi.
                setTimeout(() => {
                    el.style.transition = ''
                    el.style.clipPath = ''
                    el.style.opacity = ''
                    el.style.transform = ''
                    el.style.willChange = ''
                }, delay + 1300)
            }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    return io
}

export const vReveal = {
    mounted(el, binding) {
        if (prefersReducedMotion() || !('IntersectionObserver' in window)) return

        const delay = Number(binding.value || 0)
        el.dataset.revealDelay = String(delay)

        if (binding.modifiers.clip) {
            // Rasm tepadan pastga "ochilib" chiqadi (v-reveal.clip)
            el.dataset.revealClip = '1'
            el.style.clipPath = 'inset(0 0 100% 0)'
            el.style.transition = `clip-path 1.1s cubic-bezier(.77,0,.18,1) ${delay}ms`
        } else {
            el.style.opacity = '0'
            el.style.transform = 'translateY(32px)'
            el.style.willChange = 'opacity, transform'
            el.style.transition =
                `opacity .8s cubic-bezier(.2,.7,.2,1) ${delay}ms, ` +
                `transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`
        }

        getObserver().observe(el)
    },
    unmounted(el) {
        io?.unobserve(el)
    },
}