export default {
  title: 'Components/Card'
};

export const ProgramCard = () => `
  <article class="card">
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