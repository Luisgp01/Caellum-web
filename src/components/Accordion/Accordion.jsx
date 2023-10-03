import React from 'react'
import '../Accordion/Accordion.scss'

export default function Accordion() {
  return (
    <div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Lorem ipsum dolor sit amet
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body accordionColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              porta ante metus, in bibendum tellus tristique in. Aliquam eu
              tempus quam, ac hendrerit felis. Vivamus in nibh sollicitudin,
              convallis dui ac, sollicitudin libero. Cras mattis augue in turpis
              facilisis porta. Donec quis mi a quam vestibulum scelerisque.
              Vestibu
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              consectetur adipiscing elit
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body accordionColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              porta ante metus, in bibendum tellus tristique in. Aliquam eu
              tempus quam, ac hendrerit felis. Vivamus in nibh sollicitudin,
              convallis dui ac, sollicitudin libero. Cras mattis augue in turpis
              facilisis porta. Donec quis mi a quam vestibulum scelerisque.
              Vestibu
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Maecenas porta ante metus
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body accordionColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              porta ante metus, in bibendum tellus tristique in. Aliquam eu
              tempus quam, ac hendrerit felis. Vivamus in nibh sollicitudin,
              convallis dui ac, sollicitudin libero. Cras mattis augue in turpis
              facilisis porta. Donec quis mi a quam vestibulum scelerisque.
              Vestibu
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              in bibendum tellus tristique in
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body accordionColor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              porta ante metus, in bibendum tellus tristique in. Aliquam eu
              tempus quam, ac hendrerit felis. Vivamus in nibh sollicitudin,
              convallis dui ac, sollicitudin libero. Cras mattis augue in turpis
              facilisis porta. Donec quis mi a quam vestibulum scelerisque.
              Vestibu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
