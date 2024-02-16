<template>
    <TemplateSectionT :title="'From our blog'">
        <div class="space-y-8">
            <!-- card -->
            <div class="flex gap-16 max-md:flex-col max-md:items-center max-md:gap-4" v-for="item in 3">
                <!-- blog image -->
                <img src="~/assets/images/beach3.jpg" class="w-[500px] h-[250px] rounded-2xl max-sm:w-[350px]" />

                <!-- blog information -->
                <div class="w-[400px] space-y-10 max-md:space-y-4 max-md:max-w-[500px] max-sm:w-[350px] max-sm:text-center">
                    <h2 class="text-lg font-gilroy-bold max-sm:text-[16px]">
                        Sailing the seven seas: amazing yacht adventures around the world
                    </h2>
                    <p class="text-[13px] opacity-40 max-sm:text-[11px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem maiores numquam excepturi, atque est sunt officiis quae tempora facere sapiente.
                    </p>
                    <div class="flex items-center gap-4 max-sm:justify-center">
                        <!-- profile -->
                        <div class="flex items-center gap-2">
                            <!-- avatar -->
                            <img src="~/assets/images/avatar.png" class="w-[25px] h-[25px]" >
                            <!-- name -->
                            <span class="text-[13px]"> James Band </span>
                        </div>
                        <!-- dot between -->
                        <span> <img src="~/assets/icons/dot.png" class="w-[10px] h-[10px]" /> </span>
                        <!-- date -->
                        <span class="text-[13px] font-gilroy-bold"> 14 Mar, 2021 </span>
                    </div>
                </div>
            </div>
        </div>
    </TemplateSectionT>
</template>
