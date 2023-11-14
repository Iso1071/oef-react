function Sum({ numbers }) {
  let total = 0;

  for (const item of numbers) {
    total += item;
  }

  return (
    <>
      <p>{total}</p>
    </>
  );
}

export default Sum;
