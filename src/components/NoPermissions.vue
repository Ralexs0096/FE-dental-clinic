<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold text-black mb-4">403 - Forbidden</h1>
      <p class="text-gray-700 text-lg mb-6">You don't have permission to access this page.</p>
      <RouterLink
        to="/"
        replace
        class="inline-block px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
      >
        Go to Appointments
      </RouterLink>
    </div>
  </div>
</template>
