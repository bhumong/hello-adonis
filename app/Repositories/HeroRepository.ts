import Hero from "App/Models/Hero"

export class HeroRepository {
  public findAll() {
    return Hero.all();
  }

  public find(id: number) {
    return Hero.query().where('id', '=', id).firstOrFail();
  }

  public update(id: number, { name }) {
    name = String(name).trim();
    return Hero.query().where('id', '=', id).update({ name });
  }

  public delete(id: number) {
    return Hero.query().where('id', '=', id).delete();
  }

  public create({ name }) {
    name = String(name).trim();
    const hero = Hero.create({ name });
    return hero;
  }
}

export default new HeroRepository();


