export default {
  title: 'Components/Alert'
};

export const Success = () => `
  <div role="alert">
  <div class="bg-green-500 text-white font-bold rounded-t px-4 py-2">
    Success
  </div>
    <div class="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700">
      <p>All is good in the world. You are amazing!</p>
    </div>
  </div>
`;

export const Warning = () => `
  <div role="alert">
  <div class="bg-orange-500 text-white font-bold rounded-t px-4 py-2">
    Warning
  </div>
    <div class="border border-t-0 border-orange-400 rounded-b bg-orange-100 px-4 py-3 text-orange-700">
      <p>Something might happen, something might not, but be vigilant because you never know.</p>
    </div>
  </div>
`;

export const Danger = () => `
  <div role="alert">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p>Something bad has happened and here are some details.</p>
    </div>
  </div>
`;