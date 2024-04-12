const nomeProduto = document.querySelectorAll('.cart-item__name');

for (let itens of nomeProduto){
    const produtoAssinatura = itens.innerText.split(' ');
    if(produtoAssinatura[0] === "Assinatura"){
        const subscribe = document.querySelector('.title--primary');
        const criaBanner = document.createElement('div');
        const tela = window.innerWidth;
            if( tela < 480){
                criaBanner.innerHTML = `<a href='https://coffeemais.com/cart/add?id=43437499777180&quantity=1'>
                <img src='https://cdn.shopify.com/s/files/1/0421/4764/3548/files/Banner-Cafebras-Cart-Mobile.png?v=1712942111' style='margin-top:25px; width:100%;'>
            </a>`;
            } else {
                criaBanner.innerHTML = `<a href='https://coffeemais.com/cart/add?id=43437499777180&quantity=1'>
                <img src='https://cdn.shopify.com/s/files/1/0421/4764/3548/files/01-01.png?v=1712940131' style='margin-top:25px;' width='800' heigth='200'>
            </a>`;
            }
        subscribe.append(criaBanner);
        console.log(produtoAssinatura);
        break;
    }
}


