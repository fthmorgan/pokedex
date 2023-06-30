export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickname = data.species.name
    this.img = data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types.type.name
    this.id = data.id

  }
}