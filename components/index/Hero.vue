<template>
    <section
    class="bg-cover bg-no-repeat bg-center relative z-10 after:transition-all after:duration-500 after:w-full after:h-full after:absolute after:left-0 after:top-0 after:-z-10"
    :class="fadeSlide ? 'after:bg-black/100' : 'after:bg-black/50'"
    :style="`background-image: url('_nuxt/assets/images/${slides[usedSlide -1]}');`"
    >

        <div class="space-y-8 text-white">
            <BaseHeader />
            <TemplateSectionT>
                <div class="w-full h-[400px] flex flex-col justify-between py-standard max-2xl:h-[300px] max-2xl:py-0 max-2xl:pb-[30px] max-lg:h-[200px]">
                    <h2 class="w-[600px] text-6xl font-gilroy-regular max-2xl:text-5xl max-lg:text-4xl max-sm:w-[320px] max-sm:text-3xl">
                        Choose a vacation on the ocean
                    </h2>
                    <div class="w-full flex items-center justify-between">
                        <button class="btn btn-glass flex items-center gap-3 max-lg:btn-md max-sm:btn-sm">
                            <span class="font-gilroy-medium"> See more </span> <Icon iconType="material-rounded" iconName="right" iconSize="20" iconColor="ffffff" />
                        </button>

                        <!-- step line -->
                        <div>
                            <div>
                                <span class="text-lg"> {{ usedSlide }} / </span> <span class="text-[12px]"> {{ slides.length }} </span>
                            </div>
                            <div>
                                <div class="w-[200px] h-[1px] bg-base/20 flex max-sm:w-[150px]">
                                    <span :style="`width: ${slideWidth(slides.length)};`" class=" h-[2px] bg-base block transition-all duration-500`"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TemplateSectionT>
        </div>
    </section>
</template>

<script setup>
// data
    const slides = [
        'beach.jpg',
        'beach2.jpg',
        'beach3.jpg',
        'beach4.jpg',
        'beach5.jpg',
        'country.jpg',
        'country2.jpg',
        'beach4.jpg',
    ]
    const usedSlide = ref(1)
    const fadeSlide = ref(false)
    const slideTime = 3000

    // functions
    function slideWidth (totalSlideCount) {
        return ((100 / totalSlideCount) * usedSlide.value) + '%'
    }

    // lifecycles
    onMounted(() => {
        setInterval(() => {
            fadeSlide.value = true
            setTimeout(() => {
                usedSlide.value < slides.length ? usedSlide.value += 1 : usedSlide.value = 1
                fadeSlide.value = false
            }, 1000)
        }, slideTime)
    })
</script>
