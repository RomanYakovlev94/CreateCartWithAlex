const store = document.getElementById('dinamic-store');
const cart = document.getElementById('dinamic-cart');



class StoreItem {
    elem = document.createElement('div');
    className = 'cardWrap';
    constructor(goodImg, goodName, tradesDescription, price, id, usd, buyBtn){
      this.img = goodImg;
      this.goodName = goodName;
      this.tradesDescription = tradesDescription;
      this.price = price;
      this.id = id;
      this.usd = usd;
      this.buyBtn = buyBtn;
    }

}


fetch('goods.json')
.then(text => text.json())
.then(data =>{
    let apiValute = 'https://www.cbr-xml-daily.ru/daily_json.js'
    fetch(apiValute)
    .then(text => text.json())
    .then(dataUSD =>{
        let usd = (dataUSD.Valute.USD.Value)
        for(let elem of data){
            let obj = new StoreItem(elem.goodImg, elem.goodName, elem.tradesDescription, elem.price, count,usd)
            obj.create();
            obj.elem.addEventListener('click', () =>{
                let objBusket = new BusketCard(elem.goodImg, elem.goodName, elem.tradesDescription, elem.price, elem.id, count,usd);
                objBusket.create()
                let arrValuesGoods = Object.values(obj);
            })      
        }
    })    
    
});
