export function convertMinusToNewLine(string) {
  if (stringIsEmpty(string)) {
    return undefined;
  }

  return string.split("-").map((text) => (
    <text>
      - {text}
      <br />
    </text>
  ));
}

export function stringIsEmpty(string) {
  return string === undefined || string === null || string === "";
}
