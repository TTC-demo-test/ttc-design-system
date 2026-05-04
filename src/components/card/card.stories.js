export default {
  title: 'Components/Card'
};

export const ProgramCard = () => `
  <article class="bg-brand-secondary card">
    <p class="text-sm">Health Sciences</p>
    <h3 class="text-xl font-bold">Nursing, ADN</h3>
    <p class="mt-2">
      Prepare for licensure and hands-on clinical experience with a pathway toward a rewarding healthcare career.
    </p>
    <div class="mt-4">
      <a href="#" class="ds-button ds-button--primary">Explore program</a>
    </div>
  </article>
`;

export const SunsetCard = () => `
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://images.unsplash.com/photo-1770752986377-1982c76424e8?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
`

export const SunriseCard = () => `
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfHx8MA%3D%3D" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Warmest Sunrise</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
  `

export const PhotoGridx2 = () => `
  <div class="mx-auto my-4 max-w-6xl px-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      
      <div>
        <img 
          src="https://www.tridenttech.edu/_media/images/aboutUs/departments/hr/devon.jpg" 
          alt="this is devon, he is someone at ttc"
          class="w-full h-auto object-cover"
        >
      </div>

      <div>
        <img 
          src="https://www.tridenttech.edu/_media/images/aboutUs/departments/hr/sherell.jpg" 
          alt="this is sherell, she is someone at ttc"
          class="w-full h-auto object-cover"
        >
      </div>

    </div>
  </div>
`

export const PhotoGridx4 = () => `
  <div class="mx-auto my-4 max-w-6xl px-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      
      <div>
        <img 
          src="https://www.tridenttech.edu/_media/images/aboutUs/departments/hr/devon.jpg" 
          alt="this is devon, he is someone at ttc"
          class="w-full h-auto object-cover"
        >
      </div>

      <div>
        <img 
          src="https://www.tridenttech.edu/_media/images/aboutUs/departments/hr/sherell.jpg" 
          alt="this is sherell, she is someone at ttc"
          class="w-full h-auto object-cover"
        >
      </div>

      <div>
        <img 
          src="https://www.tridenttech.edu/_media/images/aboutUs/departments/hr/devon.jpg" 
          alt="this is devon, he is someone at ttc"
          class="w-full h-auto object-cover"
        >
      </div>

      <div>
        <img 
          src="https://www.tridenttech.edu/_media/images/aboutUs/departments/hr/sherell.jpg" 
          alt="this is sherell, she is someone at ttc"
          class="w-full h-auto object-cover"
        >
      </div>

    </div>
  </div>
`

export const HighlightCard = () => `
  <div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12">
      <div class="md:col-span-5">
        <img
          src="https://www.tridenttech.edu/_media/images/admissions/nationFlags.jpg"
          class="h-full w-full object-cover"
          alt="International Flags"
        />
      </div>

      <div class="flex items-center md:col-span-7 bg-grey">
        <div class="p-6">
          <h3 class="text-2xl font-bold text-gray-900">
            Flags among us!
          </h3>

          <p class="mt-3 text-base leading-7 text-gray-700">
            This is all about how flags signal things and help us identify things. Flags are
            great, flags are wavy and fun, and finally, flags are colorful and are our companions
            in times of protest or marching.
          </p>

          <a
            href="https://www.tridenttech.edu"
            class="mt-5 inline-flex items-center rounded-md bg-brand-primary px-4 py-2 font-semibold text-white no-underline hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
          >
            Flag It!
          </a>
        </div>
      </div>
    </div>
  </div>
`

export const DefaultCard = () => `
  <a href="#" class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-md shadow-xs hover:bg-neutral-secondary-medium">
      <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5>
      <p class="text-body">Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.</p>
  </a>=
`

export const CardWithButton = () => `
  <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-md shadow-xs">
      <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Noteworthy technology acquisitions 2021</h5>
      <p class="text-body mb-6">Here are the biggest technology acquisitions of 2025 so far, in reverse chronological order.</p>
      <a href="#" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
          Read more
          <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </a>
  </div>
`
export const CardWithLink = () => `
  <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-md shadow-xs">
      <svg class="w-7 h-7 mb-3 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"/></svg>
      <a href="#">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-heading">Need a help in Claim?</h5>
      </a>
      <p class="mb-3 text-body">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
      <a href="#" class="inline-flex font-medium items-center text-fg-brand hover:underline">
          See our guideline
          <svg class="w-4 h-4 ms-2 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/></svg>
      </a>
  </div>
`

