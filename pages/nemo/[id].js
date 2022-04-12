export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((nemo) => {
    return {
      params: { id: nemo.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
  const data = await res.json();

  return {
    props: { nemo: data },
  };
};

function Details({ nemo }) {
  return (
    <div>
      <h1>Details Page</h1>
      <h3>{nemo.name}</h3>
      <p>{nemo.website}</p>
      <p>{nemo.phone}</p>
      <p>{nemo.email}</p>
    </div>
  );
}

export default Details;
