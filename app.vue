<template>
  <Headers />

  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-6 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">こんらむ～</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">ﾊﾞﾚﾝﾀｲﾝ ﾎﾞｲｽ ｵｽｽﾒ</p>
      </div>
      <div class="lg:w-2/3 md:w-7/8 mx-auto">
        <div class="flex flex-wrap -m-2">

          <NuxtPage />

          <AboutThisPage/>
        </div>
      </div>
    </div>
  </section>

  <Footers />
</template>
