window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500 ) {
        document.getElementById("navigasitop").style.display = "block";
    } else {
        document.getElementById("navigasitop").style.display = "none"; 
    }
}

function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function suksesdaftar() {
    var rs = document.forms["formInput"]["email-berlangganan"].value;
	var atps=rs.indexOf("@");
	var dots=rs.lastIndexOf(".");
	if (atps<1 || dots<atps+2 || dots+2>=rs.length) {
		alert("Email Tidak Valid!");
		return false;
	} else {
		alert("Selamat Kamu Berhasil Berlangganan di Blog Vargo Adventure, Silahkan Cek email Kamu");
	}
}