$(".button1").bind('click',function(){
    var btn1 = $(".button1");
    var btn2 = $(".button2");
    var btn3 = $(".button3");
    var btn4 = $(".button4");
    $(".Panda_form1").delay(500).show(0);
    btn1.css({"transform":"translate(-80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn2.css({"transform":"translate(80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn3.css({"transform":"translate(-80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn4.css({"transform":"translate(80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    $(".main").delay(500).hide(0);
    $(".Panda_form2").css('display','none');
    $(".Panda_form3").css('display','none');
    $(".Panda_form4").css('display','none');
    $(".Panda_info").css('display','none');
})
$(".button2").bind('click',function(){
    var btn1 = $(".button1");
    var btn2 = $(".button2");
    var btn3 = $(".button3");
    var btn4 = $(".button4");
    $(".main").delay(500).hide(0);
    $(".Panda_info").delay(500).show(0);
    btn1.css({"transform":"translate(-80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn2.css({"transform":"translate(80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn3.css({"transform":"translate(-80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn4.css({"transform":"translate(80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    $(".Panda_form1").css('display','none');
    $(".Panda_form2").css('display','none');
    $(".Panda_form3").css('display','none');
    $(".Panda_form4").css('display','none');
})
$(".button3").bind('click',function(){
    var btn1 = $(".button1");
    var btn2 = $(".button2");
    var btn3 = $(".button3");
    var btn4 = $(".button4");
    $(".main").delay(500).hide(0);
    $(".Panda_form3").delay(500).show(0);
    btn1.css({"transform":"translate(-80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn2.css({"transform":"translate(80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn3.css({"transform":"translate(-80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn4.css({"transform":"translate(80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    $(".Panda_form1").css('display','none');
    $(".Panda_form2").css('display','none');
    $(".Panda_form4").css('display','none');
    $(".Panda_info").css('display','none');
})
$(".button4").bind('click',function(){
    var btn1 = $(".button1");
    var btn2 = $(".button2");
    var btn3 = $(".button3");
    var btn4 = $(".button4");
    $(".main").delay(500).hide(0);
    $(".Panda_form4").delay(500).show(0);
    btn1.css({"transform":"translate(-80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn2.css({"transform":"translate(80px,-80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn3.css({"transform":"translate(-80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    btn4.css({"transform":"translate(80px,80px)","transition":"opacity 0.5s ease-in-out,transform 0.5s ease-in-out","opacity":"0"})
    $(".Panda_form1").css('display','none');
    $(".Panda_form2").css('display','none');
    $(".Panda_form3").css('display','none');
    $(".Panda_info").css('display','none');
})


//搜索电影
function searchFilm(){
    $('#Panda_search_movie_btn').click(function(){
        var val = $('#Panda_search_movie').val();
        $.ajax({
            url:"/film/usual/search_by_key?key="+val+"&pageNum=0&pageSize=8",
            type:"GET",
            success:function(data){
                if(data.status == 0){
                    var Data=eval(data.body);
                    var Data2=eval(data.message);
                    /*var Data=eval(data);*/
                    var _html1 = '';
                    var _html2 = '';
                    $.each(Data,function (index, el){
                        _html1 += '<div class="Panda_box"><img src="'+el.coverUrl+'" movieName="'+el.movieName+'" tagDescri="'+el.tagDescri+'" score="'+el.score+'" area="'+el.area+'" price="'+el.price+'" introduction="'+el.introduction+'" performer="'+el.performer+'" director="'+el.director+'" showTime="'+el.showTime+'" alt="" class="Panda_img"><ul><li class="tit">'+el.movieName+'</li><li class="score">'+el.score+'分</li></ul></div>';
                    })
                    for(var i=1;i<=Data2.totalPage;i++){
                        _html2 += '<li>'+i+'</li>';
                    }
                        _html2 = '<ul><li id="pre">上一页</li>' + _html2 + '<li id="next">下一页</li></ul>'
                    $('.Panda_container').html(_html1);
                    $('.Panda_nav').html(_html2);
                    $(".Panda_img").click(function(){
                        $(".Panda_form1").css('display','none');
                        $(".Panda_form2").css('display','block');
                        $(".Panda_form3").css('display','none');
                        $(".Panda_form4").css('display','none');
                        $(".Panda_info").css('display','none');
                        $("#fix_movieName").val($(this).movieName);
                        $("#fix_tagDescri").val($(this).tagDescri);
                        $("#fix_score").val($(this).score);
                        $("#fix_area").val($(this).area);
                        $("#fix_introduction").val($(this).introduction);
                        $("#fix_price").val($(this).price);
                        $("#fix_performer").val($(this).performer);
                        $("#fix_director").val($(this).director);
                        $("#fix_showTime").val($(this).showTime);
                    });
                }else{
                    alert('未搜索到电影！ ') ;
                }
            }
        })
    })
}

//搜索用户
function searchuser(){
    $('#Panda_search_user_btn').click(function(){
        var val = $('#Panda_search_user').val();
        var data = {
            username : val
        };
        $.ajax({
            url:"/film/admin/check_user_info",
            type:"POST",
            data : data,
            success:function(data){
                if(data.status == 0){
                    var Data=eval(data.body);
                    $("#serach_userId").val(Data.userId);
                    $("#serach_username").val(Data.username);
                    $("#serach_userphone").val(Data.phone);
                    $("#serach_useraddress").val(Data.address);
                    $("#serach_useremail").val(Data.email);
                    $("#serach_userbalance").val(Data.balance);
                    $("#serach_userauthority").val(Data.authority);
                    $("#serach_userregisterTime").val(Data.registerTime);
                }else{
                    alert('未搜索到该用户！ ') ;
                }
            }
        })
    })
}

//查询电影评论
function searchcomments(){
    $('#Panda_search_comments_btn').click(function(){
        var val1 = $('#Panda_search_comments_movieName').val();
        var val2 = $('#Panda_search_comments_pageNum').val();
        var val3 = $('#Panda_search_comments_pageSize').val();
        var data = {
            movieName : val1,
            pageNum : val2,
            pageSize : val3
        };
        $.ajax({
            url:"/film/admin/check_comment",
            type:"POST",
            data:data,
            success:function(data){
                if(data.status == 0){
                    var Data=eval(data.body);
                    var Data2=eval(data.message);
                    /*var Data=eval(data);*/
                    var _html1 = '';
                    var _html2 = '';
                    $.each(Data,function (index, el){
                        _html1 += '<div class="content_box"><ul><li class="commentId">评论ID：'+el.commentId+'</li><li class="Panda_content">评论内容：'+el.content+'</li><li class="Panda_username">用户名：'+el.username+'</li><li class="Panda_movieName">电影名：'+el.movieName+'</li><li class="Panda_cTime">评论时间：'+el.cTime+'</li></ul></div>';
                    })
                    for(var i=1;i<=Data2.totalPage;i++){
                        _html2 += '<li>'+i+'</li>';
                    }
                        _html2 = '<ul><li id="pre_comments">上一页</li>' + _html2 + '<li id="next_comments">下一页</li></ul>';
                    $('.Panda_comments_content').html(_html1);
                    $('.Panda_comments_nav').html(_html2);
                }else{
                    alert('未搜索到相应评论！ ') ;
                }
            }
        })
    })
}