

    export async function initCsvGridTables(root = document) {
      const tables = Array.from(root.querySelectorAll("table[data-csv-url]"));

      for (const table of tables) {
        try {
          await loadAndEnhanceCsvTable(table);
        } catch (error) {
          console.error("CSV grid table failed to initialize:", error);
          renderTableError(table, "Unable to load table data.");
        }
      }
    }

    async function loadAndEnhanceCsvTable(table) {
      const csvUrl = table.dataset.csvUrl;
      const firstColumnHeader = table.dataset.firstColumnHeader || "Category";
      const explicitCaption = table.dataset.caption || "";

      if (!csvUrl) {
        throw new Error("Missing data-csv-url attribute.");
      }

      const response = await fetch(csvUrl, { credentials: "same-origin" });
      if (!response.ok) {
        throw new Error(`Failed to load CSV: ${response.status} ${response.statusText}`);
      }

      const csvText = await response.text();
      const parsedRows = normalizeRows(parseCsv(csvText));

      if (!parsedRows.length || !parsedRows[0].length) {
        throw new Error("CSV file is empty or invalid.");
      }

      const firstRow = parsedRows[0];
      const captionText = explicitCaption || firstRow[0] || "Data table";

      const rows = [
        [firstColumnHeader, ...firstRow.slice(1)],
        ...parsedRows.slice(1)
      ];

      renderCsvGridTable({
        table,
        captionText,
        rows
      });

      enableGridKeyboard(table);
    }

    function renderCsvGridTable({ table, captionText, rows }) {
        const wrapper = table.closest("[data-csv-grid]") || table.closest(".csv-grid-wrap");

        if (wrapper) {
            delete wrapper.dataset.csvGridKeyboardBound;
        }
      table.innerHTML = "";

      const captionId = buildCaptionId(table);
      const caption = document.createElement("caption");
      caption.id = captionId;
      caption.textContent = captionText;
      caption.className = "caption-top pb-2 text-left font-bold"
      table.appendChild(caption);

      const [headerRow, ...bodyRows] = rows;

      const thead = document.createElement("thead");
      const headerTr = document.createElement("tr");

      headerRow.forEach((headerText, colIndex) => {
        const th = document.createElement("th");
        th.scope = "col";
        th.textContent = normalizeCellText(headerText);

        th.className = [
            "csv-grid-cell",
            "border",
            "border-gray-300",
            "bg-gray-100",
            "px-3",
            "py-2",
            "text-left",
            "align-top",
            "font-semibold",
            "outline-none",
            "focus:outline",
            "focus:outline-[3px]",
            "focus:outline-current",
            "focus:-outline-offset-[3px]"
            ].join(" ");
        th.tabIndex = -1;
        th.dataset.row = "0";
        th.dataset.col = String(colIndex);
        th.setAttribute("aria-label", `Column header: ${normalizeCellText(headerText) || `Column ${colIndex + 1}`}`);

        headerTr.appendChild(th);
      });

      thead.appendChild(headerTr);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");

      bodyRows.forEach((row, bodyRowIndex) => {
        const tr = document.createElement("tr");
        tr.className = bodyRowIndex % 2 === 1 ? "bg-gray-50" : "bg-white";
        const gridRowIndex = bodyRowIndex + 1;

        headerRow.forEach((headerText, colIndex) => {
          const rawValue = row[colIndex] ?? "";
          const value = normalizeCellText(rawValue);

          let cell;
          if (colIndex === 0) {
            cell = document.createElement("th");
            cell.scope = "row";
          } else {
            cell = document.createElement("td");
          }

          if (value) {
            cell.textContent = value;
          } else {
            const dash = document.createElement("span");
            dash.setAttribute("aria-hidden", "true");
            dash.textContent = "—";

            const hidden = document.createElement("span");
            hidden.className = "sr-only";
            hidden.textContent = "No data";

            cell.appendChild(dash);
            cell.appendChild(hidden);
          }

          cell.className = [
            "csv-grid-cell",
            "border",
            "border-gray-300",
            "px-3",
            "py-2",
            "text-left",
            "align-top",
            "outline-none",
            "focus:outline",
            "focus:outline-[3px]",
            "focus:outline-current",
            "focus:-outline-offset-[3px]"
            ].join(" ");

        if (colIndex === 0) {
            cell.classList.add("font-medium")
        }
          cell.tabIndex = -1;
          cell.dataset.row = String(gridRowIndex);
          cell.dataset.col = String(colIndex);

          const rowHeaderText = normalizeCellText(row[0]) || `Row ${gridRowIndex}`;
          const colHeaderText = normalizeCellText(headerText) || `Column ${colIndex + 1}`;
          const displayValue = value || "No data";

          if (colIndex === 0) {
            cell.setAttribute("aria-label", `Row header: ${displayValue}`);
          } else {
            cell.setAttribute("aria-label", `${colHeaderText}, ${rowHeaderText}, ${displayValue}`);
          }

          tr.appendChild(cell);
        });

        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
    }

    // function enableGridKeyboard(table) {
    //     const wrapper = table.closest("[data-csv-grid]") || table.closest(".csv-grid-wrap");

    //     if (!wrapper) {
    //         console.warn("CSV grid wrapper not found for table:", table);
    //         return;
    //     }

    //     wrapper.dataset.csvGridKeyboardBound = "true";
    //     console.log("Binding keyboard behavior for:", table);

    //   let matrix = buildMatrix(table);
    //   if (!matrix.length || !matrix[0].length) {
    //     return;
    //   }

    //   let active = getInitialActivePosition(matrix);
    //   setActiveCell(matrix, active, false);

    //   wrapper.addEventListener("click", function (event) {
    //     const cell = event.target.closest(".csv-grid-cell");
    //     if (!cell || !table.contains(cell)) {
    //       return;
    //     }
    //     matrix = buildMatrix(table);
    //     active = getPositionFromCell(cell);
    //     setActiveCell(matrix, active, true);
    //   });

    //   wrapper.addEventListener("keydown", function (event) {
    //     matrix = buildMatrix(table);
    //     console.log("table keydown:", event.key, event.target);
    //     const currentCell = event.target.closest(".csv-grid-cell");
    //     const wrapperHasFocus = document.activeElement === wrapper;

    //     const shouldEnterGrid = wrapperHasFocus && (
    //         event.key === "Enter" ||
    //         event.key === " " ||
    //         event.key === "ArrowDown" ||
    //         event.key === "ArrowRight"
    //     )
        
    //     if (shouldEnterGrid) {
    //         event.preventDefault()
    //         setActiveCell(matrix, active, true);
    //         return;
    //     }

    //     if (!currentCell || !table.contains(currentCell)) {
    //         return;
    //     }

    //     const current = getPositionFromCell(currentCell);
    //     let next = { ...current };
    //     let handled = true;

    //     switch (event.key) {
    //       case "ArrowRight":
    //         next.col += 1;
    //         break;
    //       case "ArrowLeft":
    //         next.col -= 1;
    //         break;
    //       case "ArrowDown":
    //         next.row += 1;
    //         break;
    //       case "ArrowUp":
    //         next.row -= 1;
    //         break;
    //       case "Home":
    //         next.col = 0;
    //         break;
    //       case "End":
    //         next.col = matrix[current.row].length - 1;
    //         break;
    //       default:
    //         handled = false;
    //         break;
    //     }

    //     if (!handled) {
    //       return;
    //     }

    //     event.preventDefault();

    //     next.row = clamp(next.row, 0, matrix.length - 1);
    //     next.col = clamp(next.col, 0, matrix[next.row].length - 1);

    //     active = next;
    //     setActiveCell(matrix, active, true);
    //   });

    //   if (wrapper) {
    //     wrapper.addEventListener("keydown", function (event) {
    //         console.log("wrapper keydown:", event.key, document.activeElement);
    //       const shouldEnterGrid =
    //         document.activeElement === wrapper &&
    //         (event.key === "Enter" ||
    //          event.key === " " ||
    //          event.key === "ArrowDown" ||
    //          event.key === "ArrowRight");

    //       if (!shouldEnterGrid) {
    //         return;
    //       }

    //       event.preventDefault();
    //       setActiveCell(matrix, active, true);
    //     });
    //   }
    // }

    function enableGridKeyboard(table) {
  const wrapper =
    table.closest("[data-csv-grid]") ||
    table.closest(".csv-grid-wrap");

  if (!wrapper) {
    console.warn("CSV grid wrapper not found for table:", table);
    return;
  }

  if (wrapper.dataset.csvGridKeyboardBound === "true") {
    return;
  }

  wrapper.dataset.csvGridKeyboardBound = "true";

  let matrix = buildMatrix(table);

  if (!matrix.length || !matrix[0].length) {
    console.warn("CSV grid matrix is empty:", matrix);
    return;
  }

  let active = getInitialActivePosition(matrix);
  setActiveCell(matrix, active, false);

  wrapper.addEventListener("click", function (event) {
    const cell = event.target.closest(".csv-grid-cell");

    if (!cell || !table.contains(cell)) {
      return;
    }

    matrix = buildMatrix(table);
    active = getPositionFromCell(cell);
    setActiveCell(matrix, active, true);
  });

  wrapper.addEventListener("keydown", function (event) {
    matrix = buildMatrix(table);

    const currentCell = event.target.closest(".csv-grid-cell");
    const wrapperHasFocus = document.activeElement === wrapper;

    console.log("CSV grid keydown:", {
      key: event.key,
      target: event.target,
      activeElement: document.activeElement,
      wrapperHasFocus,
      currentCell
    });

    const entryKeys = [
      "Enter",
      " ",
      "ArrowDown",
      "ArrowRight",
      "ArrowUp",
      "ArrowLeft"
    ];

    const navigationKeys = [
      "ArrowRight",
      "ArrowLeft",
      "ArrowDown",
      "ArrowUp",
      "Home",
      "End"
    ];

    const shouldEnterGrid =
      !currentCell &&
      entryKeys.includes(event.key);

    if (wrapperHasFocus && shouldEnterGrid) {
      event.preventDefault();
      setActiveCell(matrix, active, true);
      return;
    }

    if (!currentCell && entryKeys.includes(event.key)) {
      event.preventDefault();
      setActiveCell(matrix, active, true);
      return;
    }

    if (!currentCell || !table.contains(currentCell)) {
      return;
    }

    if (!navigationKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();

    const current = getPositionFromCell(currentCell);
    let next = { ...current };

    switch (event.key) {
      case "ArrowRight":
        next.col += 1;
        break;

      case "ArrowLeft":
        next.col -= 1;
        break;

      case "ArrowDown":
        next.row += 1;
        break;

      case "ArrowUp":
        next.row -= 1;
        break;

      case "Home":
        next.col = 0;
        break;

      case "End":
        next.col = matrix[current.row].length - 1;
        break;
    }

    next.row = clamp(next.row, 0, matrix.length - 1);
    next.col = clamp(next.col, 0, matrix[next.row].length - 1);

    active = next;
    setActiveCell(matrix, active, true);
  });
}

    function getInitialActivePosition(matrix) {
      if (matrix.length > 1 && matrix[1].length > 0) {
        return { row: 1, col: 0 };
      }
      return { row: 0, col: 0 };
    }

    function buildMatrix(table) {
      const rows = Array.from(table.querySelectorAll("thead tr, tbody tr"));
      return rows.map(function (tr) {
        return Array.from(tr.querySelectorAll(".csv-grid-cell"));
      });
    }

    // function setActiveCell(matrix, position, focus) {
    //   matrix.flat().forEach(function (cell) {
    //     cell.tabIndex = -1;
    //   });

    //   const target = matrix[position.row] && matrix[position.row][position.col];
    //   if (!target) {
    //     return;
    //   }

    //   target.tabIndex = 0;

    //   if (focus) {
    //     target.focus();
    //     if (typeof target.scrollIntoView === "function") {
    //       target.scrollIntoView({ block: "nearest", inline: "nearest" });
    //     }
    //   }
    // }
    function setActiveCell(matrix, position, focus) {
        const cells = matrix.flat().filter(Boolean);

        if (!cells.length) {
            console.warn("CSV grid has no focusable cells.");
            return;
        }

        cells.forEach(function (cell) {
            cell.tabIndex = -1;
            cell.removeAttribute("data-active-cell");
        });

        const safeRow = clamp(position.row, 0, matrix.length - 1);
        const safeCol = clamp(position.col, 0, matrix[safeRow].length - 1);

        const target = matrix[safeRow] && matrix[safeRow][safeCol];

        if (!target) {
            console.warn("CSV grid target cell not found:", {
            position,
            safeRow,
            safeCol,
            matrix
            });
            return;
        }

        target.tabIndex = 0;
        target.setAttribute("data-active-cell", "true");

        if (focus) {
            target.focus({ preventScroll: true });

            console.log("CSV grid focus result:", {
            target,
            activeElement: document.activeElement,
            focused: document.activeElement === target,
            row: safeRow,
            col: safeCol
            });

            if (typeof target.scrollIntoView === "function") {
            target.scrollIntoView({
                block: "nearest",
                inline: "nearest"
            });
            }
        }
        }

    function getPositionFromCell(cell) {
      return {
        row: Number(cell.dataset.row),
        col: Number(cell.dataset.col)
      };
    }

    function buildCaptionId(table) {
      return table.id ? `${table.id}-caption` : `csv-grid-caption-${Math.random().toString(36).slice(2, 10)}`;
    }

    function renderTableError(table, message) {
      table.innerHTML = "";
      const caption = document.createElement("caption");
      caption.textContent = "Table unavailable";
      table.appendChild(caption);

      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.textContent = message;
      tr.appendChild(td);
      tbody.appendChild(tr);
      table.appendChild(tbody);
    }

    function normalizeRows(rows) {
      const maxColumns = Math.max.apply(null, rows.map(function (row) {
        return row.length;
      }));

      return rows.map(function (row) {
        const normalized = row.slice();
        while (normalized.length < maxColumns) {
          normalized.push("");
        }
        return normalized;
      });
    }

    function normalizeCellText(value) {
      if (value === null || value === undefined) {
        return "";
      }
      return String(value).trim();
    }

    function clamp(value, min, max) {
      return Math.max(min, Math.min(max, value));
    }

    function parseCsv(csvText) {
      const rows = [];
      let row = [];
      let cell = "";
      let inQuotes = false;

      for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const nextChar = csvText[i + 1];

        if (char === '"') {
          if (inQuotes && nextChar === '"') {
            cell += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === "," && !inQuotes) {
          row.push(cell.trim());
          cell = "";
        } else if ((char === "\n" || char === "\r") && !inQuotes) {
          if (char === "\r" && nextChar === "\n") {
            i++;
          }

          row.push(cell.trim());
          cell = "";

          if (row.some(function (value) { return value !== ""; })) {
            rows.push(row);
          }

          row = [];
        } else {
          cell += char;
        }
      }

      row.push(cell.trim());
      if (row.some(function (value) { return value !== ""; })) {
        rows.push(row);
      }

      return rows;
    }