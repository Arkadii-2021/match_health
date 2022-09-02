import {
  Character, Magician, Daemon,
} from '../characters';

const magician = new Magician();
const daemon = new Daemon();

const characterNormalAttacks = [
  ['Magician', magician.attack(2), 10],
  ['Daemon', daemon.attack(2), 10],
];

const handlerAttack = test.each(characterNormalAttacks);
handlerAttack('test linear attack functions on character %s', (_, attack, healthValue) => {
  expect(daemon.health).toBe(healthValue);
  expect(magician.health).toBe(healthValue);
});

const magician2 = new Magician();
const daemon2 = new Daemon();

const characterStonedAttacks = [
  ['Magician', magician2.stoned(2), 15],
  ['Daemon', daemon2.stoned(2), 15],
];

const handlerStonedAttack = test.each(characterStonedAttacks);
handlerStonedAttack('test stoned attack functions on character %s', (_, attack, healthValue) => {
  expect(daemon2.health).toBe(healthValue);
  expect(magician2.health).toBe(healthValue);
});
