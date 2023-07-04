document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores ingresados por el usuario
    var valor = document.getElementById('valor').value;
    var monedaOrigen = document.getElementById('moneda_origen').value;
    var monedaDestino = document.getElementById('moneda_destino').value;
    
    // Realizar la conversión de divisas
    var resultado = convertirDivisas(valor, monedaOrigen, monedaDestino);
    
    // Mostrar el resultado en la página
    document.getElementById('resultado_input').value = " " + resultado;
    
    // Restablecer los campos del formulario
    document.getElementById('valor').value = '';
    document.getElementById('moneda_origen').selectedIndex = 0;
    document.getElementById('moneda_destino').selectedIndex = 0;
  });

  function convertirDivisas(valor, monedaOrigen, monedaDestino) {
    // De pesos MXN a todos los de mas
    if (monedaOrigen === 'MXN' && monedaDestino === 'USD') {
      return valor * 0.059;
    }
    if (monedaOrigen === 'MXN' && monedaDestino === 'EUR') {
      return valor * 0.054;
    }
    if (monedaOrigen === 'MXN' && monedaDestino === 'LB') {
      return valor * 0.046;
    }
    if (monedaOrigen === 'MXN' && monedaDestino === 'WN') {
      return valor * 76.29;
    }
    if (monedaOrigen === 'MXN' && monedaDestino === 'JPY') {
      return valor * 8.47;
    }
    if (monedaOrigen == monedaDestino) {
      return valor * 1;
    }
    // De pesos todos los de mas a Pesos Mexicanos
    if (monedaOrigen === 'USD' && monedaDestino === 'MXN') {
      return valor * 17.06;
    }
    if (monedaOrigen === 'EUR' && monedaDestino === 'MXN') {
      return valor * 18.60;
    }
    if (monedaOrigen === 'LB' && monedaDestino === 'MXN') {
      return valor * 21.65;
    }
    if (monedaOrigen === 'WN' && monedaDestino === 'MXN') {
      return valor * 0.013;
    }
    if (monedaOrigen === 'JPY' && monedaDestino === 'MXN') {
      return valor * 0.12;
    }

    return valor;
  }
});