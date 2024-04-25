export const score = (data) => {
  const newArray = data.violations.concat(data.passes);

  const critical = newArray.filter((one) => one.impact === "critical");

  const serious = newArray.filter((one) => one.impact === "serious");

  const major = critical.concat(serious);

  const moderate = newArray.filter((one) => one.impact === "moderate");

  const minor = newArray.filter((one) => one.impact === "minor");

  const p2 = major.length;
  const p1 = moderate.length;
  const p0 = minor.length;
  const total = p2 + p1 + p0;

  const res = Math.round(((0.4 * p2 + 0.8 * p1 + p0) / total) * 100);

  return [res, major, moderate, minor];
};
