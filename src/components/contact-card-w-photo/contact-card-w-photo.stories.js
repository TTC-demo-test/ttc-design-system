

export default {
    title: 'components/ContactCardWithPhoto'
}

export const ContactCardWithPhoto = () => `
    <div class="mb-3 flex flex-col overflow-hidden rounded-sm sm:flex-row">
        <div class="shrink-0 sm:w-1/4">
            <img
            width="200"
            height="250"
            src="https://www.tridenttech.edu/_media/images/portraits/2N0A4177-20240708-wood-vicky-dr.jpeg"
            alt="Vicky Wood"
            class="h-auto w-[200px] max-w-full object-cover"
            />
        </div>

        <div class="flex bg-gray-100 sm:w-3/4">
            <div class="p-3">
            <p class="mb-1">
                <strong class="uppercase">Vicky Wood</strong>
            </p>

            <p class="mb-1">President</p>

            <div class="mb-1 text-[0.9em] leading-relaxed">
                <span>A.A.B., Marion Technical College<br /></span>
                <span>B.A., Business Education, Ashland University<br /></span>
                <span>M.Ed., Education, Bowling Green State University<br /></span>
                <span>Ph.D., Higher Education Leadership, University of Toledo</span>
            </div>
            </div>
        </div>
    </div>
`