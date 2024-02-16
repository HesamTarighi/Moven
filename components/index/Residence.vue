<template>
    <TemplateContainerT class="bg-secondary py-16" :title="'Top hotels for you'">
        <div class="relative">
            <button class="px-[10px] py-[10px] border border-primary/20 rounded-full z-50 absolute center-y left-[75px] max-sm:bg-black max-sm:left-1" @click="swiperProps.slidePrev()">
                <Icon iconType="material-rounded" iconName="left" iconSize="20" iconColor="101010" class="max-sm:hidden" />
                <Icon iconType="material-rounded" iconName="left" iconSize="20" iconColor="ffffff" class="sm:hidden" />
            </button>
            <button class="px-[10px] py-[10px] border border-primary/20 rounded-full z-50 absolute center-y right-[75px] max-sm:bg-black max-sm:right-1" @click="swiperProps.slideNext()">
                <Icon iconType="material-rounded" iconName="right" iconSize="20" iconColor="101010" class="max-sm:hidden" />
                <Icon iconType="material-rounded" iconName="right" iconSize="20" iconColor="ffffff" class="sm:hidden" />
            </button>
            <Swiper
            :slidesPerView="'auto'"
            :spaceBetween="100"
            :centeredSlides="true"
            @swiper="onSwiper"
            >
                <SwiperSlide style="width: 450px;" v-for="item in hotels">
                    <div class="w-full bg-base rounded-xl card">
                        <div class="relative">
                            <!-- image -->
                            <img :src="`_nuxt/assets/images/hotels/${item.imageName}`" class="w-full h-[250px] rounded-xl" />
                            <!-- see more -->
                            <a :href="item.href"> <button class="btn btn-primary center opacity-0 see-more"> See more </button> </a>
                            <!-- score -->
                            <div class="bg-base rounded-full px-4 py-1 flex items-center gap-2 absolute top-4 right-4 text-[12px]"> <span> <Icon iconType="ios-filled" iconName="star" iconSize="13" iconColor="101010" /> </span> <span> {{ item.score }} </span> </div>
                        </div>
                        <div class="rounded-b-xl p-6 space-y-6">
                            <div class="text-center">
                                <div> {{ item.name }} - {{ item.city }} </div>
                                <div class="text-[14px] opacity-40"> ${{ item.price }} - {{ item.rooms }} rooms </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </TemplateContainerT>
</template>

<style scoped>
    .card:hover .see-more {
        @apply opacity-100;
    }

    @media screen and (max-width: 640px) {
        .swiper-slide {
            width: 350px !important;
        }
    }
</style>

<script setup>
    const swiperProps = ref({})
    const hotels = [
        {
            name: "Rosewood",
            city: "Hong Kong",
            href: "/",
            score: "5",
            rooms: "413",
            price: "650",
            imageName: "rosewood.jpg"
        },
        {
            name: "Aman",
            city: "Tokyo",
            href: "/",
            score: "4.7",
            rooms: "84",
            price: "1800",
            imageName: "aman-tokyo.jpg"
        },
        {
            name: "Nihi Sumba",
            city: "Sumba Island",
            href: "/",
            score: "5",
            rooms: "27",
            price: "1300",
            imageName: "sumba.jpg"
        },
        {
            name: "Four Seasons",
            city: "Madrid",
            href: "/",
            score: "4.9",
            rooms: "200",
            price: "1200",
            imageName: "madrid.jpg"
        },
        {
            name: "The Connaught",
            city: "London",
            href: "/",
            score: "5",
            rooms: "122",
            price: "1250",
            imageName: "london.jpg"
        },
        {
            name: "Aman",
            city: "New York City",
            href: "/",
            score: "5",
            rooms: "83",
            price: "1750",
            imageName: "aman-new-york.jpg"
        },
        {
            name: "Le Bristol",
            city: "Paris",
            href: "/",
            score: "5",
            rooms: "190",
            price: "3200",
            imageName: "paris.jpg"
        },
        {
            name: "Four Seasons Astir Palace",
            city: "Athens",
            href: "/",
            score: "4.8",
            rooms: "303",
            price: "550",
            imageName: "athens.jpg"
        },
        {
            name: "Cheval Blanc",
            city: "Paris",
            href: "/",
            score: "5",
            rooms: "72",
            price: "3000",
            imageName: "cheval.jpg"
        },
        {
            name: "Soneva Jani",
            city: "Maldives",
            href: "/",
            score: "5",
            rooms: "59",
            price: "2900",
            imageName: "maldives.jpg"
        },
        {
            name: "Atlantis The Royal",
            city: "Dubai",
            href: "/",
            score: "4.9",
            rooms: "795",
            price: "460",
            imageName: "dubai.jpg"
        },
    ]

    function onSwiper (data) {
        swiperProps.value = data
    }
</script>
