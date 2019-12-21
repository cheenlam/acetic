//gotop點擊事件-前往置頂
$('#gotop').click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//goto點擊事件-前往結帳付款
$('#goto').click(function() {
    window.scrollTo({
        top: $('#msgtop').offset().top,
        behavior: "smooth"
    });
})

//cartop點擊事件 - 縮放carbody清單
$('#cartop').click(function(){
    $('#carbody').slideToggle(500);
    $('#cartop .fas').toggleClass('arrow')
})

//捲軸滑動事件 - gotop 按鈕顯示與否
var scroll = $(window).scroll(function() {
    if (scroll.scrollTop() > $('#maintop').offset().top) {
        $('#gotop').css('display', 'block');
    } else {
        $('#gotop').css('display', 'none')
    };
});

// 加入購物車button點擊事件 - 增加動畫小圖示
$('#shoppingBuy_01').click(function(){
    var addlist = $('#addShoppingCar').clone(true).removeAttr('display');
    $('body').prepend(addlist)
    setTimeout(function(){
        addlist.remove()
    },1000)
});      
$('#shoppingBuy_02').click(function(){
    var addlist = $('#addShoppingCar').clone(true).css('display','')
    $('body').prepend(addlist)
    setTimeout(function(){
        addlist.remove()
    },1000)
});

//shopping區塊,購買增減事件
$('#shoppingLess_01').click(function() {
    var nowVal = Number($('#shoppingInput_01').val());
    if (nowVal > 0) {
        nowVal -= 1;
        $('#shoppingInput_01').val(`${nowVal}`);
    };
});
$('#shoppingAdd_01').click(function() {
    var nowVal = Number($('#shoppingInput_01').val());
    if (nowVal >= 0 && nowVal < 99) {
        nowVal += 1;
        $('#shoppingInput_01').val(`${nowVal}`);
    };
});
$('#shoppingLess_02').click(function() {
    var nowVal = Number($('#shoppingInput_02').val());
    if (nowVal > 0) {
        nowVal -= 1;
        $('#shoppingInput_02').val(`${nowVal}`);
    };
});
$('#shoppingAdd_02').click(function() {
    var nowVal = Number($('#shoppingInput_02').val());
    if (nowVal >= 0 && nowVal < 99) {
        nowVal += 1;
        $('#shoppingInput_02').val(`${nowVal}`);
    };
});


//shopping區塊,加入購物車事件
$('#shoppingBuy_01').click(function() {
    //新增商品於list購物車清單
    var nowVal = Number($('#shoppingInput_01').val());
    var price = parseInt($('#shoppingPrice_01').text().replace(',', ''));
    var x = $('#listOne').clone(true).css({
        'opacity': 1,
        'position': 'relative',
        'z-index': 1,
    });
    $('#list').find('tr:first-child').after(x)
    x.find('input').val(`${nowVal}`);
    x.find('tt').text(nowVal * price);

    //新增商品於mycar購物車清單
    var mycar = $('#mycarOne').clone(true).css({
        'opacity': 1,
        'position': 'relative',
        'z-index': 1,
    });
    $('#carbody').prepend(mycar);
    mycar.find('tt').text(`${nowVal}`);

    //新增商品於listphone購物車清單
    var listphone = $('#listphoneOne').clone(true).css({
        'opacity': 1,
        'position': 'relative',
        'z-index': 1,
    });
    $('#listbody').prepend(listphone);
    listphone.find('input').val(`${nowVal}`);
    listphone.find('tt').text(nowVal * price);

    //更新list清單加總
    var listtotal = 0;
    $('#list tt').each(function() {
        listtotal += parseInt($(this).text());
    });
    $('#listTotal').text(listtotal);


    //更新mycar清單總數 & 總金額
    var mycarCount = 0
    $('#mycar tt').each(function() {
        mycarCount += parseInt($(this).text());
    });
    $('#mycarCount').text(mycarCount);
    $('#mycarTotal').text(listtotal);

    //更新listphone清單加總
    var listphoneTotal = 0;
    $('#listbody tt').each(function() {
        listphoneTotal += Number($(this).text());
    });
    $('#listfoot p').text(listphoneTotal);

});


$('#shoppingBuy_02').click(function() {
    //新增商品於list購物車清單
    var nowVal = Number($('#shoppingInput_02').val());
    var price = parseInt($('#shoppingPrice_02').text().replace(',', ''));
    var x = $('#listTwo').clone(true).css({
        'opacity': 1,
        'position': 'relative',
        'z-index': 1,
    });
    $('#list').find('tr:first-child').after(x)
    x.find('input').val(`${nowVal}`);
    x.find('tt').text(nowVal * price);


    //新增商品於mycar購物車清單
    var mycar = $('#mycarTwo').clone(true).css({
        'opacity': 1,
        'position': 'relative',
        'z-index': 1,
    });
    $('#carbody').prepend(mycar);
    mycar.find('tt').text(`${nowVal}`);

    //新增商品於listphone購物車清單
    var listphone = $('#listphoneTwo').clone(true).css({
        'opacity': 1,
        'position': 'relative',
        'z-index': 1,
    });
    $('#listbody').prepend(listphone);
    listphone.find('input').val(`${nowVal}`);
    listphone.find('tt').text(nowVal * price);


    //更新list清單加總
    var listtotal = 0;
    $('#list tt').each(function() {
        listtotal += parseInt($(this).text())
    });
    $('#listTotal').text(listtotal);

    //更新mycar清單總數 & 總金額
    var mycarCount = 0
    $('#mycar tt').each(function() {
        mycarCount += parseInt($(this).text());
    });
    $('#mycarCount').text(mycarCount);
    $('#mycarTotal').text(listtotal);

    //更新listphone清單加總
    var listphoneTotal = 0;
    $('#listbody tt').each(function() {
        listphoneTotal += Number($(this).text());
    });
    $('#listfoot p').text(listphoneTotal);
});


//購物清單(list)區塊 - 點擊增加按鍵 - 選擇數量
$('.add').click(function() {
    var x = Number($(this).siblings('input').val());
    var y = Number($(this).parents('tr').find('span').html().replace(',', ''));
    if (x >= 0 && x < 99) {
        x = x + 1;
        Number($(this).siblings('input').val(x));
        $(this).parents('tr').find('tt').html(x * y);
    };

    //更新list清單加總
    var listtotal = 0;
    $('#list tt').each(function() {
        listtotal += parseInt($(this).text())
    });
    $('#listTotal').text(listtotal);
});

//購物清單(list)區塊 - 點擊減少按鍵 - 選擇數量
$('.less').click(function() {
    var x = Number($(this).siblings('input').val());
    var y = Number($(this).parents('tr').find('span').html().replace(',', ''));
    if (x > 0) {
        x = x - 1;
        Number($(this).siblings('input').val(x));
        $(this).parents('tr').find('tt').html(x * y);
    };

    //更新list清單加總
    var listtotal = 0;
    $('#list tt').each(function() {
        listtotal += parseInt($(this).text())
    });
    $('#listTotal').text(listtotal);

    //更新mycar清單總數 & 總金額
    var mycarCount = 0
    $('#mycar tt').each(function() {
        mycarCount += parseInt($(this).text());
    });
    $('#mycarCount').text(mycarCount);
    $('#mycarTotal').text(listtotal);
});


//購物清單(listphon)區塊 - 點擊增加按鍵 - 選擇數量
$('.phoneadd').click(function() {
    var x = Number($(this).siblings('input').val());
    var y = Number($(this).parents('.phonemenu').find('span').html().replace(',', ''));
    if (x >= 0 && x < 99) {
        x = x + 1;
        Number($(this).siblings('input').val(x));
        $(this).parents('.phonemenu').find('tt').html(x * y);
    };

    //更新listphone清單加總
    var listphoneTotal = 0;
    $('#listbody tt').each(function() {
        listphoneTotal += Number($(this).text());
    });
    $('#listfoot p').text(listphoneTotal);
});


