<template>
    <div class="relative w-max">
        <template v-if="layoutType === 'icon'">
            <button
                @click="saveToClipboard"
                title="Click to Copy"
                class="hover:opacity-70 transition-opacity"
            >
                <icon-mail size="28" />
            </button>
        </template>
        <template v-else>
            <div class="flex items-center border border-gray-300 pl-4 pr-3 py-1 rounded-full cursor-pointer gap-2">
                <div @click="saveToClipboard" class="flex items-center" >
                    <span class="font-semibold mr-2">
                        {{ email }}
                    </span>
                    <button>
                        <icon-copy size="20" />
                    </button>
                </div>
                <a :href="`mailto:${email}`">
                    <icon-send size="20" />
                </a>
            </div>
        </template>
        <!-- TODO: Make this a separate component -->
        <!-- copied popup -->
        <div
            ref="popup"
            class="
                absolute
                opacity-0
                z-negative
                text-sm
                w-max
                bg-gray-800
                bg-opacity-90
                px-2
                py-1
                rounded-md
                -top-1
                left-1/2
                transform-gpu
                -translate-x-1/2
                transition-all
                select-none
            ">
            <span>Email Copied to Clipboard ;)</span>
            <div class="popup-marker"></div>
        </div>
    </div>
</template>

<script setup>
import { IconMail, IconCopy, IconSend } from '@tabler/icons-vue';
import { ref } from 'vue'
import contact from '@/data/contact'

const props = defineProps({
    layoutType: {
        type: String,
        default: 'base',
        validator: (value) => ['icon', 'base'].includes(value),
    },

})

const email = contact.email

const popup = ref(null)

const saveToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
        showCopiedPopup()
    })
    .catch((err) => {
        console.error('Failed to copy email to clipboard', err)
    })
}

const showCopiedPopup = () => {
    popup.value.classList.add('show')
    setTimeout(() => {
        popup.value.classList.remove('show')
    }, 2000)
}
</script>

<style lang="postcss" scoped>
.show {
    @apply -top-6 z-10;
    opacity: 1;
    visibility: visible;
}
.popup-marker {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(31, 41, 55, var(--tw-border-opacity));
}
</style>