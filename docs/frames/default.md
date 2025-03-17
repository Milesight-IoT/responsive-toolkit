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

<style>
.frame-default {
  position: relative;
  padding: 1.25rem;
}

.frame-default [class*="col"] {
  border: 1px solid #ccc;
}
</style>
