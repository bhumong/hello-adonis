import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('heroes', 'Api/HeroController.index');
}).prefix('api');
