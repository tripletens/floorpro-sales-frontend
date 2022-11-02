import React from "react";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";

export const AddCategoryPage = () => {
  return (
    <>
      <DashboardNavbar />
      <div className="row">
        <div className="col-md-2 col-sm-0 col-lg-2 col-xs-0">
          <AdminSidebar />
        </div>
        <div className="col-md-10 col-sm-0 col-lg-10 col-xs-0">
          <div className="container-fluid">
            <div className="row gx-5 mx-3 my-3 px-5">
              <div className="container-xxl">
                <div class="row align-items-center">
                  <div class="border-0 mb-4">
                    <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                      <h3 class="fw-bold mb-0">Categories Add</h3>
                      <button
                        type="submit"
                        class="btn btn-primary py-2 px-5 text-uppercase btn-set-task w-sm-100"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row g-3 mb-3">
                  <div class="col-lg-4">
                    <div class="sticky-lg-top">
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Visibility Status</h6>
                        </div>
                        <div class="card-body">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="couponsstatus"
                              checked=""
                            />
                            <label class="form-check-label">Published</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="couponsstatus"
                            />
                            <label class="form-check-label">Scheduled</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="couponsstatus"
                            />
                            <label class="form-check-label">Hidden</label>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Publish Schedule</h6>
                        </div>
                        <div class="card-body">
                          <div class="row g-3 align-items-center">
                            <div class="col-md-12">
                              <label class="form-label">Publish Date</label>
                              <input type="date" class="form-control w-100" />
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">Publish Time</label>
                              <input type="time" class="form-control w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card mb-3">
                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Categories</h6>
                        </div>
                        <div class="card-body">
                          <label class="form-label">
                            Parent category Select
                          </label>
                          <select
                            class="form-select"
                            size="3"
                            aria-label="size 3 select example"
                          >
                            <option value="2">Clothes</option>
                            <option value="3">Toy</option>
                            <option value="4">Cosmetic</option>
                            <option value="5">Laptop</option>
                            <option value="6">Mobile</option>
                            <option value="7">Watch</option>
                          </select>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header py-3 bg-transparent border-bottom-0">
                          <h6 class="m-0 fw-bold">Categories Image Upload</h6>
                          <small>
                            With event and default file try to remove the image
                          </small>
                        </div>
                        <div class="card-body">
                          <div class="file-upload-wrapper">
                            <input
                              type="file"
                              id="input-file-now-custom-1"
                              class="file-upload"
                              data-default-file="https://mdbootstrap.com/img/Photos/Others/images/89.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div class="card mb-3">
                      <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                        <h6 class="mb-0 fw-bold ">Basic information</h6>
                      </div>
                      <div class="card-body">
                        <form>
                          <div class="row g-3 align-items-center">
                            <div class="col-md-6">
                              <label class="form-label">Name</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-6">
                              <label class="form-label">Page Title</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">
                                Product Identifier URL
                              </label>
                              <div class="input-group mb-3">
                                <span class="input-group-text">
                                  https://eBazar.com
                                </span>
                                <input type="text" class="form-control" />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">
                                Product Description
                              </label>
                              <textarea
                                  class="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                ></textarea>
                            </div>
                            
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
