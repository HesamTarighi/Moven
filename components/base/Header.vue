<template>
    <header class="border-b-2 border-base/20 py-4 flex justify-center text-white">
        <div class="w-2xl flex items-center justify-between max-2xl:w-xl max-xl:w-lg max-lg:w-full max-lg:px-12 max-sm:px-6">
            <div class="flex items-center gap-4">
                <!-- Hamburger menu -->
                <button class="btn btn-primary px-3 py-3 md:hidden">
                    <label for="my-drawer" class="drawer-button cursor-pointer"> <Icon iconType="ios-filled" iconName="menu" iconSize="18" iconColor="ffffff" /> </label>
                </button>
                <!-- site logo -->
                <a href="/">
                    <img src="/logo2.png" class="h-[50px] max-lg:h-[40px]" />
                </a>
            </div>
            <nav class="max-md:hidden">
                <ul class="flex gap-12 max-lg:gap-6 max-lg:text-[14px]">
                    <li v-for="link in links">
                        <a :href="link.href"> {{ link.label }} </a>
                    </li>
                </ul>
            </nav>
            <div>
                <button class="btn btn-primary max-lg:btn-md max-sm:btn-sm"> Sign up </button>
            </div>
        </div>
    </header>
</template>

<script setup>
    const links = [
        { label: 'Location', href: '/' },
        { label: 'Discover', href: '/' },
        { label: 'Bookings', href: '/' },
        { label: 'Activities', href: '/' },
        { label: 'About us', href: '/' },
        { label: 'Contact', href: '/' },
    ]
</script>
