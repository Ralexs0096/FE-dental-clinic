<template>
  <div class="grid min-h-svh lg:grid-cols-2">
    <div class="flex flex-col gap-4 p-6 md:p-10 border">
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <router-view />
        </div>
      </div>
    </div>
    <div class="relative hidden bg-muted lg:block">
      <div class="absolute inset-0">
        <img
          src="@/assets/images/dentora-login-screen.png"
          alt="Authentication Background"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
