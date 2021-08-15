import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('heroes', 'Api/HeroController.create');
  Route.get('heroes', 'Api/HeroController.index');
  Route.get('heroes/:id', 'Api/HeroController.get');
  Route.patch('heroes/:id', 'Api/HeroController.update');
}).prefix('api');
