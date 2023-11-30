<script setup></script>

<template>
  <div class="w-full h-screen text-white">
    <div class="w-full h-24 text-center py-8 border-4 border-black bg-blue-950">1</div>
    <div class="w-full flex max-lg:flex-col">
      <div class="w-1/2 max-lg:w-full h-24 text-center py-10 border-4 border-black bg-blue-950">
        2
      </div>
      <div class="w-1/2 max-lg:w-full h-24 text-center py-10 border-4 border-black bg-blue-950">
        3
      </div>
    </div>
    <div class="w-full flex max-lg:flex-col">
      <div class="w-1/2 max-lg:w-full h-64 border-4 p-2 border-black bg-blue-950">
        <div class="w-full h-3/4 p-2 text-center border-4 border-black bg-blue-950">
          <div class="w-full h-full text-center border-4 pt-16 border-black bg-red-700">4</div>
        </div>
        <div class="w-full h-1/4 text-center flex">
          <div class="w-1/3 h-full border-4 border-black">5</div>
          <div class="w-1/3 h-full border-4 border-black">6</div>
          <div class="w-1/3 h-full border-4 border-black">7</div>
        </div>
      </div>
      <div class="w-1/2 max-lg:flex max-lg:w-full h-64 p-4 bg-blue-950">
        <div class="w-full h-1/4 max-lg:h-3/4 text-center pt-1 border-4 border-black bg-red-700">
          8
        </div>
        <div class="w-full h-1/4 max-lg:h-3/4 text-center pt-1 border-4 border-black bg-red-700">
          9
        </div>
        <div class="w-full h-1/4 max-lg:h-3/4 text-center pt-1 border-4 border-black bg-red-700">
          10
        </div>
      </div>
    </div>
    <div class="w-full h-64 flex max-lg:invisible">
      <div class="w-2/3 h-full relative border-4 border-black bg-blue-950">
        <div class="w-24 h-16 absolute bg-red-700"></div>
        <div class="w-24 h-40 left-12 top-8 absolute bg-white"></div>
        <div class="w-24 h-16 absolute left-32 bottom-0 bg-red-700"></div>
      </div>
      <div class="w-1/3 relative border-4 border-black h-full">
        <div class="w-24 h-16 absolute left-[-32px] bg-red-700"></div>
        <div class="w-24 h-16 absolute left-16 bottom-0 bg-red-700"></div>
        <div class="w-24 h-16 absolute top-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-16 h-16">
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="text-black">FIGHTING!</p>
        </div>
      </div>
    </div>
  </div>
</template>
