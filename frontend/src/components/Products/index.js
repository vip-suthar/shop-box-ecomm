import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import ProductCard from '../commons/ProductCard';

function ProductsScreen(props) {

  const _list = [{
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
  }];


  return (
    <div class="container-fluid pt-5">
      <div class="row px-xl-5">
        <Sidebar />

        <div class="col-lg-9 col-md-12">
          <div class="row pb-3">
            <Topbar />

            {_list.map((item, i) => {
              return (
                <div key={i} class="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <ProductCard prodData={item} />
                </div>
              )
            })}

            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductsScreen;
