import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginToasts() {
  return (
    <div>
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">
          If you haven't registered yet
          <div class="mt-2 pt-2 border-top">
            <button type="button" class="btn btn-primary btn-sm">
              <Link to="/register">Register</Link>
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="toast"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
