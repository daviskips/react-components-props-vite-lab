function Article(props) {
  const dateStr = props.date || "January 1, 1970";
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{dateStr}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;