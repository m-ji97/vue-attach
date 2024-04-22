<template>
    <div id="wrap">

        <div id="header" class="clearfix">
            <h1>
                <a href="">MySite</a>
            </h1>

            <!-- 
    <ul>
        <li>황일영 님 안녕하세요^^</li>
        <li><a href="" class="btn_s">로그아웃</a></li>
        <li><a href="" class="btn_s">회원정보수정</a></li>
    </ul>
    -->
            <ul>
                <li><a href="" class="btn_s">로그인</a></li>
                <li><a href="" class="btn_s">회원가입</a></li>
            </ul>

        </div>
        <!-- //header -->

        <div id="nav">
            <ul class="clearfix">
                <li><a href="">입사지원서</a></li>
                <li><a href="">게시판</a></li>
                <li><a href="">갤러리</a></li>
                <li><a href="">방명록</a></li>
            </ul>
        </div>
        <!-- //nav -->


        <div id="container" class="clearfix">
            <div id="aside">
                <h2>갤러리</h2>
                <ul>
                    <li><a href="">일반갤러리</a></li>
                    <li><a href="">파일첨부연습</a></li>
                </ul>
            </div>
            <!-- //aside -->


            <div id="content">

                <div id="content-head">
                    <h3>첨부파일연습</h3>
                    <div id="location">
                        <ul>
                            <li>홈</li>
                            <li>갤러리</li>
                            <li class="last">첨부파일연습</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- //content-head -->


                <div id="file">

                    <div>
                        <img id="resultImg"
                            v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${this.$route.query.saveName}`">
                    </div>
                    <p>
                        <router-link to="/">다시 업로드 하기</router-link>
                    </p>

                </div>
                <!-- //file -->

            </div>
            <!-- //content  -->

        </div>
        <!-- //container  -->


        <div id="footer">
            Copyright ⓒ 2020 황일영. All right reserved
        </div>
        <!-- //footer -->
    </div>
    <!-- //wrap -->

</template>


<script>
import "@/assets/css/gallery.css"

export default {
    name: "ResultVuew",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>


<style></style>
