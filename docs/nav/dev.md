---
description: 前端开发常用开发工具库
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup lang="ts">
import { NAV_DATA } from './devData'
</script>
<style src="./index.scss"></style>

# 常用开发工具库

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
