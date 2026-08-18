import Article from "./Article";

function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id ?? post.title} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
