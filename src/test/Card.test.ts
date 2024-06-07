import { beforeEach, describe, expect, it } from 'vitest';
import Card from '../script/Card.js';

describe('Tests for the Card class', () => {
  let CardTest: Card;
  
  beforeEach(() => {
    CardTest = new Card();
  });
    describe('Getters', () => {

    it('getCardType()', () => {
      expect(CardTest.getCardType()).toBe("");
    });
  
    it('getCardColor()', () => {
      expect(CardTest.getCardColor()).toBe("");
    });
  
    it('getCardNumber()', () => {
      expect(CardTest.getCardNumber()).toBe(-1);
    });

    it('getCardAction()', () => {
      expect(CardTest.getCardAction()).toBe("");
    });

    it('getCardName()', () => {
      expect(CardTest.getCardName()).toBe("");
    });

    it('getIsCard()', () => {
      expect(CardTest.getIsCard()).toBe(false);
    });
  });
  describe("Setters", () => {

    it('setCardType()', () => {
        CardTest.setCardType("Wild");
        expect(CardTest.getCardType()).toBe("Wild");
    });

    it('setCardColor()', () => {
        CardTest.setCardColor("Blue");
        expect(CardTest.getCardColor()).toBe("Blue");
    });

    it('setCardNumber()', () => {
        CardTest.setCardNumber(2);
        expect(CardTest.getCardNumber()).toBe(2);
    });

    it('setCardAction()', () => {
        CardTest.setCardAction("Flip");
        expect(CardTest.getCardAction()).toBe("Flip");
    });

    it('setCardName()', () => {
        CardTest.setIsCard();
        CardTest.setCardName();
        expect(CardTest.getCardName()).toBe("");
        CardTest.setCardType("Colored Number");
        CardTest.setIsCard();
        CardTest.setCardName();
        expect(CardTest.getCardName()).toBe("");
        CardTest.setCardColor("Blue");
        CardTest.setIsCard();
        CardTest.setCardName();
        expect(CardTest.getCardName()).toBe("");
        CardTest.setCardNumber(2);
        CardTest.setIsCard();
        CardTest.setCardName();
        expect(CardTest.getCardName()).toBe("");
        CardTest.setCardAction("None");
        CardTest.setIsCard();
        CardTest.setCardName();
        expect(CardTest.getCardName()).toBe("Blue 2 ");
    });

    it('setIsCard()', () => {
      expect(CardTest.getIsCard()).toBe(false);
      CardTest.setCardType("Colored Number");
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(false);
      CardTest.setCardColor("Blue");
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(false);
      CardTest.setCardNumber(2);
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(false);
      CardTest.setCardAction("None");
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(true);
      CardTest.setCardName();
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(true);
    });
  });
})