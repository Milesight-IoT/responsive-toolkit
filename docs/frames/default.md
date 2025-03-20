---
layout: false
---

<script setup>
import { ref, onMounted } from 'vue';
import { createApp } from 'whyframe:app';
import '@milesight/responsive-style';
import { trackColorScheme } from './utils';

const el = ref();

onMounted(() => {
  trackColorScheme();
  createApp(el.value);
})
</script>

<!-- empty file to keep vitepress happy. see FrameDefaultLayout.vue -->
<div id="vp-app" class="frame-default" ref="el"></div>

<style lang="scss" scoped>
.frame-default {
  position: relative;
}

.frame-default :deep() {
  /**********  Atomic class **********/
  .border-soft {
    border: 1px solid var(--vp-c-divider);
  }

  .border-brand {
    border: 1px solid var(--vp-c-brand-3);
  }

  .bg-soft {
    background-color: var(--vp-c-brand-soft);
  }

  .bg-gray {
    background-color: var(--vp-c-gray-soft);
  }

  .rounded-soft {
    border-radius: 0.25rem;
  }

  /**********  Demo Block **********/
  .demo-columns {
    [class*="col"] {
      border: 1px solid var(--vp-c-brand-3);
      background-color: var(--vp-c-brand-soft);
    }
  }

  .demo-grid {
    > div,
    [class*="g-col"] {
      border: 1px solid var(--vp-c-brand-3);
      background-color: var(--vp-c-brand-soft);
    }
  }
}
</style>
