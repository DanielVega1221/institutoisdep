/* Sincroniza las capas superpuestas del navbar (menú overlay y modal de Material)
   con el historial del navegador, para que el botón "volver" las cierre.

   El modelo es una entrada de historial invisible: al abrir una capa se apila una
   entrada extra marcada con una bandera dentro de history.state, sobre la misma
   URL. "Volver" saca esa entrada y el popstate cierra la UI, sin cambiar de página.

   Invariante: history.state[OVERLAY_FLAG] === true  <=>  hay una capa abierta.

   Ojo con el spread de history.state: react-router guarda ahí { usr, key, idx }.
   Escribir un objeto nuevo rompería su contabilidad interna (y con ella el
   navigate('/', { state }) de las secciones del home), así que siempre se preserva.
   React Router hace lo mismo en sus propios push/replace, por eso la bandera
   sobrevive a las navegaciones. */

const OVERLAY_FLAG = "__isdepOverlay";

export const isOverlayMarked = () => Boolean(window.history.state?.[OVERLAY_FLAG]);

// Apila la entrada del marcador. Idempotente: si ya hay una capa abierta, la
// entrada actual ya la representa y no hay que apilar una segunda.
export const markOverlay = () => {
  if (isOverlayMarked()) return;
  window.history.pushState(
    { ...window.history.state, [OVERLAY_FLAG]: true },
    "",
    window.location.href,
  );
};

// Limpia la bandera de la entrada actual. Se usa al montar (por si se recargó la
// página con una capa abierta) y como último recurso. No navegar: replaceState
// no dispara popstate, así que la URL y la posición en el historial no cambian.
export const clearOverlay = () => {
  const state = window.history.state;
  if (!state?.[OVERLAY_FLAG]) return;
  const { [OVERLAY_FLAG]: _omit, ...rest } = state;
  window.history.replaceState(rest, "", window.location.href);
};
