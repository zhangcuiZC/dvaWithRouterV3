/**
 * 注册model
 * @param {object} model
 */
export function RegisterModel(model) {
  if (
    !(
      global.DvaApp._models.filter(m => m.namespace === model.namespace)
        .length === 1
    )
  ) {
    //eslint-disable-line
    global.DvaApp.model(model);
  }
}
