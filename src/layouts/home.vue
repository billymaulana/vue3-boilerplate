<template>
  <Suspense>
    <template #fallback>
      <div>
        <Loading />
      </div>
    </template>
    <template #default>
      <main>
        <router-view />
      </main>
    </template>
  </Suspense>
</template>
