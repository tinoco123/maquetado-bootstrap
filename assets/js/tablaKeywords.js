var tableData = [
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
    { id: 1, keyword: "Elecciones presidenciales", date: "23/02/2001", type: "Estatal"},
]


var acctionIcons = function (cell, formatterParams) { //plain text value
    var accionHTML = "<button class='btn p-2' data-bs-toggle='modal' data-bs-target='#modalEditarKeyword'><i class='bi bi-pen fs-5'></i></button> <button class='btn p-2' data-bs-toggle='modal' data-bs-target='#modalEliminarKeyword'><i class='bi bi-trash fs-5'></i></button>"
    return accionHTML;
};

var statusFormatter = function (cell, formatterParams) { //plain text value
    return '<div class="badge-status-bad px-2 pt-1 rounded text-center"><i class="bi bi-x-lg me-1"></i> Error </div>';
    // return '<div class="badge-status-ok px-2 pt-1 rounded text-center"><i class="bi bi-check-lg me-1"></i> Éxito </div>';

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
        { title: "Keyword", field: "keyword" },
        { title: "Fecha en que se agregó", field: "date", sorter: "date"},
        { title: "Status", field: "status", formatter: statusFormatter, width: 107, resizable: false, hozAlign: "center", headerHozAlign: "center", headerSort: false},
        { title: "Tipo", field: "type" },
        { title: "Acciones", formatter: acctionIcons, width: 107, hozAlign: "center", headerHozAlign: "center", headerSort: false},
    ],
});

table.on("rowSelected", function(row){
    //row - row component for the selected row

    var rowData = row.getData()
    console.log(rowData);
});