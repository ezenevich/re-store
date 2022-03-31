export default class BookStoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
    }
    ,
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 41,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
    }
    ,
    {
      id: 3,
      title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
      author: 'Marijn Haverbeke ',
      price: 24,
      coverImage: 'https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY218_.jpg'
    }
    ,
    {
      id: 4,
      title: 'React: Up & Running: Building Web Applications',
      author: 'Stoyan Stefanov',
      price: 30,
      coverImage: 'https://m.media-amazon.com/images/I/81h9Ilh0nIL._AC_UY218_.jpg'
    }
    ,
    {
      id: 5,
      title: 'Beginning Node.js, Express & MongoDB Development',
      author: 'Greg Lim ',
      price: 10,
      coverImage: 'https://m.media-amazon.com/images/I/61w5eUdyIsL._AC_UY218_.jpg'
    }
  ]

  
  getBooks() {
    return new Promise((ressolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something wrong'))
        }
        else {
          ressolve(this.data)
        }
      }, 700)
    })
  }

}