import { beforeEach, describe, expect, it } from 'vitest';
import Settings from '../script/Settings.js';

describe('Tests for the Settings class', () => {
    let SettingsTest: Settings;
    
    beforeEach(() => {
        SettingsTest = new Settings();
    });
    describe('Getters', () => {
        it('getSwap0()', () => {
            expect(SettingsTest.getSwap0()).toBe(false);
        });
        it('getShift8()', () => {
            expect(SettingsTest.getShift8()).toBe(false);
        });
        it('getCanStack()', () => {
            expect(SettingsTest.getCanStack()).toBe(false);
        });
        it('getWillAlwaysDraw()', () => {
            expect(SettingsTest.getWillAlwaysDraw()).toBe(false);
        });
        it('getPlayAfterDraw()', () => {
            expect(SettingsTest.getPlayAfterDraw()).toBe(false);
        });
    });
    describe('Setters', () => {
        it('set0And8()', () => {
            SettingsTest.set0And8(true);
            expect(SettingsTest.getSwap0()).toBe(true);
            expect(SettingsTest.getShift8()).toBe(true);
        });
        it('setCanStack()', () => {
            SettingsTest.setCanStack(true);
            expect(SettingsTest.getCanStack()).toBe(true);
        });
        it('setWillAlwaysDraw()', () => {
            SettingsTest.setWillAlwaysDraw(true);
            expect(SettingsTest.getWillAlwaysDraw()).toBe(true);
        });
        it('setPlayAfterDraw()', () => {
            SettingsTest.setPlayAfterDraw(true);
            expect(SettingsTest.getPlayAfterDraw()).toBe(true);
        });
    });
})