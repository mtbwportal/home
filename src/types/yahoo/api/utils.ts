export const mustHaveBooleanValue = (parent: Element, tagName: string) => mustHaveStringValue(parent, tagName) === '1';

export const mustHaveNumberValue = (parent: Element, tagName: string) => parseInt(mustHaveStringValue(parent, tagName));

export const mustHaveStringValue = (parent: Element, tagName: string) =>
  parent.getElementsByTagName(tagName).item(0)!.textContent!;

export const mightHaveNumberValue = (parent: Element, tagName: string) => {
  const value = mightHaveStringValue(parent, tagName);
  if (value) {
    try {
      return parseInt(value);
    } catch (e) {}
  }
  return;
};

export const mightHaveStringValue = (parent: Element, tagName: string) => {
  const child = parent.getElementsByTagName(tagName).item(0);
  if (child && child.textContent) {
    return child.textContent;
  }
  return;
};
