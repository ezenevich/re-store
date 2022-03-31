import updateBookList from './bookList';
import updateShoppingCart from './shoppingCart';
import updateUserInfo from './userInfo';


const reducer = (state, action) => {

  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    user: updateUserInfo(state, action)
  }
}


export default reducer;