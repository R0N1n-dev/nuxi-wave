<template>
  <!--<w-flex>
    <aside>
      <div>HI</div>
      <i class="bx bxs-home"></i>
      <i class="bx bxs-home"></i>
    </aside>
    <w-flex column>
      <header>Header</header>
      <main class="grow">
        <p>Main content</p>
        <slot />
      </main>
      <footer>Footer</footer>
    </w-flex>
  </w-flex>-->
  <w-flex>
    <w-toolbar vertical>
      <!-- <w-icon color="primary" size="2.2em">wi-wave</w-icon>-->
      <w-button route="/" text lg class="pa4">
        <i class="bx bxs-home"></i>
      </w-button>
      <w-button route="/about" text lg class="pa4">
        <i class="bx bxs-lock"></i>
      </w-button>
      <!-- You could also add a .spacer before & after instead of the `mya` class. -->
      <w-divider class="mya"></w-divider>

      <w-button
        route="https://antoniandre.github.io/wave-ui/"
        target="_blank"
        text
        lg
        class="pa4"
      >
        <i class="bx bx-water"></i>
      </w-button>
      <w-button route="https://vuejs.org/" target="_blank" text lg class="pa4">
        <i class="bx bxl-vuejs"></i>
      </w-button>
    </w-toolbar>

    <!--<w-flex align-center justify-center>
      Some content.
    </w-flex>-->
    <w-flex column>
      <header>Header</header>
      <main class="grow">
        <slot />
      </main>
      <footer>Footer</footer>
    </w-flex>
  </w-flex>
</template>

<style scoped>
.w-toolbar {
  height: 100vh;
}

.w-app {
  padding: 4px;
  background-color: #fffeed;
}

header,
footer,
main {
  margin: 4px;
  padding: 12px;
  color: #666;
}

header,
footer {
  background-color: #e9f8fe;
  min-height: 60px;
}

aside {
  background-color: #fef2ff;
  height: 100vh;
  min-width: 3rem;
}

main {
  background-color: #eaf5e8;
}
</style>
