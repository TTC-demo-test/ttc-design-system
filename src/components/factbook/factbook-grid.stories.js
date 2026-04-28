import { initCsvGridTables } from "./factbook-table-grid"

const sampleCsv = `Certificate,2019,2020,2021,2022,2023
Advanced Baking and Pastry,50%,50%, --, --, --
Advanced Cake and Chocolate,100%,100%, --, --, --
Advanced Culinary Arts,NG,NG,100%,100%,92%
Artisanal Foods,NG,NG, --, --, --
Baking and Pastry,100%,100%,100%,94%,96%
Beverage Service Essentials,NG,100%,100%,100%,100%
Cake Decorating, --,89%,NG,NG,100%
Culinary Arts,100%,100%,100%,94%,100%
Culinary Manager,100%,NG, --, --, --
Dietary Manager,NG,NG,100%,100%,100%
Event Management,100%,95%,100%,100%,100%
Food and Beverage Operations,100%,94%,100%,100%,100%
Hospitality Entrepreneurship, --, --, --, --,100%
Hotel Operations,100%,94%,100%,100%,100%
Restaurant Cooks,100%,100%, --, --, --
Sports and Health Nutrition,NG,NG, --, --, --`;

function csvToObjectUrl(csvText) {
    return URL.createObjectURL(
        new Blob([csvText], {
            type: "text/csv;charset=utf-8"
        })
    )
}

function escapeAttr(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
}

export default {
    title: 'components/Factbook Table Grid',
    parameters: {
        layout: "padded"
    },
    argTypes: {
        firstColumnHeader: {
            control: "text"
        },
        caption: {
            control: "text"
        },
        notes: {
            control: "text"
        }
    }
}

export const Default = {
    args: {
        id: "certificate-completions",
        firstColumnHeader: "s",
        caption: "Certificcate completion rates by year",
        notes: "NG indicates no graduates. Dashes indicate no available data.",
        csvText: sampleCsv
    },
    render: ({ id, firstColumnHeader, caption, notes, csvText }) => {
        const safeId = escapeAttr(id)
        const csvUrl = csvToObjectUrl(csvText)

        return `
            <div class="csv-grid-region">
                <p id="csv-grid-help-${safeId}" class="csv-grid-help mt-0 mb-2 text-sm text-gray-700">
                Use arrow keys to move between header and data cells. Press Tab to leave the table.
                </p>

                <div
                class="csv-grid-wrap max-w-full overflow-x-auto focus:outline focus:outline-2 focus:outline-current focus:outline-offset-2"
                tabindex="0"
                role="region"
                aria-label="${escapeAttr(caption)}"
                aria-describedby="csv-grid-help-${safeId}"
                data-csv-grid
                >
                <table
                    id="csv-grid-${safeId}"
                    class="csv-grid-table w-full border-collapse text-left text-sm"
                    data-csv-url="${escapeAttr(csvUrl)}"
                    data-first-column-header="${escapeAttr(firstColumnHeader)}"
                    data-caption="${escapeAttr(caption)}"
                ></table>
                </div>

                <small class="mt-2 block text-sm text-gray-700">${escapeAttr(notes)}</small>
            </div>
        `
    },
    play: async ({ canvasElement }) => {
        console.log("Storybook play running");
        await initCsvGridTables(canvasElement)
    }
}

// export const FactbookGrid = () => `
//     <div class="csv-grid-region">
//         <p id="csv-grid-help-[[3ab5dc2821f07795b3b266d4314922a1]]" class="csv-grid-help">
//             Use arrow keys to move between header and data cells. Press Tab to leave the table.
//         </p>

//         <div
//             class="csv-grid-wrap"
//             tabindex="0"
//             role="region"
//             aria-labelledby="csv-grid-[[3ab5dc2821f07795b3b266d4314922a1]] csv-grid-help-[[3ab5dc2821f07795b3b266d4314922a1]]"
//             data-csv-grid=""
//         >
//             <table
//             id="csv-grid-[[3ab5dc2821f07795b3b266d4314922a1]]"
//             class="table table-striped"
//             data-csv-url="[[658d2228bb7878e5019de76e33df009f]]"
//             data-first-column-header="[[4c4cd0810e5ef6234f37c76971a14c55]]"
//             data-caption="[[e8b280f9a7a05721ba6f073b9b6e4f86]]"
//             ></table>
//         </div>
//         <small class="mc-table__notes">[[b5846e90625bfabe5e1ce5082919e824]]</small>
//     </div>
//`