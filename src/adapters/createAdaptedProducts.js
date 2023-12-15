export const createAdaptedProducts = (doc) => {
    const fields = doc.data()

    return {
        id: doc.id,
        artist: fields.artist,
        img: fields.img,
        stock: fields.stock,
        category: fields.category,
        price: fields.price,
        name: fields.name,
        city: fields.city,
        date: fields.date,
        url: fields.url,
        album: fields.album,
        type: fields.type,

    }
}