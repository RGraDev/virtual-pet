const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('returns the name property', () => {
        const pet = new Pet('Fido')
        expect(pet.name).toBe('Fido');
    });
});

describe('growUp', () => {
    it('increments the age by 1, increases hunger by 5, decreases fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
});
