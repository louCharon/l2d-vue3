import {computed} from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

export const clientH = computed(() => {
    return height.value
})
export const clientW = computed(() => {
    return width.value
})