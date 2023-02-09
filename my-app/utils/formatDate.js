export function formatDate(date) {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  console.log(date);
  console.log(d);
  const [{ value: mo }, { value: da }, { value: ye }] = dtf.formatToParts(d);

  return `${da} ${mo} ${ye}`;

  console.log(dtf);
}
