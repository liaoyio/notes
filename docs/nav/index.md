---
description: 前端导航
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup lang="ts">
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
