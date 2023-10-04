import { defineStore } from 'pinia'

export const useComponentStore = defineStore('componentStore', () => {
    // Sidebar States => 0. Hidden, 1. Visible, 2. Minimised
    const sidebarState = ref(1)
    const showSidebar = ref(true)
    const sidebarMinimised = ref(false)
    const userTriggered = ref(false)

    function toggleSidebarState() {
        userTriggered.value = true

        sidebarState.value = (sidebarState.value + 1) % 3

        if (sidebarState.value === 0) {
            showSidebar.value = false
            sidebarMinimised.value = false
        } else if (sidebarState.value === 1) {
            showSidebar.value = true
            sidebarMinimised.value = false
        } else if (sidebarState.value === 2) {
            showSidebar.value = true
            sidebarMinimised.value = true
        }
    }

    return { showSidebar, sidebarMinimised, userTriggered, toggleSidebarState }
})