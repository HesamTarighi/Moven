export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('click-outside', (el, binding) => {
        document.documentElement.addEventListener('click', e => {
            if (!el.contains(e.target)) binding.value()
        })
    })
})
