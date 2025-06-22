<template>
  <form class="flex flex-col items-center justify-center gap-6 p-6 max-w-md mx-auto">
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-2xl font-bold">Reset your password</h1>
      <p class="text-balance text-sm text-gray-500">
        Enter your email address and we will send you a verification code
      </p>
    </div>
    <div class="grid gap-6 w-full">
      <div class="grid gap-2">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-gray-900 placeholder-gray-400 shadow-sm"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition-colors"
      >
        Send reset instructions
      </button>
      <div class="text-center text-sm">
        Remember your password?
        <RouterLink
          to="/auth/login"
          class="underline underline-offset-4 text-blue-600 hover:text-blue-700"
        >
          Back to login
        </RouterLink>
      </div>
    </div>
  </form>
</template>
