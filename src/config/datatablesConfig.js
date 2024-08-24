// src/config/dataTableConfig.js
export const dataTableConfig = {
  bPaginate: true,
  bLengthChange: false,
  bFilter: true,
  bInfo: false,
  bAutoWidth: false,
  language: {
    decimal: ",",
    thousands: ".",
    zeroRecords: "No se encontraron resultados",
    info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
    infoEmpty: "Mostrando 0 a 0 de 0 registros",
    infoFiltered: "(filtrado de _MAX_ registros totales)",
    search: "Buscar:",
    oPaginate: {
      first: "<<",
      last: ">>",
      next: ">",
      previous: ">"
    },
    sProcessing: "Cargando..."
  }
};
