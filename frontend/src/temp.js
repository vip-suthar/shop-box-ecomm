// HomeScreen

const sampleProductDetails = {
    "id": "123",
    "title": "Colorful Stylish Shirt",
    "images": [{
        "imgSrc": "/images/p01.jpg",
        "altText": "sample image 1"
    }],
    "starCount": 4.5,
    "ratingCount": 50,
    "reviewCount": 0,
    "origPrice": "$123",
    "delPrice": "$123",
    "shortDesc": "Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.",
    "sizes": ["XS", "S", "M"],
    "colors": ["Black"],
    "description": [
        "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.",
        "Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et."
    ],
    "information": {
        "desc": "Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt."
    },
    "reviews": []
};

const sampleHome = {
    "headerCorousel": [{
        "imgSrc": "/images/p01.jpg",
        "altText": "sample image 1",
        "offerText": "sample offer 1",
        "headingText": "sample heading 1",
        "refLink": "http://src.abc/img/"
    }, {
        "imgSrc": "/images/p02.jpg",
        "altText": "sample image 2",
        "offerText": "sample offer 2",
        "headingText": "sample heading 2",
        "refLink": "http://src.abc/img/"
    }, {
        "imgSrc": "/images/p03.jpg",
        "altText": "sample image 3",
        "offerText": "sample offer 3",
        "headingText": "sample heading 3",
        "refLink": "http://src.abc/img/"
    }],
    "featuresList": [{
        "icon": "fa fa-check",
        "title": "Quality Product"
    }, {
        "icon": "fa fa-check",
        "title": "Quality Product"
    }, {
        "icon": "fa fa-check",
        "title": "Quality Product"
    }, {
        "icon": "fa fa-check",
        "title": "Quality Product"
    }],
    "categoriesList": [{
        "imgSrc": "/images/p01.jpg",
        "altText": "sample image 1",
        "catTitle": "Men's Dresses",
        "count": 1,
        "refLink": "http://src.abc/img/"
    }],
    "offersList": [{
        "imgSrc": "/images/p01.jpg",
        "altText": "sample image 1",
        "offTitle": "Winter Collection",
        "descText": "Buy winter coll",
        "refLink": "http://src.abc/img/"
    }],
    "trndProducts": [sampleProductDetails],
    "recmProducts": [sampleProductDetails]
};

const sampleUser = {
    "id": "12345",
    "name": "new user",
    "email": "newuser@example.com"
}

const sampleCartData = {
    "cartItems": [],
    "cartSummary": {
        "subTotal": "$0",
        "shipping": "$0",
        "discount": "$0",
        "total": "$0",
    }
}

export {
    sampleHome,
    sampleProductDetails,
    sampleUser,
    sampleCartData
};