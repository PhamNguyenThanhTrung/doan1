const app = Vue.createApp({})
    app.component('comp-header', {
        data() {
            return {
                image: './assets/Imgs/logo.png',
            }
        },
        template: `
    <header class="bg-dark">
      <div class="container">
          <div class="row">
              <div class="col-lg-3">

                  <div class="dropdown" style="margin-top: 10px;">
                      <button type="button" class="btn btn-dark" data-bs-toggle="dropdown">
                          <i class="fa-solid fa-bars"></i>
                      </button>
                      <ul class="dropdown-menu bg-dark">
                          <li><a class="dropdown-item bg-dark" href="home.html" style="color: #eeeeee;">Trang chủ</a></li>
                          <li><a class="dropdown-item bg-dark" href="#" style="color: #eeeeee;">Đồng hồ nam & nữ</a></li>
                          <li><a class="dropdown-item bg-dark" href="#" style="color: #eeeeee;">Liên hệ</a></li>
                          <li><a class="dropdown-item bg-dark" href="login.html" style="color: #eeeeee;">Đăng nhập</a></li>
                      </ul>
                  </div>



              </div>

              <div class="col-lg-3">
                  <img :src="image" style="margin-top: 5px;">
              </div>

              <div class="col-lg-4">
                  <div class="box">
                      <div class="search-box">
                          <input type="text" placeholder="Tìm kiếm sản phẩm cần tìm..." v-model="searchTerms">
                          <label for="" class="icon">
                              <i class="fa-solid fa-magnifying-glass"></i>
                          </label>
                      </div>
                  </div>
              </div>

              <div class="col-lg-2">
                  <div class="giohang">
                      <p>Giỏ hàng <span class="badge bg-secondary">0</span> <a href="#"><i
                                  class="fa-solid fa-bag-shopping fa-2x"></i></a></p>
                  </div>
              </div>
          </div>
      </div>

  </header>
        `
    })

    app.component('comp-footer', {
        data() {
            return {}
        },
        template: `
        <footer class="bg-dark" style="margin-top: 0; color:#eeeeee; font-size: 14px;">
  <div class="container">
      <div class="row" style="padding-top: 20px;">
          <div class="col-lg-3">
              <h5>Gới thiệu OverWatch</h5>
              <p>Giúp các bạn trẻ cũng như những người trung niên, có thể theo dỗi được giờ giấc.</p>
          </div>
          <div class="col-lg-3" style="margin-top: 33px;">
              <p><span>Địa chỉ:</span> Quận 10, Tp. Hồ Chí Minh. Japan Figure chưa có không gian trưng bày, bạn
                  vui lòng hẹn trước khi đến</p>
              <p><span>Điện thoại:</span> 0123456789</p>
              <p><span>Email:</span> <a href="mailto:support@japanfigure.vn" style="color: #eeeeee;" class="link">support@OverWatch.vn</a>
              </p>
          </div>
          <div class="col-lg-3">
              <h5>Hỗ trợ khách hàng</h5>
              <ul style="line-height: 10px; margin-top: 13px;">
                  <li>
                      <p>Tìm kiếm</p>
                  </li>
                  <li>
                      <p>Gới thiệu</p>
                  </li>
              </ul>
          </div>
          <div class="col-lg-3">
              <h5>Chăm sóc khách hàng</h5>
              <div class="row">
                  <div class="col-lg-6" style="width: 20px; margin-top: 10px;"><i
                          class="fa-solid fa-phone-volume fa-2x" style="color: #797982;"></i></div>
                  <div class="col-lg-6" style="margin-right: 20px;">
                      <p><span style="padding: 15px; font-size: 20px;">0123456789</span><br>
                      <a href="mailto:support@japanfigure.vn"
                          style="text-decoration: underline; padding-left: 15px; color: #eeeeee;">support@OverWatch.vn</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <hr>
  <p style="text-align: center; padding-bottom: 10px; margin-bottom: 0;">&copy Bản quyền thuộc về. Thiết kế website Mona Media</p>
  <div class="container">
    <div class="arrow">
        <a href="#"><button type="button"><i class="fa-solid fa-chevron-up"></i></button></a>
    </div>
</div>
</footer>
        `
    })