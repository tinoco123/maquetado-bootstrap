var tableData = [
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 2, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
    { id: 3, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 4, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
    { id: 5, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 6, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
    { id: 7, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 8, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
    { id: 9, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 10, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
    { id: 11, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 12, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
    { id: 13, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 14, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
    { id: 15, keyword: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", zona: "Federal", categoria: "Elecciones" },
    { id: 16, keyword: "PRI", date: "23/02/2001", estado: "Sinaloa", zona: "Federal", categoria: "Partidos políticos" },
]




var table = new Tabulator("#example-table", {
    layout: "fitDataStretch",
    data: tableData, //set initial table data
    pagination: true,
    paginationSize: 10,
    paginationSizeSelector: [10, 25, 50, 100, true],
    paginationCounter: "rows",
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerHozAlign: "center", resizable: false, headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Keyword", field: "keyword" },
        { title: "Fecha", field: "date", sorter: "date" },
        { title: "Estado", field: "estado" },
        { title: "Zona", field: "zona" },
        { title: "Categoría", field: "categoria", cssClass: "status" },
    ],
});

table.on("rowSelected", function (row) {
    //row - row component for the selected row

    var rowData = row.getData()
    console.log(rowData);
});