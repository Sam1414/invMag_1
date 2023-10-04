
<script setup lang="ts">
import { ref } from 'vue';

const showSidebar = ref(true)

// const breakpoints = useBreakpoint()
</script>

<template>
    <div>
        <VaLayout style="height: 500px">
            <NavBar />
            <div class="w-10 h-screen">
                <SideBar />
            </div>
            <template #content>
                <div class="p-0.5">
                    <slot />
                </div>
            </template>
        </VaLayout>
    </div>
</template>