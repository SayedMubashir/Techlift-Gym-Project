import React from "react";

const ContactPage = () => {
  return (
    <>
      <div class="container mt-5 p-5">
        <h2 class="text-center">Contact Form</h2>
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 pb-5">
            {/* Form with header */}

            <form action="mail.php" method="post">
              <div class="card border-primary rounded-0">
                <div class="card-header p-0">
                  <div class="bg-info text-white text-center py-2">
                    <h3>
                      <i class="fa fa-envelope"></i> Contact Us
                    </h3>
                    <p class="m-0">Feel Free To Contact Us</p>
                  </div>
                </div>
                <div class="card-body p-3">
                  {/* Body */}
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-user text-info"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="number"
                        name="number"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-envelope text-info"></i>
                        </div>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="gymfit@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-comment text-info"></i>
                        </div>
                      </div>
                      <textarea
                        class="form-control"
                        placeholder="Enter Your Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div class="text-center">
                    <input
                      type="submit"
                      value="Enter"
                      class="btn btn-info btn-block rounded-0 py-2"
                    />
                  </div>
                </div>
              </div>
            </form>
            {/* Form with header */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
