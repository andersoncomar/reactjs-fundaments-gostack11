const formatDate = (value: Date): string =>
  Intl.DateTimeFormat().format(new Date(value));

export default formatDate;
