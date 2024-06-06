<template>
  <div>
    {{ dateState }}
  </div>
</template>

<script setup lang="ts">
const dateState = useState("date", () => new Date());
</script>

<style scoped></style>
