import React from 'react'
import './AboutSection.css'
import slider3 from '../../../asset/slider3.jpg'
function AboutSection() {
  return (
    <>
      <div>
        <section class="about-section">
          <div class="container">
            <div class="row">
              <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div class="inner-column">
                  <div class="sec-title">
                    <span class="title">Fuel Your Body, Fuel Your Life</span>
                    <h2>ChoChi</h2>
                  </div>
                  <div class="text">
                    Our nutrient packs are carefully formulated to provide the
                    essential vitamins, minerals, and nutrients your body needs.
                    We source only the highest-quality ingredients to ensure
                    maximum effectiveness and safety. Convenience is key at
                    ChoChi.
                  </div>
                  <div class="text">
                    Whether you're looking to boost your energy levels, support
                    your immune system, or improve your overall well-being,
                    ChoChi has got you covered. Start your personalized
                    nutrition journey today and unlock the potential of a
                    healthier, happier you.
                  </div>
                  <div class="btn-box">
                    <a href="#" class="theme-btn btn-style-one">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column wow fadeInLeft">
                  <div class="author-desc">
                    <h2>ChoChi</h2>
                    <span>Unlock Your Optimal Health</span>
                  </div>
                  <figure class="image-1">
                    <a href="#" class="lightbox-image" data-fancybox="images">
                      <img title="ChoChi" src={slider3} alt="" />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <div class="sec-title">
              <span class="title">Our Future Goal</span>
              <h2>Revitalize Your Wellness Journey</h2>
            </div>
            <div class="text">
              Welcome to ChoChi - Your Ultimate Nutrient Pack Ordering
              Destination! We are passionate about empowering individuals to
              take control of their health and well-being through personalized
              nutrition.
            </div>

            <div class="text">
              Convenience is key at ChoChi. Our nutrient packs are conveniently
              packaged and delivered straight to your door, saving you time and
              hassle. No more juggling multiple bottles and pills – everything
              you need is neatly packed in individual daily doses.
            </div>

            <div class="text">
              At ChoChi, we believe that optimal nutrition is the key to
              unlocking your full potential. Our carefully curated nutrient
              packs are designed to provide a convenient and effective way to
              fuel your body with the essential vitamins, minerals, and
              antioxidants it needs.
            </div>
            <div class="text">
              At ChoChi, we are dedicated to your success. Our team of
              nutritionists and wellness experts are here to support you every
              step of the way, providing guidance, education, and motivation to
              help you achieve your health and wellness goals.
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutSection