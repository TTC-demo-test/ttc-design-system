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