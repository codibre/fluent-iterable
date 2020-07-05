export function withIndexRecipe(map: Function) {
  return (iterable: any): any => {
    let idx = 0;
    return map(iterable, (t: any) => ({ idx: idx++, value: t }));
  };
}
