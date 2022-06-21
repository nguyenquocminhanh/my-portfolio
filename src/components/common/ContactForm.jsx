import React from 'react'

export default function ContactForm() {
  return (
    <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="row">

            <div class="col-sm-6 col-md-4 mb-5 mb-md-0 text-center text-lg-left">
                <div class="icon icon-4x text-dark mb-4">
                <i class="ti-mobile"></i>
                </div>
                <p>(857) 269 4891</p>
            </div>

            <div class="col-sm-6 col-md-4 mb-5 mb-md-0 text-center text-lg-left">
                <div class="icon icon-4x text-dark mb-4">
                <i class="ti-location-pin"></i>
                </div>
                <p>Boston, Massachusetts<br/>
                United States</p>
            </div>

            <div class="col-sm-6 col-md-4 text-center text-lg-left">
                <div class="icon icon-4x text-dark mb-4">
                    <i class="ti-email"></i>
                </div>
                <p>
                    <a href="mailto:minhanh.nguyenquoc@gmail.com" class="text-dark">minhanh.nguyenquoc@gmail.com</a>
                </p>
            </div>

            </div>

            <hr class="my-8"></hr>

            <div class="contact-form">
            <form class="mb-0" id="cf" name="cf" action="include/sendemail.php" method="post" autocomplete="off">
                <div class="form-row">

                <div class="form-process"></div>

                <div class="col-md-6">
                    <div class="form-group">
                    <input type="text" id="cf-name" name="cf-name" placeholder="Enter your name" class="form-control required"/>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                    <input type="email" id="cf-email" name="cf-email" placeholder="Enter your email address" class="form-control required"/>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                    <input type="text" id="cf-subject" name="cf-subject" placeholder="Subject (Optional)" class="form-control"/>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="form-group">
                    <textarea name="cf-message" id="cf-message" placeholder="Message" class="form-control required" rows="7"></textarea>
                    </div>
                </div>

                <div class="col-12 d-none">
                    <input type="text" id="cf-botcheck" name="cf-botcheck" value="" class="form-control" />
                </div>

                <div class="col-12 text-center">
                    <button class="btn btn-dark" type="submit" id="cf-submit" name="cf-submit">Send Message</button>
                </div>

                <input type="hidden" name="prefix" value="cf-"/>

                </div>
            </form>
            <div class="contact-form-result text-center"></div>
            </div>
        </div>
    </div>
  )
}