export const CardWithImage = () => `
<div class="bg-neutral-primary-soft block max-w-sm border border-default rounded-md shadow-xs">
    <a href="#">
        <img class="rounded-t-base" src="https://images.unsplash.com/photo-1772289935157-f64bc178b47d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </a>
    <div class="p-6 text-center">
        <span class="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
            <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/></svg>
            Trending
        </span>
        <a href="#">
            <h5 class="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">Streamlining your design process today.</h5>
        </a>
        <a href="#" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
            Read more
            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
        </a>
    </div>
</div>
`
export const CardWithDescription = () => `
  <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-md shadow-xs">
      <a href="#">
          <img class="rounded-md" src="https://images.unsplash.com/photo-1655905422592-67e618f6265f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </a>
      <a href="#">
          <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Streamlining your design process today.</h5>
      </a>
      <p class="mb-6 text-body">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
      <a href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
          Read more
          <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </a>
  </div>
`
export const HorizontalCard = () => `
  <a href="#" class="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-md shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl">
      <img class="object-cover w-full rounded-md h-64 md:h-auto md:w-48 mb-4 md:mb-0" src="/docs/images/blog/image-4.jpg" alt="">
      <div class="flex flex-col justify-between md:p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-heading">Streamlining your design process today.</h5>
          <p class="mb-6 text-body">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
          <div>
              <button type="button" class="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                  Read more
                  <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
              </button>
          </div>
      </div>
  </a>
`

export const UserProfileCard = () => `
  <div class="relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-md shadow-xs">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" class="absolute top-2 end-2 text-body hover:text-heading bg-neutral-primary-soft box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-md p-1.5 focus:outline-none" type="button">
              <span class="sr-only">Open dropdown</span>
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/></svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdown" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-md shadow-lg w-36 block hidden">
              <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownButton">
                  <li>
                      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Edit</a>
                  </li>
                  <li>
                      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Export Data</a>
                  </li>
                  <li>
                      <a href="#" class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded-md">Delete</a>
                  </li>
              </ul>
          </div>
      <div class="flex flex-col items-center">
          <img class="w-24 h-24 mb-6 rounded-full" src="https://placecats.com/300/200" alt="Bonnie image"/>
          <h5 class="mb-0.5 text-xl font-semibold tracking-tight text-heading">Bonnie Green</h5>
          <span class="text-sm text-body">Visual Designer</span>
          <div class="flex mt-4 md:mt-6 gap-4">
              <button type="button" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                  <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                  Follow me
              </button>
              <button type="button" class="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                  Message
              </button>
          </div>
      </div>
  </div>
`

export const CardWithFormInputs = () => `
  <div class="relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-md shadow-xs">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" class="absolute top-2 end-2 text-body hover:text-heading bg-neutral-primary-soft box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-md p-1.5 focus:outline-none" type="button">
              <span class="sr-only">Open dropdown</span>
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"/></svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdown" class="z-10 bg-neutral-primary-medium border border-default-medium rounded-md shadow-lg w-36 block hidden">
              <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownButton">
                  <li>
                      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Edit</a>
                  </li>
                  <li>
                      <a href="#" class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Export Data</a>
                  </li>
                  <li>
                      <a href="#" class="inline-flex items-center w-full p-2 text-fg-danger hover:bg-neutral-tertiary-medium rounded-md">Delete</a>
                  </li>
              </ul>
          </div>
      <div class="flex flex-col items-center">
          <img class="w-24 h-24 mb-6 rounded-full" src="https://loremflickr.com/320/240" alt="Bonnie image"/>
          <h5 class="mb-0.5 text-xl font-semibold tracking-tight text-heading">Bonnie Green</h5>
          <span class="text-sm text-body">Visual Designer</span>
          <div class="flex mt-4 md:mt-6 gap-4">
              <button type="button" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                  <svg class="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                  Follow me
              </button>
              <button type="button" class="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                  Message
              </button>
          </div>
      </div>
  </div>
`

