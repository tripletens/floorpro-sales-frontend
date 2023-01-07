import React from "react";
import DashboardNavbar from "../../../components/navbar";
import { AdminSidebar } from "../../../components/sidebar";

export const MessagesReply = () => {
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
                      <h3 class="fw-bold mb-0">Reply message</h3>
                      <button
                        type="submit"
                        class="btn btn-primary py-2 px-5 text-uppercase btn-set-task w-sm-100"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                <div class="coment-bottom bg-white p-2 px-4">
                  <div class="d-flex flex-row add-comment-section mt-4 mb-4">
                    <img
                      class="img-fluid img-responsive rounded-circle mr-2"
                      src="https://i.imgur.com/qdiP4DB.jpg"
                      width="38"
                    />
                    <input
                      type="text"
                      class="form-control mr-3"
                      placeholder="Add comment"
                    />
                    <button class="btn btn-primary" type="button">
                      Comment
                    </button>
                  </div>
                  <div class="commented-section mt-2">
                    <div class="d-flex flex-row align-items-center commented-user">
                      <h5 class="mr-2">Corey oates</h5>
                      <span class="dot mb-1"></span>
                      <span class="mb-1 ml-2">4 hours ago</span>
                    </div>
                    <div class="comment-text-sm">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </span>
                    </div>
                    <div class="reply-section">
                      <div class="d-flex flex-row align-items-center voting-icons">
                        <i class="fa fa-sort-up fa-2x mt-3 hit-voting"></i>
                        <i class="fa fa-sort-down fa-2x mb-3 hit-voting"></i>
                        <span class="ml-2">10</span>
                        <span class="dot ml-2"></span>
                        <h6 class="ml-2 mt-1">Reply</h6>
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
