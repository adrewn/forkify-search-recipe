import View from './View.js';
import { Fraction } from 'fractional';
import icons from 'url:../../img/icons.svg';
class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMEssage = 'We couldnt load the recipe, please try another!';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }
  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      const { updateTo } = btn.dataset;
      if (+updateTo > 0) handler(+updateTo);
    });
  }
  _generateMarkupIngredient(ingredient) {
    return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${new Fraction(
          ingredient.quantity
        ).toString()}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ingredient.unit}</span>
          ${ingredient.description}
        </div>
      </li>`;
  }
}

export default new RecipeView();
