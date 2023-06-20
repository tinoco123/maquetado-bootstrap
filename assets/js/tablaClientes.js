var tableData = [
    { id: 1, nombre:"Aldo Mujica Santana", date:"19/06/2023"},
    { id: 2, nombre:"Jonathan Mujica Santana", date:"19/06/2023"},
    { id: 3, nombre:"Mario Mujica Santana", date:"19/06/2023"},
    { id: 4, nombre:"Anahi Mujica Santana", date:"19/06/2023"},
    { id: 5, nombre:"Maria Mujica Santana", date:"19/06/2023"},
    { id: 6, nombre:"Aldo Mujica Santana", date:"19/06/2023"},
    { id: 7, nombre:"Jonathan Mujica Santana", date:"19/06/2023"},
    { id: 8, nombre:"Mario Mujica Santana", date:"19/06/2023"},
    { id: 9, nombre:"Anahi Mujica Santana", date:"19/06/2023"},
    { id: 10, nombre:"Marco Mujica Santana", date:"19/06/2023"},
    { id: 11, nombre:"Alan Mujica Santana", date:"19/06/2023"},
    { id: 12, nombre:"Paola Mujica Santana", date:"19/06/2023"},
    { id: 13, nombre:"Alin Mujica Santana", date:"19/06/2023"},
    { id: 14, nombre:"Abril Mujica Santana", date:"19/06/2023"},
    { id: 15, nombre:"Joselu Mujica Santana", date:"19/06/2023"},
    { id: 16, nombre:"Jose Mujica Santana", date:"19/06/2023"},
    { id: 17, nombre:"Edgar Mujica Santana", date:"19/06/2023"},
    { id: 18, nombre:"Tomas Mujica Santana", date:"19/06/2023"},
    { id: 19, nombre:"Pedro Mujica Santana", date:"19/06/2023"},
    { id: 20, nombre:"Juan Mujica Santana", date:"19/06/2023"},
]


var accionIcons = function (cell, formatterParams) { //plain text value
    var accionHTML = "<button class='btn p-2' data-bs-toggle='modal' data-bs-target='#editarCliente'><i class='bi bi-pen fs-5'></i></button> <button class='btn p-2' data-bs-toggle='modal' data-bs-target='#eliminarCliente'><i class='bi bi-trash fs-5'></i></button>"
    return accionHTML;
};

var table = new Tabulator("#example-table", {
    layout: "fitDataStretch",
    data: tableData, //set initial table data
    pagination: "true",
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
        { title: "ID", field: "id", sorter:"number" },
        { title: "Nombre", field: "nombre"},
        { title: "Fecha de registro", field: "date", sorter: "date" },
        { title: "Acciones", formatter: accionIcons, width: 107, hozAlign: "center", headerHozAlign: "center", headerSort: false },
    ],
});

table.on("rowSelected", function (row) {
    //row - row component for the selected row

    var rowData = row.getData()
    console.log(rowData);
});