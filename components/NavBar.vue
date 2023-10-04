<script setup lang="ts">
import { useComponentStore } from '~/store/componentStore'
const componentStore = useComponentStore()
const { showSidebar } = storeToRefs(componentStore)
const { toggleSidebarState } = componentStore
</script>

<template>
    <va-navbar class=" bg-cyan-950 overflow-hidden">
        <template #left>
            <VaButton @click="toggleSidebarState" :icon="showSidebar ? 'menu_open' : 'menu'" />
            <va-navbar-item class="p-1">
                LOGO
            </va-navbar-item>
        </template>
        <template #right>
            <va-navbar-item>Dashboard</va-navbar-item>
            <va-navbar-item class="hidden sm:block">Reports</va-navbar-item>
            <va-navbar-item>Users</va-navbar-item>
        </template>
    </va-navbar>
</template>