import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Teste',
        'Teste de uma simples descrição',
        'https://getsmartratsolutions.com/wp-content/uploads/2021/11/thanksgiving-recipe-ideas.jpg',
        [
          new Ingredient('Comida', 1),
          new Ingredient('Alimento', 2)
        ]),
        new Recipe('Outro teste',
        'Outro teste de uma simples descrição',
        'https://getsmartratsolutions.com/wp-content/uploads/2021/11/thanksgiving-recipe-ideas.jpg',
        [
          new Ingredient('Bananona', 5),
          new Ingredient('Agua', 2),
          new Ingredient('Queijo', 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}
