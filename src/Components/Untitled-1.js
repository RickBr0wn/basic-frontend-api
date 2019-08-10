function objectCreator() {
  let life = 10
  let str = 10

  function getLife(life) {
    return life
  }

  function takeHit() {
    life -= 1
    return getLife(life)
  }

  function eatFood() {
    life += 2
    return getLife(life)
  }

  function attack() {
    return `Swings his massive axe for ${str} damage`
  }

  return { getLife, takeHit, eatFood, attack }
}

const obj = objectCreator() //?

obj.takeHit() //?
obj.eatFood() //?
obj.attack() //?
