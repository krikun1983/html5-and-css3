class Products {
  render() {
    let htmlCatalog = '';
    CATALOG.forEach(({ id, name, img, price }) => {
      htmlCatalog += `
        <li>
          <span>${name}</span>
          <img src=${img} alt=${name}/>
          <span>${price}</span>
          <button type="button">Добавить в корзину</button>
        </li>
      `;
    });
    const html = `
      <ul>
        ${htmlCatalog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  };
}

const productsPage = new Products();
productsPage.render();