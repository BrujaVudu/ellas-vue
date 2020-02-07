import prismicDOM from 'prismic-dom';

const Elements = prismicDOM.RichText.Elements;

// Con esto estoy tratando de llamar el contenido del glosario desde el serializar para llenar los span, pero no lo logro

// var Prismic = require('prismic-javascript');

// function glosario() { Prismic.getApi("https://ellas-libres.prismic.io/api/v2",  { }).then(async function(api) {  
//     const response = await api.getSingle('palabras_clave');
//     return response.data['palabra-definicion'].palabra;
//   })
// }
  


export default function (type, element, content, children) {
  // Add a class to paragraph elements
  if (type === Elements.label && element.data.label == "glosario" ) {
    switch(content.toLowerCase()){
      case 'audiencia':
      case 'audiencias':
        return `<span class="tooltip" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')} <span class="tooltiptext">Acto en el que una autoridad recibe con carácter oficial a las personas que quieren conversar con él, generalmente para exponer, reclamar o solicitar alguna cosa.</span></span>`;
      case 'autoridad competente':
      case 'autoridades competentes':
        return `<span class="tooltip" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')} <span class="tooltiptext">Cualquiera autoridad pública con poder para dictar reglamentos, órdenes, decretos u otras instrucciones que tengan fuerza de ley.</span></span>`;
      case 'juez de control de garantías':
        return `<span class="tooltip" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')} <span class="tooltiptext">Es el juez que realiza un control previo o posterior a casos donde se afectan derechos fundamentales.</span></span>`;
      case 'recurso de apelación':
      case 'recurso de reposición y apelación':
        return `<span class="tooltip" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')} <span class="tooltiptext">Trámite que se hace con el fin de que una resolución sea revocada, por un tribunal o autoridad superior al que la dictó.</span></span>`;
      case 'acción de tutela':
        return `<span class="tooltip" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')} <span class="tooltiptext">Es el acto por medio del cual se otorga protección, defensa y custodia de alguien o de algo.</span></span>`;
      case 'cerrem':
        return `<span class="tooltip" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')} <span class="tooltiptext">Este comité interinstitucional tiene por objeto la valoración integral del riesgo y la recomendación de medidas de protección y complementarias.</span></span>`;
      case 'protocolo':
        return `<span class="tooltip" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')} <span class="tooltiptext">Conjunto de reglas que rigen un asunto.</span></span>`;
      default:
        return `<span onclick="alert('No tenemos definición')" style="border-bottom: 1px dotted black; cursor: pointer">${children.join('')}</span>`;
    }
  }
 
  // Return null to stick with the default behavior for everything else
  return null;
}