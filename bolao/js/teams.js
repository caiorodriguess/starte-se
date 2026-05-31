// Mapa de seleções -> bandeira (emoji). Usado só para enfeitar.
// Se o time não estiver aqui, usamos ⚽. Edite à vontade.
import { slug } from "./db.js";

const FLAGS = {
  brasil: "🇧🇷", argentina: "🇦🇷", uruguai: "🇺🇾", chile: "🇨🇱",
  colombia: "🇨🇴", peru: "🇵🇪", paraguai: "🇵🇾", equador: "🇪🇨",
  bolivia: "🇧🇴", venezuela: "🇻🇪",
  "estados-unidos": "🇺🇸", eua: "🇺🇸", mexico: "🇲🇽", canada: "🇨🇦",
  "costa-rica": "🇨🇷", panama: "🇵🇦", honduras: "🇭🇳", jamaica: "🇯🇲",
  franca: "🇫🇷", alemanha: "🇩🇪", espanha: "🇪🇸", portugal: "🇵🇹",
  inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", italia: "🇮🇹", holanda: "🇳🇱", "paises-baixos": "🇳🇱",
  belgica: "🇧🇪", croacia: "🇭🇷", suica: "🇨🇭", dinamarca: "🇩🇰",
  polonia: "🇵🇱", servia: "🇷🇸", austria: "🇦🇹", "pais-de-gales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  escocia: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", noruega: "🇳🇴", suecia: "🇸🇪", ucrania: "🇺🇦",
  turquia: "🇹🇷", grecia: "🇬🇷", "republica-tcheca": "🇨🇿", hungria: "🇭🇺",
  marrocos: "🇲🇦", senegal: "🇸🇳", tunisia: "🇹🇳", argelia: "🇩🇿",
  egito: "🇪🇬", camaroes: "🇨🇲", gana: "🇬🇭", nigeria: "🇳🇬",
  "costa-do-marfim": "🇨🇮", "africa-do-sul": "🇿🇦", mali: "🇲🇱",
  japao: "🇯🇵", "coreia-do-sul": "🇰🇷", "arabia-saudita": "🇸🇦",
  ira: "🇮🇷", iraque: "🇮🇶", catar: "🇶🇦", "emirados-arabes": "🇦🇪",
  australia: "🇦🇺", "nova-zelandia": "🇳🇿", uzbequistao: "🇺🇿"
};

export function flagOf(team) {
  return FLAGS[slug(team)] || "⚽";
}
