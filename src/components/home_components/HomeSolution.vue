<template>
  <section class="section section-bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title mb-4 pb-2 text-center">
            <h3 class="title text-uppercase mb-4">解决方案</h3>
          </div>
        </div>
      </div>

      <div class="row">
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
                  <h5 class="text-white mb-0">智慧工业</h5>
                  <a href="/solution/industry"
                    ><p class="text-white mt-3">解决方案</p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <h5 class="text-white mb-0">智慧医疗</h5>
                  <a href="/solution/medical"
                    ><p class="text-white mt-3">解决方案</p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <h5 class="text-white mb-0">智慧司法</h5>
                  <a href="/solution/judicial"
                    ><p class="text-white mt-3">解决方案</p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <h5 class="text-white mb-0">智慧商超</h5>
                  <a href="/solution/commerce"
                    ><p class="text-white mt-3">解决方案</p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-4 pt-2">
          <div class="text-center">
            <router-link to="/solution" class="btn btn-custom"
              >查看全部方案 <i class="fa fa-angle-right" aria-hidden="true"></i
            ></router-link>
          </div>
        </div>
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