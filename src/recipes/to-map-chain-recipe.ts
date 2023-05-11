import { ToMapChainIngredients } from './ingredients';
import { toMapChainReduceRecipe } from './to-map-chain-reduce-recipe';
import { toChainRecipeFactory } from './to-object-chain-recipe';

export function toMapChainRecipe(ing: ToMapChainIngredients) {
  return toChainRecipeFactory(toMapChainReduceRecipe(ing));
}
