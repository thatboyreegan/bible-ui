<template>
  <div
    class="min-h-dvh bg-white dark:bg-gray-900 text-black dark:text-white bg-no-repeat default-font text-xl"
  >
    <Navbar />
    <UContainer>
      <slot class="flex-1" />
    </UContainer>

    <UNotifications />
  </div>
</template>

<style>
.default-font {
  font-family: "Crymson Pro", "Josefin Sans", sans-serif;
}
</style>
