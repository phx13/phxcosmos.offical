<template>
  <section class="section section-bg-light">
    <div class="container">
      <!-- 标题 -->
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title mb-4 pb-2 text-center">
            <h3 class="title text-uppercase mb-4">解决方案</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- 智慧工业解决方案 -->
        <div class="col-lg-3 col-md-6 mt-4 pt-2">
          <div
            class="
              team-box
              rounded
              shadow
              position-relative
              overflow-hidden
              d-block
            "
          >
            <div class="team-box-img">
              <img
                src="../../assets/images/home-solution-1.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="team-overlay">
              <div class="team-content text-center">
                <div class="member-info text-center">
                  <router-link to="/solution/industry">
                    <h5 class="text-white mb-0">智慧工业</h5>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 智慧工业解决方案end -->

        <!-- 智慧医疗解决方案 -->
        <div class="col-lg-3 col-md-6 mt-4 pt-2">
          <div
            class="
              team-box
              rounded
              shadow
              position-relative
              overflow-hidden
              d-block
            "
          >
            <div class="team-box-img">
              <img
                src="../../assets/images/home-solution-2.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="team-overlay">
              <div class="team-content text-center">
                <div class="member-info text-center">
                  <router-link to="/solution/medical">
                    <h5 class="text-white mb-0">智慧医疗</h5>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 智慧医疗解决方案end -->

        <!-- 智慧司法解决方案 -->
        <div class="col-lg-3 col-md-6 mt-4 pt-2">
          <div
            class="
              team-box
              rounded
              shadow
              position-relative
              overflow-hidden
              d-block
            "
          >
            <div class="team-box-img">
              <img
                src="../../assets/images/home-solution-3.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="team-overlay">
              <div class="team-content text-center">
                <div class="member-info text-center">
                  <router-link to="/solution/judicial">
                    <h5 class="text-white mb-0">智慧司法</h5>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 智慧司法解决方案end -->

        <!-- 智慧商超解决方案 -->
        <div class="col-lg-3 col-md-6 mt-4 pt-2">
          <div
            class="
              team-box
              rounded
              shadow
              position-relative
              overflow-hidden
              d-block
            "
          >
            <div class="team-box-img">
              <img
                src="../../assets/images/home-solution-4.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="team-overlay">
              <div class="team-content text-center">
                <div class="member-info text-center">
                  <router-link to="/solution/commerce">
                    <h5 class="text-white mb-0">智慧商超</h5>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 智慧商超解决方案end -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSolution",
};
</script>

<style scoped>
</style>