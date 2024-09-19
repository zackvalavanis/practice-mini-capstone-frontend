export function ProductsNew() {
  return (
    <div id="products-new">
      <h1 id='something'>New Product</h1>
      <form>
        <div>
          Name: <input type='text' />
        </div>
        <div>
          Description: <input type='text' />
        </div>
        <div>
          Price: <input type='text' />
        </div>
        <div>
          Image_url: <input type='file' />
        </div>
        <button type='submit'>Create Product</button>
      </form>
    </div>
  );
}
