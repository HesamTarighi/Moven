<template>
    <TemplateSectionT>
        <div class="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
            <div class="w-full grid grid-cols-3 max-sm:grid-cols-2">
                <!-- address -->
                <Vinput type="text" placeholder="City or address" name="address" class="w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px] max-md:text-sm max-md:px-1">
                    <template #label>
                        <Icon iconType="glyph-neue" iconName="marker" iconSize="18" iconColor="101010" />
                    </template>
                </Vinput>
                <!-- date picker -->
                <VueDatePicker range v-model="date">
                    <template #trigger>
                        <Vinput type="button" :value="date == '' ? 'Add dates' : `${new Date(date[0]).toLocaleDateString('en-US')} - ${new Date(date[1]).toLocaleDateString('en-US')}`" class="w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px] max-md:text-sm max-md:px-1" :cursor="'pointer'">
                            <template #label>
                                <Icon iconType="material-rounded" iconName="calendar" iconSize="18" iconColor="101010" />
                            </template>
                        </Vinput>
                    </template>
                </VueDatePicker>
                <!-- landscape type -->
                <VinputMenu :items="landscapeTypes" @onSelect="onSelectLandscapeType">
                    <template v-slot:selectButton="{ toggleMenu }">
                        <Vinput type="button" :value="landscapeType == '' ? 'Landscape type' : landscapeType.name" class="w-[300px] max-xl:w-[250px] max-lg:w-[200px] max-md:w-[150px] max-md:text-sm max-md:px-1" cursor="pointer" @click="toggleMenu">
                            <template #label>
                                <IndexSearchCheckLandscapeTypeIcon :type="landscapeType.type" v-if="landscapeType != ''" />
                                <Icon iconType="material-rounded" iconName="sun" iconSize="18" iconColor="101010" class="max-md:hidden" v-else />
                            </template>
                            <template #label2>
                                <Icon iconType="ios-filled" iconName="expand-arrow" iconSize="18" iconColor="101010" class="max-md:hidden" />
                            </template>
                        </Vinput>
                    </template>
                    <template v-slot:item="{ item }">
                        <!-- landscape type name -->
                        <span> {{ item.name }} </span>
                        <!-- lanscape type icon -->
                        <IndexSearchCheckLandscapeTypeIcon :type="item.type" />
                    </template>
                </VinputMenu>
            </div>
            <!-- search button -->
            <div>
                <button class="btn btn-primary px-[20px] py-[20px] max-lg:px-[15px] max-lg:py-[15px] max-md:px-[10px] max-md:py-[10px] max-sm:hidden"> <Icon iconType="glyph-neue" iconName="search" iconSize="25" iconColor="ffffff" /> </button>
                <button class="btn btn-primary flex gap-2 sm:hidden"> Search </button>
            </div>
        </div>
    </TemplateSectionT>
</template>

<script setup>
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    const date = ref('')
    const landscapeTypes = [
        {
            name: 'Tropical',
            type: 'rainy',
        },
        {
            name: 'Woodland',
            type: 'sunny',
        },
        {
            name: 'Prairie',
            type: 'sunny',

        },
        {
            name: 'Desert',
            type: 'rainy',

        },
        {
            name: 'English Garden',
            type: 'rainy',

        },
        {
            name: 'Japanese Garden',
            type: 'cloudy',
        },
        {
            name: 'Tuscan',
            type: 'rainy',
        },
        {
            name: 'French',
            type: 'clean-air',
        },
        {
            name: 'Spanish',
            type: 'rainy',
        }
    ]
    const landscapeType = ref('')

    function onSelectLandscapeType (item, handler) {
        console.log(date.value)
        landscapeType.value = item
        handler()
    }
</script>
