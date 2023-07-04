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

describe('walk', () => {
    it('should increase fitness by 4', function () {
        const pet = new Pet();
        pet.fitness = 3;
        pet.walk();
        expect(pet.fitness).toEqual(7);
    });
    it('should cap fitness at 10', function () {
        const pet = new Pet();
        pet.fitness = 7;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
})

describe('feed', () => {
    it('should decrease hunger by 3', function () {
        const pet = new Pet();
        pet.hunger = 4;
        pet.feed();
        expect(pet.hunger).toEqual(1);
    });
    it('should reduce hunger to 0', function () {
        const pet = new Pet();
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
})
