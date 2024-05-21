$(document).ready(function () {
  $("#formcontato").on("submit", function (e) {
    e.preventDefault();
    let valoresFormulario = {};
    $.each($(this).serializeArray(), function(i, field) {
        valoresFormulario[field.name] = field.value;
    });
    Swal.fire({
      title: "Contato",
      text: "Mensagem Enviada: "+JSON.stringify(valoresFormulario),
      icon: "success",
      heightAuto: false,
    });
    
  });
});
