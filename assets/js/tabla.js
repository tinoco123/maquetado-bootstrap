var tableData = [
    { id: 1, pagina: "Elecciones presidenciales", date: "23/02/2001", estado: "Veracruz", url: "https://www.cbcs.gob.mx/index.php/boletines-2023-1", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 2, pagina: "La democracia en retroceso", date: "23/03/2001", estado: "Cuernavaca", url: "https://www.cbcs.gob.mx/index.php/boletines-2023-1", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 3, pagina: "Elecciones presidenciales", date: "23/09/2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 4, pagina: "La democracia en retroceso", date: "23-05-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 5, pagina: "Elecciones presidenciales", date: "23-07-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 6, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 7, pagina: "Elecciones presidenciales", date: "23-10-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 8, pagina: "La democracia en retroceso", date: "23-11-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 9, pagina: "Elecciones presidenciales", date: "23-12-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 10, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 11, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 12, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 13, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 14, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 15, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 16, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 17, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 18, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 19, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id:20, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 21, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 22, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 23, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 24, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 25, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 26, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 27, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 28, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" },
    { id: 29, pagina: "Elecciones presidenciales", date: "23-09-2001", estado: "Veracruz", url: "www.gob.mx/elecciones", zona: "Federal", categoria: "Elecciones", acciones: "Acciones" },
    { id: 30, pagina: "La democracia en retroceso", date: "23-09-2001", estado: "Cuernavaca", url: "www.gob.mx/democracia", zona: "Federal", categoria: "Democracia", acciones: "Acciones" }
]


var printIcon = function (cell, formatterParams) { //plain text value
    return "<i data-bs-toggle='modal' data-bs-target='#exampleModal' class='bi bi-eye fs-5 me-1'></i> <i class='bi bi-trash fs-5'></i>";
};

var table = new Tabulator("#example-table", {
    layout:"fitDataStretch",
    data: tableData, //set initial table data
    pagination:"true",
    pagination:true,
    paginationSize:10,
    paginationSizeSelector:[10, 25, 50, 100, true],
    paginationCounter:"rows",
    columns: [
        {
            formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerHozAlign: "center", resizable: false, headerSort: false, cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            }
        },
        { title: "Página", field: "pagina" },
        { title: "Fecha de publicación", field: "date", sorter: "date" },
        { title: "Estado", field: "estado" },
        { title: "URL", field: "url" },
        { title: "Zona", field: "zona" },
        { title: "Categoría", field: "categoria", cssClass:"status" },
        { title: "Acciones", formatter: printIcon, width: 107, hozAlign: "center", headerHozAlign: "center", headerSort: false},
    ],
});

table.on("rowSelected", function(row){
    //row - row component for the selected row

    var rowData = row.getData()
    console.log(rowData);
});