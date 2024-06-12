import { beforeEach, describe, expect, it } from 'vitest';
import Deck from '../script/Deck.js';

describe('Tests for the Deck class', () => {
    let deckTest: Deck;

    beforeEach(() => {
        deckTest = new Deck();
    });

    describe('test if deck is created correctly', () => {

        it('test if deck size is accurate', () => {
            expect(deckTest.getDeck().length).toBe(270);
        });

        it('test if all cards in shuffled deck are there', () => {
            deckTest.shuffle(deckTest.getDeck());
            expect(deckTest.getDeck().length).toBe(270);
        });
    });
})