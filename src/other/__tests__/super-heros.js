import { getFlyingSuperHeroes } from '../super-heroes'

test('returns super heros that can fly', () => {
  const flyingHeroes = getFlyingSuperHeroes()
  expect(flyingHeroes).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Apogee",
        "powers": Array [
          "gravity control",
          "fly",
        ],
      },
      Object {
        "name": "Jack-Jack",
        "powers": Array [
          "shapeshifting",
          "fly",
        ],
      },
    ]
  `)
})
