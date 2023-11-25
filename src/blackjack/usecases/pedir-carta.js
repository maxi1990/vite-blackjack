/**
 * @param {Array<string>} deck es un arreglo de string
 * @returns {String} retornar la carta del deck
 */

export const pedirCarta = (deck) => {


    if ( !deck ||  deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}