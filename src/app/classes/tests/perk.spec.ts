import { PERK_LIST, DeckModifier } from '../deckModifier';

describe('Perk', () => {
    Object.keys(PERK_LIST).forEach(key => {
        it(`should create an instance of '${key}'`, () => {
            expect(new DeckModifier(key, 1, PERK_LIST[key])).toBeTruthy(`'[${key}] is not truthy`);
        });
    });

    Object.keys(PERK_LIST).forEach(key => {
        /*
        it(`should have reversable perks '${key}'`, () => {
            const char = new Character()
            const deck = new Deck();
            const originalDeck: Deck = Utils.clone(deck);

            PERK_LIST[key](deck);

            PERK_LIST[key].set(deck);
            PERK_LIST[key].unset(deck);

            expect(deck.cards).toEqual(originalDeck.cards, `"${key}" cards aren't reversable`);
            expect(deck.effects).toEqual(originalDeck.effects, `"${key}" effects aren't reversable`);
        });
        */
    });
});
