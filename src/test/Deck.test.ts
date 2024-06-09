import { beforeEach, describe, expect, it } from 'vitest';
import Deck from '../script/Deck.js';

describe('Tests for the Deck class', () => {
    let deckTest: Deck;

    beforeEach(() => {
        deckTest = new Deck();
    });

    describe('test if deck is created correctly', () => {

        it('test ii deck size is accurate', () => {
            expect(deckTest.getDeckSize()).toBe(239);
        });
    });
})