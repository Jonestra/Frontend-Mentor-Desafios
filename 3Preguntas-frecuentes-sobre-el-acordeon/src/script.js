//Manda llamar al elemento HTML ".faq" ubicado en el DOM del navegador
const faqs = document.querySelectorAll(".faq"); 

// El metodo ".forEach" recorre cada nodo que existe dentro del elemento ".faq" en el HTML
faqs.forEach(faq => { 
  faq.addEventListener("click", ()=> {
    faqs.forEach(item => {
      if(item !== faq) { 
        item.removeAttribute("open") // El condicional hace que cuando un nodo del elemento ".faq" esta seleccionado cambie su propiedad "open"
      }
    })
  })
});

console.log(faqs); // Permite visualizar los nodos en la consola del elemento ".faq" 