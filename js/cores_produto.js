$(".cores span").click(function () {
  $(".cores span").removeClass("active");
  $(this).addClass("active");

  const dataColor = $(this).attr("data-image").split(" ");
  const banners = {
    principal: dataColor[0],
    frente: dataColor[1],
    lado: dataColor[2],
    atras: dataColor[3],
  };

  console.log(banners.principal);

  $(".img_principal").attr("src", banners.principal);
  $(".costa_xr").attr("src", banners.atras);
  $(".frente_xr").attr("src", banners.frente);
  $(".lado_xr").attr("src", banners.lado);
});
