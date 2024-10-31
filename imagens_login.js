let currentImageIndex = 0;
const images = [
  "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg",
  "https://wallpapers.com/images/hd/cat-on-trunk-and-dog-ykyvdpiqc7o20c0a.jpg",
  "https://images.ecycle.com.br/wp-content/uploads/2021/11/22172617/cachorro-desidratado-1024x683.jpg.webp",
  "https://cdn.pixabay.com/photo/2017/08/14/17/17/kittens-2641211_640.jpg",
  "https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_640.jpg",
  "https://cdn.pixabay.com/photo/2024/06/07/11/45/cats-8814533_1280.jpg",
  "https://media.istockphoto.com/id/1497909628/pt/foto/cat-and-dog-sitting-together-on-meadow.jpg?s=612x612&w=0&k=20&c=8kq-COgc8jtx0duALLqAQzc0i0LstcEywXlKWJvMagw=",
];

function changeImage() {
  const banner = document.getElementById("hotelPetBanner");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  banner.src = images[currentImageIndex];
}

setInterval(changeImage, 4000);
