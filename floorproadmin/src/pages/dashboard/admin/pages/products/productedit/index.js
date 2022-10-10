import React from "react";
import "./index.css";

export const ProductEdit = () => {
  return (
    <>
    <div class="container mt-5 mb-5">
    <div class="card">
        <div class="row g-0">
            <div class="col-md-6 border-end">
                <div class="d-flex flex-column justify-content-center">
                    <div class="main_image"><img src="https://i.imgur.com/TAzli1U.jpg" id="main_product_image" width="350"/>
                    </div>
                    <div class="thumbnail_images">
                        <ul id="thumbnail">
                            <li><img onclick="changeImage(this)" src="https://i.imgur.com/TAzli1U.jpg" width="70"/></li>
                            <li><img onclick="changeImage(this)" src="https://i.imgur.com/w6kEctd.jpg" width="70"/></li>
                            <li><img onclick="changeImage(this)" src="https://i.imgur.com/L7hFD8X.jpg" width="70"/></li>
                            <li><img onclick="changeImage(this)" src="https://i.imgur.com/6ZufmNS.jpg" width="70"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 right-side">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>Minimal Led Tile</h3> <span class="heart"><i class='bx bx-heart'></i></span>
                    </div>
                    <div class="mt-2 pr-3 content">
                        <p>TOP COLLECTIONS 2022Gives you the Excellent and luxurious finishingGet 50% off all products</p>
                    </div>
                    <h3>NGN50,000</h3>
                    <div class="ratings d-flex flex-row align-items-center">
                        <div class="d-flex flex-row"> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bx-star' ></i> </div>
                        <span>441 reviews</span>
                    </div>
                    <div class="mt-5"> <span class="fw-bold">Color</span>
                        <div class="colors">
                            <ul id="marker">
                                <li id="marker-1"></li>
                                <li id="marker-2"></li>
                                <li id="marker-3"></li>
                                <li id="marker-4"></li>
                                <li id="marker-5"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="buttons d-flex flex-row mt-5 gap-3">
                        <button class="btn btn-outline-dark">Edit</button>
                        <button class="btn btn-dark">Delete</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};