$('.phoneless').click(function() {
    var x = Number($(this).siblings('input').val());
    var y = Number($(this).parents('.phonemenu').find('span').html().replace(',', ''));
    if (x > 0) {
        x = x - 1;
        Number($(this).siblings('input').val(x));
        $(this).parents('.phonemenu').find('tt').html(x * y);
    };

    //更新listphone清單加總
    var listphoneTotal = 0;
    $('#listbody tt').each(function() {
        listphoneTotal += Number($(this).text());
    });
    $('#listfoot p').text(listphoneTotal);
});

//購物清單(list)區塊 - 以input方式輸入數量
$('#list input').change(function() {
    var x = Number($(this).val());
    var y = Number($(this).parents('tr').find('span').html().replace(',', ''));
    Number($(this).siblings('input').val(x));
    $(this).parents('tr').find('tt').html(x * y);

    //更新list清單加總
    var listtotal = 0;
    $('#list tt').each(function() {
        listtotal += parseInt($(this).text())
    });
    $('#listTotal').text(listtotal);
})

//購物清單(listphon)區塊 - 以input方式輸入數量
$('#listphone input').change(function() {
    var x = Number($(this).val());
    var y = Number($(this).parents('.phonemenu').find('span').html().replace(',', ''));
    Number($(this).siblings('input').val(x));
    $(this).parents('.phonemenu').find('tt').html(x * y);

    //更新listphone清單加總
    var listphoneTotal = 0;
    $('#listbody tt').each(function() {
        listphoneTotal += Number($(this).text());
    });
    $('#listfoot p').text(listphoneTotal);
})


//購物清單(list)區塊 - 點擊清除清單
$('.listRemove').click(function() {
    // 清除mycar 及 listphone清單內該商品
    var listremove = $('.list tr').index(this.parentNode)-1;
    $('.carbody .carmenu').eq(listremove).remove();
    $('#listbody .phonemenu').eq(listremove).remove();

    // 清除list清單內該商品
    $(this).parents('tr').remove();
   
    //更新list清單加總(清除)
    var listtotal = 0;
    $('#list tt').each(function() {
        listtotal += parseInt($(this).text())
    });
    $('#listTotal').text(listtotal);

    //更新mycar清單總數 & 總金額
    var mycarCount = 0
    $('#mycar tt').each(function() {
        mycarCount += parseInt($(this).text());
    });
    $('#mycarCount').text(mycarCount);
    $('#mycarTotal').text(listtotal);

    //更新listphone清單加總
    var listphoneTotal = 0;
    $('#listbody tt').each(function() {
        listphoneTotal += Number($(this).text());
    });
    $('#listfoot p').text(listphoneTotal);
})


//購物清單(listphone)區塊 - 點擊清除清單
$('.listphoneRemove').click(function() {
    // 清除mycar 及 list清單內該商品
    var listremove = $('#listbody .phonemenu').index(this.parentNode);
    $('.carbody .carmenu').eq(listremove).remove();
    $('.list tr').eq(listremove+1).remove();

    // 清除listphone清單內該商品
    $(this).parents('.phonemenu').remove();

    //更新listphone清單加總
    var listphoneTotal = 0;
    $('#listbody tt').each(function() {
        listphoneTotal += Number($(this).text());
    });
    $('#listfoot p').text(listphoneTotal);

    //更新list清單加總(清除)
    var listtotal = 0;
    $('#list tt').each(function() {
        listtotal += parseInt($(this).text())
    });
    $('#listTotal').text(listtotal);

    //更新mycar清單總數 & 總金額
    var mycarCount = 0
    $('#mycar tt').each(function() {
        mycarCount += parseInt($(this).text());
    });
    $('#mycarCount').text(mycarCount);
    $('#mycarTotal').text(listtotal);

})
