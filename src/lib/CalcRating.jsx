export const score = (data) => {
  const newArray = data.violations.concat(data.passes);

  const numModerate = newArray
    .map((vio) => {
      return vio.impact === "moderate";
    })
    .filter(Boolean);

  const numCritical = newArray
    .map((vio) => {
      return vio.impact === "critical";
    })
    .filter(Boolean);

  const numMinor = newArray
    .map((vio) => {
      return vio.impact === "minor";
    })
    .filter(Boolean);

  const numSerious = newArray
    .map((vio) => {
      return vio.impact === "serious";
    })
    .filter(Boolean);

  const p2 = numCritical.length + numSerious.length;
  const p1 = numModerate.length;
  const p0 = numMinor.length;
  const total = p2 + p1 + p0;

  const res = Math.round(((0.4 * p2 + 0.8 * p1 + p0) / total) * 100);

  return res;
};
