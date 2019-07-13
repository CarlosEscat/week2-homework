
class ShoppingCart{

    constructor(name) {
        this.name = name
        this.cart = []
      }
  
      getItems(){
          return this.cart
      }

      addItem(itemName, quantity, price){
        const data = {'name': itemName, 'quantity': quantity, 'pricePerUnit': price}
        return this.cart.push(data)
      }

      clear(){
          return this.cart=[]
      }

      total(){
         
          const totalPrice = this.cart.reduce((total, currentItem) => {
              return total + (currentItem.quantity * currentItem.pricePerUnit)
          }, 0)
          return totalPrice
      }
  
    
}

module.exports = ShoppingCart