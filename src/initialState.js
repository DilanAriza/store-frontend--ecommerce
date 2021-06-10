const initialState = {
    "user": {
        "name": "Dilan Santiago Ariza Cañon",
        "email": "dilansantiagoariza@gmail.com",
    },
    "product": {},
    "myCart": [],
    "tax": 5,
    "priceCart": 0,
    "trends": [{
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
    }, {
        "id": 5,
        "title": "Vestido Elegante Dama",
        "price": 95,
        "rating": 4,
        "cover": "https://images.unsplash.com/photo-1571682262898-48532c58b3a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
    }, {
        "id": 6,
        "title": "Vestido Elegante Caballero",
        "price": 80,
        "rating": 3,
        "cover": "https://images.unsplash.com/photo-1548454782-15b189d129ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
    }, {
        "id": 7,
        "title": "Vestido Elegante Casual Dama",
        "price": 110,
        "rating": 4,
        "cover": "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
    }, {
        "id": 8,
        "title": "Vestido Semi Casual Dama",
        "price": 90,
        "rating": 3,
        "cover": "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore magni vel, tenetur labore quas, odit eaque quos nobis inventore mollitia temporibus cumque alias sit ea cupiditate perferendis exercitationem incidunt. Ullam temporibus quas perspiciatis ex aliquam nihil eveniet consequuntur quam illum quos. Doloribus, quibusdam.",
    }, ],
}

export default initialState;