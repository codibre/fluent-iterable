export function withIndexRecipe(map: Function) {
  return function (this: any): any {
    let idx = 0;
    return map.call(this, (t: any) => ({ idx: idx++, value: t }));
  };
}
