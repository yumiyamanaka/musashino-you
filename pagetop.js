<script>
$(document).ready(function(){
 
	$(".page_top").hide();
     // ↑ページトップボタンを非表示にする
 
    $(window).on("scroll", function() {
 
        if ($(this).scrollTop() > 100) {
            // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
            $('.page_top').slideDown("fast");
            // ↑ (100より小さい時は)ページトップボタンをスライドダウン
        } else {
            $('.page_top').slideUp("fast");
            // ↑ それ以外の場合の場合はスライドアップする。
        }
         
    // フッター固定する
 
        scrollHeight = $(document).height(); 
        // ドキュメントの高さ
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        //　ウィンドウの高さ+スクロールした高さ→　現在のトップからの位置
        footHeight = $("footer").innerHeight();
        // フッターの高さ
                 
        if ( scrollHeight - scrollPosition  <= footHeight ) {
        // 現在の下から位置が、フッターの高さの位置にはいったら
        //  ".page_top"のpositionをabsoluteに変更し、フッターの高さの位置にする        
            $(".page_top").css({
                "position":"absolute",
                "bottom": footHeight
            });
        } else {
        // それ以外の場合は元のcssスタイルを指定
            $(".page_top").css({
                "position":"fixed",
                "bottom": "0px"
            });
        }
    });
 
    // トップへスムーススクロール
    $('.page_top a').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 500);
        // ページのトップへ 500 のスピードでスクロールする
        return false;
     });
 
});
</script>