import { beforeEach, describe, expect, it } from 'vitest';
import Card from '../script/Card.js';

describe('Tests for the Card class', () => {
  let CardTest: Card;
  
  beforeEach(() => {
    CardTest = new Card();
  });
    describe('Getters', () => {

    it('getCardType()', () => {
      expect(CardTest.getCardType()).toBe("None");
    });
  
    it('getCardColor()', () => {
      expect(CardTest.getCardColor()).toBe("None");
    });
  
    it('getCardNumber()', () => {
      expect(CardTest.getCardNumber()).toBe(-1);
    });

    it('getIsWild()', () => {
      expect(CardTest.getIsColored()).toBe(false);
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
  describe("Other functionalities", () => {

    it('setCardType()', () => {
        CardTest.setCardType("Wild");
        expect(CardTest.isCard()).toBe(false);
        CardTest.setCardType("Wild");
        expect(CardTest.isCard()).toBe(false);
        CardTest.setCardColor("Blue");
        expect(CardTest.isCard()).toBe(false);
        CardTest.setCardNumber(2);
        expect(CardTest.isCard()).toBe(false);
        CardTest.setIsColored(true);
        expect(CardTest.isCard()).toBe(true);
    });
  });
  });