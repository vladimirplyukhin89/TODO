export function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 1) {
    return text_forms[2];
  }
  if (n1 > 0 && n1 < 2) {
    return text_forms[1];
  }
  if (n1 === 0) {
    return text_forms[0];
  }
  return text_forms[2];
}

export const words = ["all done", "item left", "items left"];
