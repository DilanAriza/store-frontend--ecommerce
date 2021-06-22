const initialState = {
    "user": {
        "name": "Dilan Santiago Ariza Cañon",
        "email": "dilansantiagoariza@gmail.com",
    },
    "product": {}, // Producto en concreto que estoy mirando xd
    "myCart": [], // Productos en el carrito
    "tax": 5, // Impuesto
    "priceCart": 0, // Precio actual de todo el carrito
    "products": [{
            "id": 1,
            "title": "Gabardina Caballero",
            "price": 120,
            "rating": 4,
            "cover": "https://images.unsplash.com/photo-1612462765825-15204611a1b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        }, {
            "id": 2,
            "title": "Traje Pantalon Dama",
            "price": 80,
            "rating": 5,
            "cover": "https://images.unsplash.com/photo-1553335719-239c2726dd15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        }, {
            "id": 3,
            "title": "Vestido Elegante Caballero",
            "price": 100,
            "rating": 4,
            "cover": "https://images.unsplash.com/photo-1520975829288-0493fb89e574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        }, {
            "id": 4,
            "title": "Vestido Boda Dama",
            "price": 350,
            "rating": 5,
            "cover": "https://images.unsplash.com/flagged/photo-1577854362336-ec93f79d06ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 5,
            "title": "Vestido primaveral mujer",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/6971877/pexels-photo-6971877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        }, {
            "id": 6,
            "title": "Vestido Elegante Dama",
            "price": 95,
            "rating": 4,
            "cover": "https://images.unsplash.com/photo-1571682262898-48532c58b3a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        }, {
            "id": 7,
            "title": "Vestido Elegante Caballero",
            "price": 80,
            "rating": 3,
            "cover": "https://images.unsplash.com/photo-1548454782-15b189d129ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 8,
            "title": "Vestido Elegante Casual Dama",
            "price": 110,
            "rating": 4,
            "cover": "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        }, {
            "id": 9,
            "title": "Vestido Semi Casual Dama",
            "price": 90,
            "rating": 3,
            "cover": "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 10,
            "title": "Buzo elegante caballero",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/7063784/pexels-photo-7063784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 11,
            "title": "Vestido elegante dama",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/6986518/pexels-photo-6986518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 12,
            "title": "Vestido Azul dama",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/6940649/pexels-photo-6940649.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 13,
            "title": "Vestido elegante hombre",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/6206970/pexels-photo-6206970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 14,
            "title": "Vestido Elegante caballero",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/4195345/pexels-photo-4195345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 15,
            "title": "Buzo elegante Caballero",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/4600308/pexels-photo-4600308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },
        {
            "id": 16,
            "title": "Gabardina mujer",
            "price": 90,
            "rating": 3,
            "cover": "https://images.pexels.com/photos/5999953/pexels-photo-5999953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1080",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
        },

    ],
    "categories": [{
        "id": 1,
        "title": "Elegante",
        "rating": 4,
        "cover": "https://via.placeholder.com/300.png/000/fff"
    }, {
        "id": 1,
        "title": "Casual",
        "rating": 4,
        "cover": "https://via.placeholder.com/300.png/000/fff"
    }, {
        "id": 1,
        "title": "Especial",
        "rating": 4,
        "cover": "https://via.placeholder.com/300.png/000/fff"
    }, ]
}

export default initialState;