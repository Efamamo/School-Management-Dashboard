<div class="border-b min-h-16 w-full items-center px-8 flex justify-between">
    <div class="flex gap-4 items-center">
        <div class="hamburger-icon cursor-pointer">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>

        <div class="bg-gray-200 px-3 py-2 rounded-md">
            <input type="text" placeholder="Search" class="text-gray-500 backdrop:focus:border-none focus:outline-none bg-gray-200">
            <i class="fas fa-search text-gray-500 text-sm "></i>
        </div>
    </div>

    <div class="cursor-pointer">
        <i class="fas fa-user text-gray-500 text-xl "></i>
    </div>
</div>

<style>
    .hamburger-icon {
      width: 20px;
      height: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    .bar {
      height: 2px;
      background-color: #333;
      border-radius: 5px;
    }
  </style>
  