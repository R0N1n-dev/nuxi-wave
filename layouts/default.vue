<template>
  <div id="app" class="row">
    <aside>Nav menu</aside>
    <w-flex column>
      <header>Header</header>
      <main class="grow">Main content</main>
      <footer>Footer</footer>
    </w-flex>
  </div>
</template>

<style scoped>
.w-app {
  padding: 4px;
  background-color: #fffeed;
}
header,
footer,
main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
header,
footer {
  background-color: #e9f8fe;
  min-height: 60px;
}
aside {
  background-color: #fef2ff;
}
main {
  background-color: #efffed;
}
</style>