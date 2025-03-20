<script setup lang="ts">
import { codeToHtml } from 'shiki';
import { useData } from 'vitepress';
import { getWhyframeSource } from '@whyframe/core/utils';
import { computed, ref, useTemplateRef, watch } from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import { useElementSize, useFullscreen } from '@vueuse/core';

import IconCode from '../icons/Code.vue';
import IconCopy from '../icons/Copy.vue';
import IconCheck from '../icons/Check.vue';
import { copyText } from '../../utils/copy';
import IconFullscreen from '../icons/Fullscreen.vue';
import IconFullscreenExit from '../icons/FullscreenExit.vue';
import {
    CODE_FRAME_DEFAULT_HEIGHT,
    CODE_FRAME_DEFAULT_WIDTH,
    CODE_FRAME_MIN_WIDTH,
    CODE_THEMES,
    TOOLBAR_HEIGHT,
} from './constants';

import 'vue-draggable-resizable/style.css';

defineProps({
    title: {
        type: String,
        default: '',
    },
    lang: {
        type: String,
        default: 'html',
    },
    type: {
        type: String,
        default: 'responsive',
    },
    src: {
        type: String,
        default: '/frames/default.html',
    },
});

// ---------- Render code source ----------
const { isDark } = useData();
const iframe = ref();
const codeHtml = ref('');
const showCode = ref(false);

const source = computed(() => {
    return iframe.value ? getWhyframeSource(iframe.value) : undefined;
});
const codeTheme = computed(() => (isDark.value ? CODE_THEMES.dark : CODE_THEMES.light));

watch([source, codeTheme], async ([val, theme]) => {
    if (!val) return;
    const html = await codeToHtml(val, {
        lang: 'html',
        theme,
    });
    codeHtml.value = html;
});

// ---------- Copy code source ----------
const copyStatus = ref<boolean | undefined>();
const handleCopy = async () => {
    if (!source.value || copyStatus.value !== undefined) return;
    const result = await copyText(source.value);
    copyStatus.value = !!result;

    setTimeout(() => {
        copyStatus.value = undefined;
    }, 2000);
};

// ---------- Fullscreen ----------
const mainEle = useTemplateRef<HTMLElement>('main');
const { isFullscreen, toggle } = useFullscreen(mainEle);

// ---------- Resize ----------
const { width: containerWidth, height: containerHeight } = useElementSize(mainEle);
const frameSize = ref({ width: CODE_FRAME_DEFAULT_WIDTH, height: CODE_FRAME_DEFAULT_HEIGHT });
const handleResize = (...$event) => {
    frameSize.value = { width: $event[2], height: $event[3] };
};

watch([containerWidth, containerHeight, isFullscreen], ([width, height, isFullscreen]) => {
    frameSize.value = {
        width: Math.round(width * 0.9) || CODE_FRAME_DEFAULT_WIDTH,
        height: (!isFullscreen || !height) ? 150 : height - TOOLBAR_HEIGHT,
    };
});
</script>

