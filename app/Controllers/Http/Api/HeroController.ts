import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hero from 'App/Models/Hero';
import HeroRepository from 'App/Repositories/HeroRepository';
import HeroCollection from 'App/Resource/HeroCollection';
import HeroResource from 'App/Resource/HeroResource';
import CreateHeroValidator from 'App/Validators/CreateHeroValidator';
import UpdateHeroValidator from 'App/Validators/UpdateHeroValidator';

export default class HeroController {
  public async index(ctx: HttpContextContract) {
    let heroes: Hero[] = await HeroRepository.findAll();
    return HeroCollection.resourceJson(heroes);
  }

  public async get(ctx: HttpContextContract) {
    let hero: Hero = await HeroRepository.find(ctx.params.id);
    return HeroResource.resourceJson(hero);
  }

  public async update(ctx: HttpContextContract) {
    await ctx.request.validate(UpdateHeroValidator);
    await HeroRepository
      .update(ctx.params.id, { name: ctx.request.input('name') });
    return {
      success: true,
      message: '',
    }
  }

  public async delete(ctx: HttpContextContract) {
    await HeroRepository
      .delete(ctx.params.id);
    return {
      success: true,
      message: '',
    }
  }

  public async create(ctx: HttpContextContract) {
    await ctx.request.validate(CreateHeroValidator);
    const hero = await HeroRepository.create({ name: ctx.request.input('name') });
    return {
      success: true,
      message: '',
      data: hero,
    }
  }
}