export const EcommerceCard = () => `
  <div class="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-md shadow-xs">
      <a href="#">
          <img class="rounded-md mb-6" src="https://images.unsplash.com/photo-1680459157994-7908d1e4e310?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product image" />
      </a>
      <div>
          <div class="flex items-center space-x-3 mb-6">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                  <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                  <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                  <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                  <svg class="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
              </div>
              <span class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">4.8 out of 5</span>
          </div>
          <a href="#">
              <h5 class="text-xl text-heading font-semibold tracking-tight">Robin's Egg Speckled Vase</h5>
          </a>
          <div class="flex items-center justify-between mt-6">
              <span class="text-3xl font-extrabold text-heading">$599</span>
              <button type="button" class="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">
                  <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                  Add to cart
              </button>
          </div>
      </div>
  </div>
`

export const CallToActionCard = () => `
  <div class="w-full text-center bg-neutral-primary-soft p-6 border border-default rounded-md shadow-xs">
      <h5 class="mb-3 text-2xl tracking-tight font-semibold text-heading">Work fast from anywhere</h5>
      <p class="mb-6 text-base text-body sm:text-lg">Stay up to date and move work forward with Flowbite on iOS & Android. <br>Download the app today.</p>
      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a href="#" class="w-full sm:w-auto bg-dark hover:bg-dark-strong focus:ring-4 focus:outline-none focus:ring-neutral-quaternary text-white rounded-md inline-flex items-center justify-center px-4 py-3">
              <svg class="me-2 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
              <div class="text-left rtl:text-right">
                  <div class="text-xs">Download on the</div>
                  <div class="text-sm font-bold">Mac App Store</div>
              </div>
          </a>
          <a href="#" class="w-full sm:w-auto bg-dark hover:bg-dark-strong focus:ring-4 focus:outline-none focus:ring-neutral-quaternary text-white rounded-md inline-flex items-center justify-center px-4 py-3">
              <svg class="me-2 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
              <div class="text-left rtl:text-right">
                  <div class="text-xs">Get in on</div>
                  <div class="text-sm font-bold">Google Play</div>
              </div>
          </a>
      </div>
  </div>
`

export const CardWithNavTabs = () => `
  <div class="w-full bg-neutral-primary border border-default rounded-md shadow-xs">
      <ul class="flex flex-wrap text-sm font-medium text-center text-body bg-neutral-secondary-soft border-b border-default rounded-t-base" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
          <li class="me-2">
              <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" class="inline-block p-4 text-fg-brand rounded-ss-base hover:bg-neutral-tertiary">About</button>
          </li>
          <li class="me-2">
              <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" class="inline-block p-4 hover:text-heading hover:bg-neutral-tertiary">Services</button>
          </li>
          <li class="me-2">
              <button id="statistics-tab" data-tabs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false" class="inline-block p-4 hover:text-heading hover:bg-neutral-tertiary">Facts</button>
          </li>
      </ul>
      <div id="defaultTabContent">
          <div class="hidden p-4 rounded-b-base md:p-8" id="about" role="tabpanel" aria-labelledby="about-tab">
              <h2 class="mb-2 text-2xl font-semibold tracking-tight text-heading">Powering innovation at <span class="font-extrabold">200,000+</span> companies worldwide</h2>
              <p class="mb-4 text-body">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
              <a href="#" class="inline-flex items-center font-medium text-fg-brand hover:underline">
                  Learn more
                  <svg class="w-5 h-5 ms-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
              </a>
          </div>
          <div class="hidden p-4 rounded-b-base md:p-8" id="services" role="tabpanel" aria-labelledby="services-tab">
              <h2 class="mb-5 text-2xl font-semibold tracking-tight text-heading">We invest in the world’s potential</h2>
              <!-- List -->
              <ul role="list" class="space-y-4 text-body">
                  <li class="flex space-x-1.5 rtl:space-x-reverse items-center">
                      <svg class="w-4 h-4 text-fg-brand shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                      <span class="leading-tight">Dynamic reports and dashboards</span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                      <svg class="w-4 h-4 text-fg-brand shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                      <span class="leading-tight">Templates for everyone</span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                      <svg class="w-4 h-4 text-fg-brand shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                      <span class="leading-tight">Development workflow</span>
                  </li>
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                      <svg class="w-4 h-4 text-fg-brand shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                      <span class="leading-tight">Limitless business automation</span>
                  </li>
              </ul>
          </div>
          <div class="hidden p-4 rrounded-b-base md:p-8" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
              <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-heading sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                  <div class="flex flex-col">
                      <dt class="mb-2 text-2xl font-semibold tracking-tight text-heading">73M+</dt>
                      <dd class="text-body">Developers</dd>
                  </div>
                  <div class="flex flex-col">
                      <dt class="mb-2 text-2xl font-semibold tracking-tight text-heading">100M+</dt>
                      <dd class="text-body">Public repositories</dd>
                  </div>
                  <div class="flex flex-col">
                      <dt class="mb-2 text-2xl font-semibold tracking-tight text-heading">1000s</dt>
                      <dd class="text-body">Open source projects</dd>
                  </div>
              </dl>
          </div>
      </div>
  </div>
`

