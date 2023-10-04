<script setup lang="ts">
import { useComponentStore } from '~/store/componentStore'
import { useBreakpoint } from "vuestic-ui";

const breakpoint = useBreakpoint();

// function sidebarState() {

//     console.log("function is running")
//     console.log("current breakpoint", breakpoint.current)

//     if (breakpoint.current === 'sm' || breakpoint.current === 'xs') {
//         if (showSidebar.value && !sidebarMinimised.value)
//             sidebarMinimised.value = !sidebarMinimised.value
//     }

//     return true
// };

const componentStore = useComponentStore()
const { showSidebar, sidebarMinimised } = storeToRefs(componentStore)

const shouldCollapseSidebar = computed(() => {
    return breakpoint.current === 'sm' || breakpoint.current === 'xs';
});

watch(sidebarMinimised, () => {
    if (showSidebar.value && !sidebarMinimised.value) {
        sidebarMinimised.value = !sidebarMinimised.value
    }
    return sidebarMinimised
});

// const shouldCollapseSidebar = computed(() => {
//     if (breakpoint.current === 'xs' || breakpoint.current === 'sm') {
//         if (showSidebar.value && !sidebarMinimised.value)
//             sidebarMinimised.value = !sidebarMinimised.value
//     }

//     return sidebarMinimised.value
// });

</script>

<template>
    <div class="flex">
        <div class="h-screen">
            <va-sidebar v-model="showSidebar" :minimized="shouldCollapseSidebar" width="14rem" minimized-width="64px">
                <va-sidebar-item>
                    <va-sidebar-item-content>
                        <va-icon name="dashboard" />
                        <va-sidebar-item-title>
                            Dashboard
                        </va-sidebar-item-title>
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </va-sidebar>
        </div>
        <div>{{ breakpoint.current }}</div>
        <!-- <div class="py-2 mt-2 rounded-lg rounded-l-none bg-gray-300 h-fit" @click="sidebarMinimised = !sidebarMinimised">
            <va-icon :name="sidebarMinimised ? 'chevron_right' : 'chevron_left'" size="2rem" />
        </div> -->
    </div>
</template>