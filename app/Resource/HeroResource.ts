import Hero from "App/Models/Hero";

export default class HeroResource {
  constructor(protected resource: Hero) {

  }

  public static resourceJson(hero: Hero): Object {
    return (new this(hero)).toJson();
  }

  public toJson(): Object {
    return {
      id: this.resource.id,
      name: this.resource.name,
      createdAt: this.resource.createdAt,
      updatedAt: this.resource.updatedAt,
    }
  }
}
