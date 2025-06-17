export const formatYearRange = ({
  from,
  present = "present",
  separator = "–",
  to,
}: {
  from: ConstructorParameters<DateConstructor>[0];
  to?: ConstructorParameters<DateConstructor>[0];
  present?: string;
  separator?: string;
}) => {
  if (!to) return `${new Date(from).getFullYear()}${separator}${present}`;

  const now = new Date();
  const range = { from: new Date(from), to: new Date(to) };
  const year = { from: range.from.getFullYear(), to: range.to.getFullYear() };

  if (now.getFullYear() === year.to && now.getMonth() === range.to.getMonth()) {
    return `${year.from}${separator}${present}`;
  }

  return year.from === year.to ? year.to : `${year.from}${separator}${year.to}`;
};
