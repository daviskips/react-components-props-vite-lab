function getReadingTimeLabel(minutes = 0) {
  if (minutes < 30) {
    const coffeeCount = Math.ceil(minutes / 5);
    return `${"☕️".repeat(coffeeCount)} ${minutes} min read`;
  }

  const bentoCount = Math.ceil(minutes / 10);
  return `${"🍱".repeat(bentoCount)} ${minutes} min read`;
}

function Article({ title, date = "January 1, 1970", preview, minutes = 0 }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes ? <p>{getReadingTimeLabel(minutes)}</p> : null}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
