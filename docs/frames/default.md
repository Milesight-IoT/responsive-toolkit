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

<!-- empty file to keep vitepress happy. -->
<div id="vp-app" class="frame-default" ref="el"></div>

<style lang="scss" scoped>
.frame-default {
  position: relative;
}

.frame-default :deep() {
  /**********  Atomic classes **********/
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
  @mixin demo-block {
    border: 1px solid var(--vp-c-brand-3);
    background-color: var(--vp-c-brand-soft);
  }

  .demo-bps > div,
  .demo-columns [class*="col"],
  .demo-grid > div,
  .demo-grid [class*="g-col"],
  .demo-gutters [class^="col"] > div,
  .demo-gutters-tight [class*="col-"],
  .demo-display > div,
  .demo-flex > div,
  .demo-flex-nest > div > div {
    @include demo-block;
  }
}
</style>