<template>
    <div class="story">
        <div ref="main" class="story-main" :class="[{ fullscreen: isFullscreen }]">
            <VueDraggableResizable
                class="story-frame"
                :draggable="false"
                :handles="['mr']"
                :w="frameSize.width"
                :h="frameSize.height"
                :min-width="
                    containerWidth < CODE_FRAME_MIN_WIDTH
                        ? Math.round(containerWidth * 0.8)
                        : CODE_FRAME_MIN_WIDTH
                "
                :max-width="containerWidth"
                @resizing="handleResize"
                @resize-stop="handleResize"
            >
                <span class="story-frame-size-mark">
                    {{ frameSize.width }} x {{ frameSize.height }}
                </span>
                <iframe
                    ref="iframe"
                    data-why
                    class="story-iframe"
                    :title="title"
                    :src="src"
                >
                    <slot />
                </iframe>
            </VueDraggableResizable>

            <div class="story-toolbar">
                <h5 class="story-title">
                    {{ title }}
                </h5>
                <div class="story-btns">
                    <button
                        v-if="!isFullscreen"
                        :class="{ active: showCode }"
                        @click="showCode = !showCode"
                    >
                        <IconCode />
                    </button>
                    <button v-if="!isFullscreen" :class="{ success: copyStatus }" @click="handleCopy">
                        <IconCheck v-if="copyStatus === true" />
                        <IconCopy v-else />
                    </button>
                    <button :class="{ active: isFullscreen }" @click="toggle">
                        <IconFullscreen v-if="!isFullscreen" />
                        <IconFullscreenExit v-else />
                    </button>
                </div>
            </div>
        </div>

        <div v-if="showCode" class="story-code">
            <div v-html="codeHtml" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.story {
    border: 1px solid var(--vp-c-divider);
    border-radius: 0.5rem;
    overflow: hidden;

    + .story {
        margin-top: 1rem;
    }

    &-main {
        position: relative;
        color: rgb(0 0 0 / 1%);
        background: repeating-linear-gradient(
            135deg,
            transparent 0px,
            transparent 32px,
            currentColor 32px,
            currentColor 64px
        );
        background-color: #f4f4f5;

        &.fullscreen {
            display: flex;
            flex-direction: column;

            .story-frame {
                flex: 1;
            }
        }

        &:hover {
            .story-frame-size-mark {
                display: block;
            }

            :deep(.handle) {
                display: block !important;
                z-index: 1;
            }
        }
    }

    &-frame {
        position: relative;
        height: 150px;
        border: none;
        background-color: var(--vp-c-bg);
        overflow: hidden;

        &.resizing {
            &::after {
                position: absolute;
                inset: 0;
                content: '';
            }

            .story-frame-size-mark {
                display: block;
            }

            :deep(.handle) {
                display: block !important;
                color: var(--vp-c-brand-2) !important;
            }
        }

        &-size-mark {
            position: absolute;
            display: none;
            bottom: 0;
            right: 0;
            padding: 0.25rem;
            font-size: 12px;
            line-height: 1;
            background-color: rgba(0, 0, 0, 0.3);
            color: #fff;
            z-index: 2;
        }

        :deep() {
            .handle {
                color: var(--vp-c-gray-1);

                &:hover {
                    color: var(--vp-c-brand-3);
                }

                &-mr {
                    right: 0;
                    height: 12px;
                    border: none;
                    background: transparent;

                    &::before {
                        content: '';
                        position: absolute;
                        border-left: 2px solid currentColor;
                        height: 100%;
                        top: 0;
                        left: 1px;
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        border-left: 2px solid currentColor;
                        height: 100%;
                        top: 0;
                        right: 3px;
                    }
                }

                &-bm {
                    bottom: 0;
                }
            }
        }
    }

    &-iframe {
        display: block;
        margin: 0;
        border: 0;
        border-radius: 0;
        width: 100%;
        height: 100%;
    }

    &-toolbar {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid var(--vp-c-divider);
        align-items: center;
        color: var(--vp-code-tab-text-color);
        background-color: var(--vp-code-block-bg);
        overflow: hidden;
    }

    &-title {
        border: 0;
        padding: 0;
        margin: 0;
        padding: 0 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
    }

    &-btns {
        display: flex;

        button {
            margin: 0;
            padding: 0.5rem;
            background-color: transparent;
            // color: #efefef;
            font-size: 0.9rem;
            border: 0;
            cursor: pointer;
            transition: background-color 0.2s;

            &.active {
                background-color: var(--vp-c-default-soft);
            }

            &.success {
                color: var(--vp-c-success-3);
            }
        }

        button:hover,
        button[aria-pressed='true'] {
            background-color: var(--vp-c-default-2);
        }
    }

    &-code {
        padding: 0 1.5rem;
        border-top: 1px solid var(--vp-c-divider);
        background-color: var(--vp-code-block-bg);
        overflow: auto;
        text-align: left;
        font-size: var(--vp-code-font-size);

        :deep(pre.shiki) {
            background-color: transparent !important;
        }
    }
}
</style>

<style lang="scss">
.dark {
    .story-main {
        color: black;
        background-color: #1d2129;
    }
    .story-frame {
        .handle {
            color: var(--vp-c-brand-3) !important;
        }
    }
}
</style>
