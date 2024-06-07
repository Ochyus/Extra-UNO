import { beforeEach, describe, expect, it } from 'vitest';
import Card from '../script/Card.js';

describe('Tests for the Card class', () => {
  let CardTest: Card;

  beforeEach(() => {
    CardTest = new Card();
  });

  describe('Getters', () => {

    it('getCardType()', () => {
      // Test initial card type, should be an empty string
      expect(CardTest.getCardType()).toBe("");
    });

    it('getCardColor()', () => {
      // Test initial card color, should be an empty string
      expect(CardTest.getCardColor()).toBe("");
    });

    it('getCardNumber()', () => {
      // Test initial card number, should be -1
      expect(CardTest.getCardNumber()).toBe(-1);
    });

    it('getCardAction()', () => {
      // Test initial card action, should be an empty string
      expect(CardTest.getCardAction()).toBe("");
    });

    it('getCardName()', () => {
      // Test initial card name, should be an empty string
      expect(CardTest.getCardName()).toBe("");
    });

    it('getIsCard()', () => {
      // Test initial card validity, should be false
      expect(CardTest.getIsCard()).toBe(false);
    });
  });

  describe("Setters", () => {

    it('setCardType()', () => {
      // Test setting and getting card type
      CardTest.setCardType("Wild");
      expect(CardTest.getCardType()).toBe("Wild");
    });

    it('setCardColor()', () => {
      // Test setting and getting card color
      CardTest.setCardColor("Blue");
      expect(CardTest.getCardColor()).toBe("Blue");
    });

    it('setCardNumber()', () => {
      // Test setting and getting card number
      CardTest.setCardNumber(2);
      expect(CardTest.getCardNumber()).toBe(2);
    });

    it('setCardAction()', () => {
      // Test setting and getting card action
      CardTest.setCardAction("Flip");
      expect(CardTest.getCardAction()).toBe("Flip");
    });

    it('setCardName()', () => {
      // Testing the setCardName method
      // Initial state, should return empty string since card is not valid
      CardTest.setIsCard();
      CardTest.setCardName();
      expect(CardTest.getCardName()).toBe("");

      // Setting card type to "Colored Number", should still return empty string as other properties are not set
      CardTest.setCardType("Colored Number");
      CardTest.setIsCard();
      CardTest.setCardName();
      expect(CardTest.getCardName()).toBe("");

      // Setting card color to "Blue", should still return empty string as other properties are not set
      CardTest.setCardColor("Blue");
      CardTest.setIsCard();
      CardTest.setCardName();
      expect(CardTest.getCardName()).toBe("");

      // Setting card number to 2, should still return empty string as other properties are not set
      CardTest.setCardNumber(2);
      CardTest.setIsCard();
      CardTest.setCardName();
      expect(CardTest.getCardName()).toBe("");

      // Setting card action to "None", now all properties are set correctly and card should be valid
      CardTest.setCardAction("None");
      CardTest.setIsCard();
      CardTest.setCardName();
      expect(CardTest.getCardName()).toBe("Blue 2 ");
    });

    it('setIsCard()', () => {
      // Testing the setIsCard method
      // Initial state, should return false since card is not valid
      expect(CardTest.getIsCard()).toBe(false);

      // Setting card type to "Colored Number", should still return false as other properties are not set
      CardTest.setCardType("Colored Number");
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(false);

      // Setting card color to "Blue", should still return false as other properties are not set
      CardTest.setCardColor("Blue");
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(false);

      // Setting card number to 2, should still return false as other properties are not set
      CardTest.setCardNumber(2);
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(false);

      // Setting card action to "None", now all properties are set correctly and card should be valid
      CardTest.setCardAction("None");
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(true);

      // Ensuring setCardName does not affect validity
      CardTest.setCardName();
      CardTest.setIsCard();
      expect(CardTest.getIsCard()).toBe(true);
    });
  });
});
