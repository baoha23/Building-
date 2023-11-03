window.onload = function () {
	khoiTao();

	// Thêm hình vào banner
	addBanner("img/banners/banner0.gif", "Myproject/img/banners/blackFriday.gif");
	var numBanner = 9; // Số lượng hình banner
	for (var i = 1; i <= numBanner; i++) {
		var linkimg = "img/banners/banner" + i + ".png";
		addBanner(linkimg, linkimg);
	}
    	// Khởi động thư viện hỗ trợ banner - chỉ chạy khi đã tạo hình trong banner
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1.5,
		margin: 100,
		center: true,
		loop: true,
		smartSpeed: 450,
		autoplay: true,
		autoplayTimeout: 3500
	});
    
	// autocomplete cho khung tim kiem
	autocomplete(document.getElementById('search-box'), list_products);

    	// thêm tags (từ khóa) vào khung tìm kiếm
	var tags = ["Hoodie", "Áo thun", "Quần", "Giày", "Hàng hiệu"];
	for (var t of tags) addTags(t, "index.html?search=" + t);
