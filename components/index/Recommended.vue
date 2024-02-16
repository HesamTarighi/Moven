<template>
    <TemplateSectionT :title="'Recommended destination'">
        <div class="relative">
            <button class="px-[20px] py-[20px] border border-primary/20 rounded-full absolute -top-[125px] right-[80px] z-50 max-lg:-top-[110px] max-md:-top-[80px] max-md:px-[15px] max-md:py-[15px] max-sm:right-[60px] max-sm:px-[10px] max-sm:py-[10px] max-sm:bg-primary max-sm:left-0 max-sm:center-y" @click="swiperProps.slidePrev()">
                <Icon iconType="material-rounded" iconName="left" iconSize="25" iconColor="101010" class="max-sm:hidden" />
                <Icon iconType="material-rounded" iconName="left" iconSize="25" iconColor="ffffff" class="sm:hidden" />
            </button>
            <button class="px-[20px] py-[20px] border border-primary/20 rounded-full absolute -top-[125px] right-0 z-50 max-lg:-top-[110px] max-md:-top-[80px] max-md:px-[15px] max-md:py-[15px] max-sm:px-[10px] max-sm:py-[10px] max-sm:bg-primary max-sm:center-y" @click="swiperProps.slideNext()">
                <Icon iconType="material-rounded" iconName="right" iconSize="25" iconColor="101010" class="max-sm:hidden" />
                <Icon iconType="material-rounded" iconName="right" iconSize="25" iconColor="ffffff" class="sm:hidden" />
            </button>
            <Swiper
            :slidesPerView="'auto'"
            :spaceBetween="20"
            @swiper="onSwiper"
            >
                <SwiperSlide style="width: 300px;" v-for="item in recommendedPlaces">
                    <a href="/">
                        <div class="w-full rounded-xl my-2">
                            <div>
                                <!-- image -->
                                <img :src="`_nuxt/assets/images/places/${item.imageName}`" class="w-full h-[170px] rounded-t-xl" />
                            </div>
                            <div class="border border-primary/10 rounded-b-xl p-8 space-y-6">
                                <div class="space-y-4">
                                    <h3 class="text-lg font-gilroy-bold"> {{ item.name }} </h3>
                                    <p class="text-[13px] opacity-40">
                                        {{ item.description }}
                                    </p>
                                </div>
                                <div class="flex gap-10">
                                    <div class="flex gap-2 items-center">
                                        <span> <Icon iconType="glyph-neue" iconName="marker" iconSize="15" iconColor="101010" /> </span>
                                        <span class="text-[12px]"> {{ item.country }} </span>
                                    </div>
                                    <div class="flex gap-2 items-center">
                                        <span> <Icon iconType="ios-filled" iconName="star" iconSize="15" iconColor="101010" /> </span>
                                        <span class="text-[12px]"> {{ item.score }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </TemplateSectionT>
</template>

<script setup>
    const swiperProps = ref({})
    const recommendedPlaces = [
        {
            name: "Blue Cave, Island",
            description: "The tiny islet of Bisevo is only 5 nautical miles southwest of Komiza on Vis Island. Covering 6 sq km, it would hardly be noticed at all except for its remarkable Blue Grotto (Modra Spilja) or Blue Cave that strongly suggests the famous Grotto of Capri.",
            imageName: "blue_cave.jpg",
            country: "Island",
            score: "4.7"
        },
        {
            name: "Agra",
            description: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third most populous city in India.",
            imageName: "agra.jpg",
            country: "India",
            score: "4"
        },
        {
            name: "Delhi",
            description: "Delhi, city and national capital, and union territory, north-central India. The city of Delhi actually consists of two components: Old Delhi, in the north, the historic city; and New Delhi, in the south, since 1947 the capital of India, built in the first part of the 20th century as the capital of British India.",
            imageName: "delhi.jpg",
            country: "India",
            score: "4.6"
        },
        {
            name: "Amritsar",
            description: "Amritsar, colloquially known as Ambarsar and historically known as Ramdaspur, is located in the Punjab state of India. It derives its name from Amrit Sarovar which was built by Guru Ram Das in the village of Tung. Guru Ram Das believed that the waters of the lake had healing powers. Amritsar is the largest and most important city in Punjab and is a major commercial, cultural, and transportation centre. It is also the centre of Sikhism and the site of the Sikhs’ principal place of worship",
            imageName: "amritsar.jpg",
            country: "India",
            score: "4.9"
        },
        {
            name: "Milad Tower",
            description: "The Milad Tower is a multi-purpose tower in Tehran, Iran. It is the sixth-tallest tower and the world's first telecommunication tower in terms of the usage area of the top structure and the tallest tower in Iran and the 24th-tallest freestanding structure in the world. The construction of this tower took about 11 years and 7 months",
            imageName: "milad-tower.jpg",
            country: "Iran",
            score: "5"
        },
        {
            name: "Greenest City",
            description: "Nicknamed the City in a Garden, Singapore's notoriety as the World's Greenest City is no surprise. Parks such as the Bukit Timah Nature Reserve, the Botanic Gardens and the newer Gardens by the Bay super park are home to around 400,000 plants.",
            imageName: "greenest-city-singapore.jpg",
            country: "Singapore",
            score: "5"
        },
    ]

    function onSwiper (data) {
        swiperProps.value = data
    }
</script>
