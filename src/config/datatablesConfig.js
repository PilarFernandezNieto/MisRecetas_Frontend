// src/config/dataTableConfig.js
export const dataTableConfig = {
  paging: true,
  lengthChange: false,
  searching: true,
  info: false,
  autoWidth: false,
  language: {
    decimal: ",",
    thousands: ".",
    zeroRecords: "No se encontraron resultados",
    info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
    infoEmpty: "Mostrando 0 a 0 de 0 registros",
    infoFiltered: "(filtrado de _MAX_ registros totales)",
    search: "Buscar:",
    paginate: {
      first: "<<",
      last: ">>",
      next: ">",
      previous: "<"
    },
    processing: "Cargando..."
  }
};
