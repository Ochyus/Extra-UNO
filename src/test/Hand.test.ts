import { beforeEach, describe, expect, it } from 'vitest';

import Hand from '../script/Hand.js';
import Card from '../script/Card.js';
import Deck from '../script/Deck.js';

describe('Tests for the Hand class', () => {
    let card: Card;
    let deck: Deck;
    let handTest: Hand;

    beforeEach(() => {
        deck = new Deck();
        handTest = new Hand();
    });

    describe('test if hand is created correctly', () => {

        it('test if hand size is accurate', () => {
            let deckSize: number = deck.getDeck().length;
            for (let i: number = 0; i < 7; i++) {
            handTest.getHand().push(deck.removeCard(0));
            }
            expect(handTest.getHand().length).toBe(7);
            expect(deck.getDeck().length).toBe(deckSize - 7);
        });
    });
})