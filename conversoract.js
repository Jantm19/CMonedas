document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM necesarios
    const form = document.querySelector('form');
    const valorInput = document.getElementById('valor');
    const monedaOrigenSelect = document.getElementById('moneda_origen');
    const monedaDestinoSelect = document.getElementById('moneda_destino');
    const resultadoInput = document.getElementById('resultado_input');
    
    // Agregar un evento de escucha al formulario cuando se envía
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evitar el envío del formulario por defecto
      
      // Obtener los valores ingresados por el usuario
      const valor = valorInput.value;
      const monedaOrigen = monedaOrigenSelect.value;
      const monedaDestino = monedaDestinoSelect.value;
      
      // Realizar la conversión de divisas llamando a la función correspondiente
      const resultado = convertirDivisas(valor, monedaOrigen, monedaDestino);
      
      // Mostrar el resultado en el elemento de resultado en la página
      resultadoInput.value = `${valor} ${monedaOrigen} es ${resultado} en ${monedaDestino}`;
      
      // Restablecer los campos del formulario
      form.reset();
    });
  
    // Función para convertir divisas
    function convertirDivisas(valor, monedaOrigen, monedaDestino) {
      // Objeto que mapea las tasas de conversión entre diferentes monedas
      const tasaConversion = {
        'MXN': { 'USD': 0.059, 'EUR': 0.054, 'LB': 0.046, 'WN': 76.29, 'JPY': 8.47 },
        'USD': { 'MXN': 17.06 },
        'EUR': { 'MXN': 18.60 },
        'LB': { 'MXN': 21.65 },
        'WN': { 'MXN': 0.013 },
        'JPY': { 'MXN': 0.12 }
      };
  
      // Comprobar si la moneda de origen y la moneda de destino son iguales
      if (monedaOrigen === monedaDestino) {
        return valor; // No se necesita conversión, se devuelve el valor original
      }
      
      // Comprobar si existe una tasa de conversión válida en el objeto tasaConversion
      const tasa = tasaConversion[monedaOrigen] && tasaConversion[monedaOrigen][monedaDestino];
      if (tasa) {
        return valor * tasa; // Realizar la conversión utilizando la tasa de conversión correspondiente
      }
  
      return 'No se encontró una tasa de conversión válida'; // Devolver un mensaje de error si no se encuentra una tasa válida
    }
  });
  