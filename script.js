   
   function sumar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    
     const suma = parseInt(numero1) + parseInt(numero2);
     document.getElementById('resultado').value = suma;
   };

    function resta() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
 
     const resta = parseInt(numero1) - parseInt(numero2);
     document.getElementById('resultado').value = resta;
   };

   function multiplicar(){
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
 
     const multiplicar = parseInt(numero1) * parseInt(numero2);
     document.getElementById('resultado').value = multiplicar;
   }

   function dividir(){
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
 
     const dividir = parseInt(numero1) / parseInt(numero2);
     document.getElementById('resultado').value = dividir;
   }

 