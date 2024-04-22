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
                    <form v-on:submit.prevent="uploadFile" action="" method="post" enctype="multipart/form-data">
                        <table>
                            <colgroup>
                                <col style="width: 600px;">
                                <col style="width: 220px;">
                            </colgroup>
                            <tr>
                                <td class="text-left"><input type="file" name="file" v-on:change="selectFile"></td>
                                <td class="text-right"><button type="submit">파일업로드</button></td>
                            </tr>
                        </table>
                    </form>
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
import "@/assets/css/mysite.css"
import axios from 'axios'


export default {
    name: "FormView",
    components: {},
    data() {
        return {
            file: "",
            saveName: ""
        };
    },
    methods: {
        selectFile(event) {
            this.file = event.target.files[0];
            console.log(this.file);
        },
        uploadFile() {
            console.log("클릭");
            console.log(this.$store.state.apiBaseUrl);
            const formData = new FormData();
            formData.append('file', this.file);


            axios({
                method: 'post', //put,post,delete
                url: `${this.$store.state.apiBaseUrl}/api/attach`,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                //params: { crtPage: this.crtPage, keyword: this.keyword }, //get방식 파라미터로 값이 전달
                data: formData, //이경우는 json이 아님

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.result); //수신데이타
                console.log(response.data.apiData); //수신데이타

                if (response.data.result == "success") {
                    this.saveName = response.data.apiData;
                    this.$router.push({ path: '/result', query: { saveName: response.data.apiData } })

                } else {
                    alert("알수없는 오류");
                }


            }).catch(error => {
                console.log(error);
            });

        }
    },
    created() {
    }
};
</script>


<style></style>
