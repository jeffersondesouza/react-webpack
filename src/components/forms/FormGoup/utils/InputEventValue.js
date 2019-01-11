const inputEventValue = (event) => {
  event.persist();

  const target = event.target;
  const name = target.name;

  const value = (target.type === 'checkbox')
    ? target.checked
    : target.value;

  return {
    name,
    value,
    target
  }
}

export {
  inputEventValue
}