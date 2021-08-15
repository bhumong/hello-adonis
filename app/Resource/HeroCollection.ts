import Hero from "App/Models/Hero";
import HeroResource from "./HeroResource";

export default class HeroCollection {

  protected collect = HeroResource;

  constructor(protected resource: Hero[]) {
  }

  public static resourceJson(hero: Hero[]): any[] {
    return (new this(hero)).toJson();
  }

  public toJson(): any[] {
    return this.resource.map((hero: Hero) => {
      return this.collect.resourceJson(hero);
    });
  }
}
