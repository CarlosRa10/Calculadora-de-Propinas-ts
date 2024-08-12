/** @type {import('tailwindcss').Config} */
// Tailwind CSS
// -Es un frameWork CSS basado en utilidades.
// -A diferencia de Bootstrap donde una clase contiene diferentes propiedades de CSS; en Tailwind CSS cada clase es una propiedad de CSS con un nombre singular

// Ventajas
// -Su ventaja principal es que escribes el codigo CSS en tus componentes sin hojas externas
// -Tampoco es necesario preocuparte por la herencia en CSS
// -El como nombrar tus clases tampoco es un problema.
// -Excelente Documentacion
// -La extension de Vscode es excelente para el autocompletado
//Esto lo que hace es especificar en que archivos donde encontrara codigo html que va a tener clase de CSS, una vez que terminemos con nuestro proyecto, 
//unicamente va a tomar las clases del framework que hemos utilizado y crear una hoja de estilos con esa clase
//Tailwind CSS tiene algo llamado JIT o "Just in Time", lo que haces es que unicamente las clases que tu has utilizado, son las que se van a agregar a la hoja de estilo final
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

