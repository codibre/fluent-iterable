import { ToMapChainIngredients } from './ingredients';
import { chainRecipeFactory } from './to-object-chain-reduce-recipe';

export function toMapChainReduceRecipe(ing: ToMapChainIngredients) {
  return chainRecipeFactory(ing.reduce, ing, ing.toMap);
}
