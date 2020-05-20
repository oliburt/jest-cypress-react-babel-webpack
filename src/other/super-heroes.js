const superHeros = [
  { name: 'Dynaguy', powers: ['disintegration ray', 'fly'] },
  { name: 'Apogee', powers: ['gravity control', 'fly'] },
  { name: 'Blazestone', powers: ['control of fire', 'pyrotechnic discharges'] },
  { name: 'Frozone', powers: ['freeze water'] },
  { name: 'Mr. Incredible', powers: ['physical strength'] },
  { name: 'Elastigirl', powers: ['elasticity'] },
  { name: 'Violet', powers: ['invisibility', 'force fields'] },
  { name: 'Dash', powers: ['speed'] },
  { name: 'Jack-Jack', powers: ['shapeshifting', 'fly'] },
]

function getFlyingSuperHeroes() {
  return superHeros.filter(hero => hero.powers.includes('fly'))
}

export { getFlyingSuperHeroes }
