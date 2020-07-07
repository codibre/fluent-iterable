export function addCustomMethod(
  object: object,
  name: string,
  operation: Function,
) {
  if (object.hasOwnProperty(name)) {
    throw new Error(`There is already a method called ${name}`);
  }
  Object.assign(object, {
    [name]: operation,
  });
}
