import React from "react";
import "../Support/Support.scss";
import Accordion from "../../components/Accordion/Accordion";
import CardSupport from "../../components/Card/CardSupport";

const Support = () => {
  return (
    <div>
      <div>
        <br />
        <div>
          <CardSupport />
        </div>
      </div>
      <br />
      <Accordion />
      <br />
      <div>
        <button
          className="btn btn-secondary shadow-lg"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          Lorem ipsum dolor sit amet
        </button>

        <div
          class="offcanvas offcanvas-start bg-primary"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
              Cras odio quam, gravida eu tortor vitae, consectetur facilisis leo
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="card">
              <div class="card-header bg-success">felis sit amet</div>
              <div class="card-body bg-secondary shadow-lg">
                <h5 class="card-title">
                  Duis ornare eget velit iaculis egestas
                </h5>
                <p class="card-text">
                  Mauris arcu justo, rhoncus in mattis eu, pharetra pulvinar
                  nulla.
                </p>
                <a href="/" class="btn btn-success">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Support;