export const CardWithList = () => `
  <div class="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-md shadow-xs">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-semibold leading-none text-heading">Latest Customers</h5>
          <a href="#" class="font-medium text-fg-brand hover:underline">View all</a>
    </div>
    <div class="flow-root">
          <ul role="list" class="divide-y divide-default">
              <li class="py-4 sm:py-4">
                  <div class="flex items-center gap-2">
                      <div class="shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://placecats.com/302/200" alt="Neil image">
                      </div>
                      <div class="flex-1 min-w-0 ms-2">
                          <p class="font-medium text-heading truncate">
                              Neil Sims
                          </p>
                          <p class="text-sm text-body truncate">
                              email@windster.com
                          </p>
                      </div>
                      <div class="inline-flex items-center font-medium text-heading">
                          $320
                      </div>
                  </div>
              </li>
              <li class="py-4 sm:py-4">
                  <div class="flex items-center gap-2">
                      <div class="shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://placecats.com/300/202" alt="Bonnie image">
                      </div>
                      <div class="flex-1 min-w-0 ms-2">
                          <p class="font-medium text-heading truncate">
                              Bonnie Green
                          </p>
                          <p class="text-sm text-body truncate">
                              email@windster.com
                          </p>
                      </div>
                      <div class="inline-flex items-center font-medium text-heading">
                          $3467
                      </div>
                  </div>
              </li>
              <li class="py-4 sm:py-4">
                  <div class="flex items-center gap-2">
                      <div class="shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://placecats.com/301/200" alt="Michael image">
                      </div>
                      <div class="flex-1 min-w-0 ms-2">
                          <p class="font-medium text-heading truncate">
                              Michael Gough
                          </p>
                          <p class="text-sm text-body truncate">
                              email@windster.com
                          </p>
                      </div>
                      <div class="inline-flex items-center font-medium text-heading">
                          $67
                      </div>
                  </div>
              </li>
              <li class="py-4 sm:py-4">
                  <div class="flex items-center gap-2">
                      <div class="shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://placecats.com/300/201" alt="Lana image">
                      </div>
                      <div class="flex-1 min-w-0 ms-2">
                          <p class="font-medium text-heading truncate">
                              Lana Byrd
                          </p>
                          <p class="text-sm text-body truncate">
                              email@windster.com
                          </p>
                      </div>
                      <div class="inline-flex items-center font-medium text-heading">
                          $367
                      </div>
                  </div>
              </li>
              <li class="pt-4 pb-0">
                  <div class="flex items-center gap-2">
                      <div class="shrink-0">
                          <img class="w-8 h-8 rounded-full" src="https://placecats.com/300/200" alt="Thomas image">
                      </div>
                      <div class="flex-1 min-w-0 ms-2">
                          <p class="font-medium text-heading truncate">
                              Thomas Lean
                          </p>
                          <p class="text-sm text-body truncate">
                              email@windster.com
                          </p>
                      </div>
                      <div class="inline-flex items-center font-medium text-heading">
                          $2367
                      </div>
                  </div>
              </li>
          </ul>
    </div>
  </div>
`
