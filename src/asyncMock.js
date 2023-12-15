// const products = [
//    {
//        id: '1',
//         artist: 'Patti Smith',
//         album: 'Horses',
//         price: 1800,
//         category: 'Vinyl',
//         img: 'https://www.rockandpop.cl/wp-content/uploads/2019/08/PATTI-SMITH-HORSES-COVER.jpg',
//         stock: 20,
//     },
//     {
//         id: '2',
//         artist: 'Mariina Bertoldi',
//         album: 'Mojigata',
//         price: 1500,
//         category: 'Vinyl',
//         img: 'https://indieclubargentina.com/wp-content/uploads/2022/04/Portada-2022-Indie-Club-19801320-13.jpg',
//         stock: 20,
//     },
//     {
//         id: '3',
//         artist: 'Billie Eilish',
//         album: 'Happier Than Ever',
//         price: 2000,
//         category: 'Vinyl',
//         img: 'https://m.media-amazon.com/images/I/71laVfWEkCS._UF1000,1000_QL80_.jpg',
//         stock: 20,
//     },
// ]

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 500)
//     })
// }

// export const getProductById = (productId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === productId))
//         }, 500);
//     })
// }

// export const getProductByCategory = (productCategory) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.category === productCategory))
//         }, 500);
//     })
// }