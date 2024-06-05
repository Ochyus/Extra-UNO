import { beforeEach, describe, expect, it } from 'vitest';
import Card from '../ts/Card.js';

describe('Tests for the Card class', () => {
    let CardTest;
  
  beforeEach(() => {
    CardTest = new Card("Plus 4", "None", -1, true);
  });
    describe('Getters', () => {
    it('getCardType()', () => {
      expect(CardTest.getCardType()).toBe("Plus 4");
    });
  
    it('getCardColor()', () => {
      expect(CardTest.getCardColor()).toBe("None");
    });
  
    it('getCardNumber()', () => {
      expect(CardTest.getCardNumber()).toBe(-1);
    });

    it('getIsWild()', () => {
      expect(CardTest.getIsColored()).toBe(true);
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
    it('setIsWild()', () => {
        CardTest.setIsColored(true);
        expect(CardTest.getIsColored()).toBe(true);
    });
  });
  });