document.addEventListener("DOMContentLoaded", () => {
  // 1. DAFTAR DATA BUKU (Sesuaikan ID dengan yang ada di link)
  const databaseBuku = {
    "atomic-habits": {
      judul: "Atomic Habits",
      penulis: "James Clear",
      kategori: "Psychology",
      gambar:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80",
      sinopsis:
        "Buku ini menjelaskan bagaimana perubahan kecil dalam kebiasaan sehari-hari dapat menghasilkan dampak yang luar biasa besar dalam hidup kita.",
    },
    "The-Great-Gatsby": {
      judul: "The-Great-Gatsbyg",
      penulis: "F. Scott Fitzgerald",
      kategori: "Fiksi",
      gambar:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
      sinopsis:
        "Sebuah kisah tentang perjalanan pulang, bukan sekadar pulang ke rumah, tapi pulang ke jati diri dan masa lalu.",
    },

    Cosmos: {
      judul: "Cosmos",
      penulis: "Carl Sagan",
      kategori: "Sains",
      gambar:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=400&q=80",
      sinopsis:
        "Sebuah kisah tentang perjalanan pulang, bukan sekadar pulang ke rumah, tapi pulang ke jati diri dan masa lalu.",
    },

    "Laskar-Pelangi": {
      judul: "Laskar Pelangi",
      penulis: "Andrea Hirata",
      kategori: "Fiksi",
      gambar:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=400&q=80",
      sinopsis:
        "Sebuah kisah tentang perjalanan pulang, bukan sekadar pulang ke rumah, tapi pulang ke jati diri dan masa lalu.",
    },

    bumi: {
      judul: "Bumi",
      penulis: "Tere lie",
      kategori: "Non fiksi",
      gambar:
        "https://i.pinimg.com/736x/b9/70/f9/b970f956854a01648c0aca3cae176c84.jpg",
      sinopsis: `Sebuah kisah tentang Bagaimana kisahBumi adalah 
        novel fantasi petualangan karya Tere Liye yang menjadi buku pertama dalam Serial Dunia Paralel. 
        Cerita berfokus pada kehidupan Raib, seorang remaja perempuan kelas SMP yang tampak biasa, tetapi sebenarnya memiliki kemampuan istimewa: menghilang.`,
    },

    bulan: {
      judul: "Bulan",
      penulis: "Tere lie",
      kategori: "Non fiksi",
      gambar:
        "https://i.pinimg.com/736x/b0/2e/e5/b02ee55514bdd2d090a3695e0070571c.jpg",
      sinopsis: `Bulan merupakan novel fantasi petualangan karya Tere Liye dan menjadi buku kedua dalam Serial Dunia Paralel, lanjutan dari novel Bumi. Cerita kembali mengikuti petualangan Raib, Seli, dan Ali setelah peristiwa besar yang mereka alami sebelumnya.
          Dalam novel ini, fokus cerita berpindah ke Klan Bulan, 
          tempat asal Raib. Ketiganya melakukan perjalanan ke dunia paralel Bulan untuk menghadapi 
          ancaman baru yang dapat mengganggu keseimbangan antar klan. Di sana, Raib mulai mempelajari lebih dalam 
          tentang jati dirinya, kekuatan menghilang yang ia miliki, serta tanggung jawab besar sebagai bagian dari klan tersebut.`,
    },

    "banjir-darah": {
      judul: "Banjir darah",
      penulis: "Ahmad Sutardi",
      kategori: "Sejarah",
      gambar:
        "https://i.pinimg.com/1200x/d6/f5/1d/d6f51db440646506a3ea9a0ae2a05a02.jpg",
      sinopsis: `Secara umum, istilah ini merujuk pada pembantaian dan penangkapan besar-besaran terhadap orang-orang yang dituduh 
      terkait Partai Komunis Indonesia (PKI) pada tahun 1965–1966. Peristiwa ini terjadi di berbagai daerah (Jawa, Bali, Sumatra, dan lainnya) 
      dan menimbulkan korban jiwa dalam jumlah sangat besar, serta penderitaan panjang bagi keluarga korban. Dalam kajian sejarah, 
      peristiwa ini dipahami sebagai tragedi kemanusiaan dengan latar konflik politik, militer, dan ideologi pada masa itu.`,
    },

    pulang: {
      judul: "Pulang",
      penulis: "Tere liye",
      kategori: "Non fiksi",
      gambar:
        "https://i.pinimg.com/736x/13/18/74/1318743567f4975edc4948a843b83620.jpg",
      sinopsis: `Pulang mengisahkan Bujang, seorang anak kampung yang hidupnya berubah setelah terlibat dalam dunia gelap organisasi bayangan. 
      Dibesarkan dengan keras dan penuh disiplin, Bujang tumbuh menjadi sosok kuat yang bergulat dengan kesetiaan, pengkhianatan, dan pencarian jati diri. 
      Novel ini menyoroti makna keluarga, rumah, dan arti pulang yang sesungguhnya.`,
    },

    pyscologi: {
      judul: "Pyscologi",
      penulis: "Morgan Hosle",
      kategori: "pyscologi",
      gambar:
        "https://i.pinimg.com/1200x/b3/25/bd/b325bde4c1fd5d49942885f959a9e3d3.jpg",
      sinopsis: `The Psychology of Money membahas bagaimana perilaku, emosi, dan pola pikir manusia lebih berpengaruh terhadap keputusan keuangan dibandingkan kecerdasan atau pengetahuan finansial semata. 
      Buku ini menjelaskan bahwa kesuksesan mengelola uang bukan soal seberapa pintar seseorang, 
      melainkan bagaimana ia bersikap terhadap risiko, kesabaran, dan kebiasaan jangka panjang.`,
    },

    Investasi: {
      judul: "Investasi",
      penulis: "Haikal Rafi",
      kategori: "Investasi",
      gambar:
        "https://i.pinimg.com/736x/ce/1f/cf/ce1fcf63cf19e098939ae3dbdef1669b.jpg",
      sinopsis: `Buku investasi membahas konsep dasar hingga strategi dalam mengelola keuangan untuk mencapai tujuan jangka panjang. 
      Di dalamnya dijelaskan berbagai instrumen investasi seperti saham, obligasi, reksa dana, dan aset lainnya, beserta risiko dan potensi keuntungannya. Buku ini menekankan pentingnya perencanaan, disiplin, 
      dan pengambilan keputusan yang bijak agar pembaca mampu membangun kestabilan finansial dan meningkatkan nilai aset secara berkelanjutan.`,
    },

    Blockchain: {
      judul: "Blockchain & Bitcoin Fundamentals",
      penulis: "Haikla Rafi",
      kategori: "Sejarah",
      gambar:
        "https://i.pinimg.com/736x/bd/b9/07/bdb90723b342dbfba4cf2931cc093bc4.jpg",
      sinopsis: `Buku blockchain membahas teknologi blockchain sebagai sistem pencatatan digital terdesentralisasi yang aman dan transparan. 
      Di dalamnya dijelaskan cara kerja blockchain, konsep kriptografi, serta penerapannya dalam berbagai bidang seperti cryptocurrency, keuangan, supply chain, dan smart contract. 
      Buku ini membantu pembaca memahami potensi blockchain dalam mengubah cara transaksi dan pengelolaan data di era digital.`,
    },

    Sains: {
      judul: "Sains",
      penulis: "Nizam Musthofa",
      kategori: "Sains",
      gambar:
        "https://i.pinimg.com/736x/c6/05/c2/c605c25b96e7ae98501808c396c93290.jpg",
      sinopsis: `Buku blockchain membahas teknologi blockchain sebagai sistem pencatatan digital terdesentralisasi yang aman dan transparan. 
      Di dalamnya dijelaskan cara kerja blockchain, konsep kriptografi, serta penerapannya dalam berbagai bidang seperti cryptocurrency, keuangan, supply chain, dan smart contract. 
      Buku ini membantu pembaca memahami potensi blockchain dalam mengubah cara transaksi dan pengelolaan data di era digital.`,
    },

    sains: {
      judul: "Ilmu Pengetahuan Alam",
      penulis: "Alif Al-akbar",
      kategori: "Sains",
      gambar:
        "https://i.pinimg.com/1200x/ba/34/9e/ba349e062c7f08369bbe551fc020238e.jpg",
      sinopsis: `Buku Ilmu Pengetahuan Alam (IPA) membahas konsep dasar tentang makhluk hidup, materi, energi, 
      dan alam semesta melalui kajian biologi, fisika, dan kimia. Materi disajikan secara runtut dengan contoh, ilustrasi, 
      dan percobaan sederhana sehingga mudah dipahami. 
      Buku ini bertujuan mengembangkan kemampuan berpikir ilmiah, rasa ingin tahu, 
      dan pemahaman siswa terhadap fenomena alam serta penerapannya dalam kehidupan sehari-hari.`,
    },

    Investasi: {
      judul: "Investasi",
      penulis: "Shahan Syah",
      kategori: "Investasi",
      gambar:
        "https://i.pinimg.com/736x/9c/47/ab/9c47abe747b62dead79bac0c531caab3.jpg",
      sinopsis: `Investasi merupakan kegiatan menanamkan modal dengan tujuan memperoleh keuntungan di masa depan. 
      Sinopsis ini menjelaskan bahwa investasi melibatkan perencanaan keuangan, pemilihan instrumen yang tepat seperti saham, obligasi, reksa dana, dan aset lainnya, serta pemahaman terhadap risiko dan potensi imbal hasil.
       Dengan strategi yang tepat dan disiplin, investasi membantu mencapai kestabilan dan pertumbuhan finansial jangka panjang.`,
    },

    "Buya Hamka": {
      judul: "Buya Hamka",
      penulis: "A.fuadi",
      kategori: "Non fiksi",
      gambar:
        "https://i.pinimg.com/1200x/e4/93/95/e4939592075ca1824c40075548a069f0.jpg",
      sinopsis: `Buya Hamka mengisahkan perjalanan hidup Haji Abdul Malik Karim Amrullah (Buya Hamka), seorang ulama, sastrawan, 
      dan pemikir besar Indonesia. Cerita menyoroti perjuangannya dalam menuntut ilmu, berdakwah, dan berkarya di tengah dinamika sosial, budaya, 
      dan politik bangsa. Dengan keteguhan iman, pemikiran yang luas, dan kecintaan pada ilmu pengetahuan,
       Buya Hamka memberikan teladan tentang integritas, keikhlasan, dan pengabdian bagi umat dan bangsa.`,
    },

    Sejarah: {
      judul: "Sejarah Dunia Yang Disembunyikan",
      penulis: "Ramah Hidayah",
      kategori: "Sejarah",
      gambar:
        "https://i.pinimg.com/736x/ea/ae/0a/eaae0a88c00d99525f1e34b8aa352f76.jpg",
      sinopsis: `Buku Sejarah Dunia yang Disembunyikan mengungkap berbagai peristiwa, tokoh, 
      dan fakta sejarah yang jarang dibahas atau tidak banyak diketahui publik. Isinya membahas sisi tersembunyi dari sejarah dunia, seperti konspirasi politik, perebutan kekuasaan, peran kelompok elit, dan manipulasi informasi yang memengaruhi peradaban manusia. Buku ini mengajak pembaca berpikir kritis terhadap sejarah resmi 
      dan memahami bahwa sejarah sering ditulis dari sudut pandang pihak yang berkuasa.`,
    },

    "Sejarah Sumatra": {
      judul: "Sejarah Sumatra",
      penulis: "Alan",
      kategori: "Sejarah",
      gambar:
        "https://i.pinimg.com/736x/fb/f1/27/fbf1272d98de65c5b6c4ba9ce5af7432.jpg",
      sinopsis: `Sejarah Sumatra menggambarkan perjalanan panjang pulau Sumatra sebagai salah satu pusat peradaban 
      penting di Nusantara. Sejak masa kerajaan kuno seperti Sriwijaya yang berjaya sebagai pusat perdagangan dan penyebaran agama Buddha, hingga berkembangnya kerajaan-kerajaan Islam seperti Samudra Pasai dan Aceh, Sumatra memiliki peran besar dalam sejarah Indonesia. Sejarahnya juga dipengaruhi oleh kolonialisme, perjuangan melawan penjajah, 
      serta kontribusi masyarakat Sumatra dalam pembentukan bangsa Indonesia.`,
    },

    "Negri 5 Menara": {
      judul: "Negri 5 Menara",
      penulis: "A.fuadi",
      kategori: "Non fiksi  ",
      gambar:
        "https://i.pinimg.com/736x/11/5a/ab/115aab39e5de49565439ff61bfcec7d3.jpg",
      sinopsis: `Negeri 5 Menara mengisahkan Alif Fikri, seorang remaja dari Sumatra Barat yang menempuh pendidikan di Pondok Madani, 
      sebuah pesantren modern di Jawa. Bersama lima sahabatnya, Alif membentuk persahabatan yang dikenal sebagai Sahibul Menara. 
      Mereka sering berkumpul di bawah menara masjid sambil memandang langit dan bermimpi tentang masa depan.
      Dengan motto “Man Jadda Wajada” (siapa yang bersungguh-sungguh akan berhasil), mereka ditempa disiplin, kerja keras, 
      dan semangat belajar. Novel ini mengangkat tema pendidikan, persahabatan, mimpi, dan perjuangan, serta mengajarkan bahwa asal-usul tidak membatasi cita-cita setinggi apa pun.`,
    },

    "Ranah 3 warna": {
      judul: "Ranah 3 warna",
      penulis: "A.fuadi",
      kategori: "Non fiksi  ",
      gambar:
        "https://i.pinimg.com/1200x/b7/21/a3/b721a39d71d17d51f5b4bb4221cb63f5.jpg",
      sinopsis: `Ranah 3 Warna merupakan lanjutan dari Negeri 5 Menara yang menceritakan perjuangan Alif Fikri setelah lulus dari Pondok Madani.
       Alif menghadapi kerasnya kehidupan di perguruan tinggi dan berbagai tantangan ekonomi, akademik, serta mental dalam meraih cita-citanya.
       Dengan prinsip “Man Shabara Zhafira” (siapa yang bersabar akan beruntung), A
       lif belajar tentang ketekunan, kesabaran, dan keikhlasan dalam menghadapi kegagalan dan rintangan. 
       Novel ini menggambarkan proses pendewasaan diri dan perjuangan meraih mimpi melalui kerja keras dan keyakinan.`,
    },

    "Rantau 1 Muara": {
      judul: "Rantau 1 Muara",
      penulis: "A.fuadi",
      kategori: "Non fiksi  ",
      gambar:
        "https://i.pinimg.com/736x/a4/30/22/a43022e8635699604ceff571808f03fa.jpg",
      sinopsis: `Rantau 1 Muara adalah novel penutup trilogi Ahmad Fuadi yang melanjutkan kisah Alif Fikri dalam mengejar mimpi hingga ke luar negeri. 
      Setelah melewati berbagai perjuangan pendidikan dan karier, Alif merantau jauh dari tanah air dan menghadapi tantangan hidup di negeri orang.
      Dengan prinsip “Man Jadda Wajada, Man Shabara Zhafira, Man Saara Ala Darbi Washala”, 
      Alif belajar tentang keteguhan, kesabaran, dan makna pulang. Novel ini menekankan bahwa sejauh apa pun seseorang merantau, 
      pada akhirnya ia akan menemukan muara kehidupan dan jati dirinya.`,
    },

    Ayah: {
      judul: "Ayah",
      penulis: "Andre Hinata",
      kategori: "Non fiksi  ",
      gambar:
        "https://i.pinimg.com/1200x/fd/0f/38/fd0f38dba4384005eb944e35ee87d6c7.jpg",
      sinopsis: `Novel Ayah karya Andrea Hirata mengisahkan tentang Sabari, seorang pria sederhana yang memiliki cinta dan kesetiaan luar biasa.
       Sejak muda, Sabari mencintai Marlena, perempuan yang cantik namun keras kepala. Meskipun cintanya sering bertepuk sebelah tangan dan hidupnya penuh pengorbanan, Sabari tetap setia dan tulus.
       Pernikahan mereka tidak berjalan bahagia. Marlena kerap meninggalkan Sabari dan akhirnya pergi bersama pria lain, 
       meninggalkan seorang anak bernama Zorro. Sabari membesarkan Zorro seorang diri dengan penuh kasih sayang, kesabaran, 
       dan tanggung jawab, menunjukkan makna sejati dari seorang ayah.`,
    },

    "Tanah para bandit": {
      judul: "Tanah para bandit",
      penulis: "Tere Liye",
      kategori: "Non fiksi  ",
      gambar:
        "https://i.pinimg.com/736x/ce/f7/48/cef7485748607bc45d19bc19dcc24b72.jpg",
      sinopsis: `Tanah Para Bandit mengisahkan perjalanan Jim, seorang pemuda yang hidup di negeri keras yang dikuasai 
      oleh kekerasan, ketidakadilan, dan hukum rimba. Di tanah tersebut, para bandit, penguasa serakah, dan kekuatan senjata menjadi penentu segalanya, sementara rakyat kecil hidup dalam ketakutan.
      Jim terlibat dalam berbagai peristiwa berbahaya yang membawanya memahami arti keberanian, persahabatan, pengkhianatan, 
      dan perjuangan melawan ketidakadilan. Di tengah kekacauan, Jim harus memilih: tunduk pada kekuasaan yang menindas atau melawan demi harga diri dan kemanusiaan.
      Novel ini menonjolkan tema perlawanan, moralitas, dan harapan, dengan latar dunia yang kelam namun sarat makna. 
      Tere Liye menyampaikan pesan bahwa di tanah sekeras apa pun, selalu ada harapan jika seseorang berani berdiri di sisi kebenaran.`,
    },

    "Smart Money": {
      judul: "Smart Money",
      penulis: "Haikal Rafi",
      kategori: "Investasi  ",
      gambar:
        "https://i.pinimg.com/736x/a1/2d/de/a12dde2c1d76404876a367f2ca3a142c.jpg",
      sinopsis: `Buku ini menjelaskan bahwa kesuksesan finansial tidak semata 
      ditentukan oleh kecerdasan atau pengetahuan teknis, melainkan oleh kebiasaan, kesabaran, pengendalian diri, 
      dan cara berpikir jangka panjang. Melalui kisah nyata dan contoh sederhana, Morgan Housel menunjukkan pentingnya memahami risiko, keberuntungan, kegagalan, 
      serta perbedaan sudut pandang setiap orang terhadap uang.`,
    },

    "Starting a Bisnis": {
      judul: "Starting a Bisnis",
      penulis: "shahan syah",
      kategori: "investasi  ",
      gambar:
        "https://i.pinimg.com/736x/8d/0e/85/8d0e8501d530c8ef576295f5e95b7524.jpg",
      sinopsis: `Starting a Business membahas langkah-langkah dasar yang perlu dipahami oleh siapa pun yang ingin memulai usaha dari nol. 
      Buku ini menekankan pentingnya ide bisnis yang jelas, pemahaman pasar, serta kemampuan melihat peluang dan 
      masalah di sekitar sebagai dasar membangun bisnis.
      Di dalamnya dijelaskan proses penting seperti perencanaan bisnis, penentuan target konsumen, pengelolaan modal, strategi pemasaran, hingga pengelolaan risiko. Buku ini juga menyoroti bahwa kegagalan adalah bagian dari proses belajar, sehingga seorang pengusaha dituntut untuk kreatif, adaptif, dan pantang menyerah.`,
    },

    "New Event Trading": {
      judul: "New Event Trading",
      penulis: "Ortega",
      kategori: "investasi  ",
      gambar:
        "https://i.pinimg.com/736x/85/16/6d/85166d4286a1db280aacce8bff88aba3.jpg",
      sinopsis: `New Event Trading membahas strategi trading yang berfokus pada peristiwa (event) 
      yang memengaruhi pergerakan harga di pasar keuangan, seperti rilis data ekonomi, laporan keuangan perusahaan, 
      kebijakan bank sentral, hingga berita geopolitik. Buku/konsep ini menekankan bahwa harga tidak bergerak secara acak,
       melainkan sering bereaksi kuat terhadap informasi baru.
      Pembahasan utamanya meliputi cara mengidentifikasi event penting, membaca dampaknya terhadap sentimen pasar, 
      serta mengelola risiko sebelum dan sesudah event terjadi. Trader diajak memahami perbedaan antara ekspektasi pasar dan hasil aktual, karena selisih inilah yang sering menciptakan peluang profit.`,
    },

    "ketika cinta bertasbih": {
      judul: "ketika cinta bertasbih",
      penulis: "Amar musanna",
      kategori: "Fiksi  ",
      gambar:
        "https://i.pinimg.com/736x/d1/c2/cf/d1c2cf0fa74870e463263f37ea9bd47d.jpg",
      sinopsis: `Ketika Cinta Bertasbih adalah novel karya Habiburrahman El Shirazy yang mengisahkan perjalanan cinta, 
      perjuangan hidup, dan keteguhan iman seorang pemuda bernama Azzam (Khairul Azzam). Ia adalah mahasiswa Indonesia yang menuntut ilmu di Universitas Al-Azhar, Mesir, sambil berjuang memenuhi kebutuhan hidupnya dengan bekerja keras, berjualan tempe dan bakso.
      Azzam digambarkan sebagai sosok yang mandiri, sabar, dan taat beragama. Di tengah kesibukan dan keterbatasan ekonomi, 
      ia tetap menjaga prinsip hidup Islami, terutama dalam urusan cinta dan pernikahan. Perjalanan cintanya tidak mudah; 
      ia harus menghadapi kekecewaan, penolakan, serta pergulatan batin ketika perasaannya diuji oleh jarak, waktu, dan takdir.
      Novel ini juga menampilkan tokoh Anna Althafunnisa, 
`,
    },

    "Positive Thinkking": {
      judul: "Positive Thinkking",
      penulis: "Shahan syah",
      kategori: "Non-fiksi  ",
      gambar:
        "https://i.pinimg.com/736x/c7/fe/72/c7fe72be616998b5ad59cc2918ba3bf2.jpg",
      sinopsis: `Positive Thinking (Berpikir Positif) adalah sikap mental yang berfokus pada hal-hal baik, peluang, dan solusi, 
      meskipun sedang menghadapi masalah atau kesulitan. Berpikir positif bukan berarti mengabaikan kenyataan atau masalah, tetapi 
      menyikapinya dengan optimisme, harapan, dan keyakinan bahwa setiap keadaan bisa dihadapi dan diperbaiki.`,
    },

    "Bumi Cinta": {
      judul: "Bumi Cinta",
      penulis: "Habiburrahman El-shirazi",
      kategori: "Non-fiksi  ",
      gambar:
        "https://i.pinimg.com/736x/52/77/9e/52779eefc2f7d402398f8237d0c5fbd5.jpg",
      sinopsis: `Bumi Cinta adalah novel religi-romantis yang mengisahkan perjuangan Muhammad Ayyas, 
      seorang mahasiswa Indonesia yang melanjutkan studi di Moskow, Rusia. Sebagai seorang Muslim yang hidup di lingkungan sekuler dan liberal,
       Ayyas menghadapi berbagai ujian berat yang menguji iman, akhlak, dan prinsip hidupnya.
      Di Rusia, Ayyas tinggal satu apartemen dengan dua perempuan non-Muslim, Yelena dan Linor, yang memiliki 
      latar belakang kehidupan dan pandangan hidup yang jauh berbeda dengannya. Kondisi ini menjadi tantangan besar bagi Ayyas untuk tetap 
      menjaga kesucian diri, menahan hawa nafsu, dan mempertahankan nilai-nilai Islam di tengah godaan dan tekanan budaya Barat.`,
    },

    "Kisah Tanah Jawa": {
      judul: "Kisah Tanah Jawa",
      penulis: "Mada Zidan dan Bonaventura D",
      kategori: "Fiksi  ",
      gambar:
        "https://i.pinimg.com/736x/ea/f9/46/eaf946701d423ef4c31f759fc53273c5.jpg",
      sinopsis: `Kisah Tanah Jawa adalah buku horor-misteri karya Mada Zidan dan Bonaventura D. Genta yang mengangkat cerita-cerita mistis, 
      legenda, dan kejadian gaib di berbagai wilayah Pulau Jawa. Kisah-kisahnya ditelusuri berdasarkan pengalaman nyata, penelusuran spiritual, 
      serta cerita turun-temurun yang masih dipercaya masyarakat.
      Buku ini membahas beragam fenomena seperti tempat angker, makhluk gaib, ritual mistis, hingga sejarah kelam yang melekat pada suatu daerah. 
      Tidak hanya menakutkan, ceritanya juga sarat dengan nilai budaya dan pesan moral, terutama tentang adab, etika, 
      dan batasan manusia terhadap dunia gaib.`,
    },

    "Sains 3": {
      judul: "Sains 3",
      penulis: "Alif Al-akbar",
      kategori: "Sains  ",
      gambar:
        "https://i.pinimg.com/736x/8c/9f/47/8c9f478bb97210d02513bc496f80230b.jpg",
      sinopsis: `Buku Sains 3 merupakan buku pelajaran Ilmu Pengetahuan Alam untuk kelas 3 yang membahas konsep-konsep sains dasar secara
       sederhana dan mudah dipahami oleh siswa. Buku ini dirancang untuk menumbuhkan rasa ingin tahu, kemampuan berpikir ilmiah, 
       dan sikap peduli terhadap lingkungan.
      Materi yang dipelajari meliputi ciri-ciri makhluk hidup, pertumbuhan dan perkembangan manusia, hewan, dan tumbuhan, lingkungan sekitar,
       perubahan wujud benda, energi dan kegunaannya, serta pentingnya menjaga kesehatan dan kebersihan. Setiap pembahasan 
       dilengkapi dengan contoh dalam kehidupan sehari-hari, gambar ilustratif, dan kegiatan pengamatan sederhana.`,
    },

    "Matematika": {
      judul: "Matematika",
      penulis: "Alif Al-akbar",
      kategori: "Sains  ",
      gambar:
        "https://i.pinimg.com/1200x/87/91/81/87918184bcde1343815444bcbc96662c.jpg",
      sinopsis: `Matematika adalah ilmu yang mempelajari angka, pola, hubungan, dan pemecahan masalah secara logis dan sistematis. 
      Matematika digunakan untuk menghitung, mengukur, membandingkan, serta menganalisis berbagai situasi dalam kehidupan sehari-hari.
      Dalam pembelajaran, matematika mencakup materi seperti penjumlahan, pengurangan, perkalian, pembagian, pecahan, bangun datar dan ruang, 
      pengukuran, serta pengolahan data. Melalui matematika, seseorang dilatih untuk berpikir logis, kritis, teliti, dan disiplin.
      Matematika sangat penting karena diterapkan dalam berbagai bidang, seperti pendidikan, teknologi, ekonomi, sains, 
      dan kehidupan sehari-hari, mulai dari mengatur waktu, menghitung uang, hingga memecahkan masalah kompleks.`,
    },

    // Tambahkan buku lainnya di sini...
  };

  // 2. AMBIL ID DARI URL (Membaca tulisan setelah ?id=)
  const params = new URLSearchParams(window.location.search);
  const idBuku = params.get("id");

  // 3. TAMPILKAN DATA KE HTML
  const detailContainer = document.querySelector(".book-detail-wrapper");

  if (idBuku && databaseBuku[idBuku]) {
    const buku = databaseBuku[idBuku];

    // Mengisi data ke elemen HTML
    document.getElementById("judul-buku").innerText = buku.judul;
    document.getElementById("penulis-buku").innerText = buku.penulis;
    document.getElementById("kategori-buku").innerText = buku.kategori;
    document.getElementById("gambar-buku").src = buku.gambar;
    document.getElementById("sinopsis-buku").innerText = buku.sinopsis;

    // Update Judul Tab Browser
    document.title = "Detail - " + buku.judul;
  } else {
    // Jika ID tidak ditemukan dalam database
    detailContainer.innerHTML = `
            <div style="text-align:center; width:100%; padding: 50px;">
                <h2>Maaf, Detail Buku Tidak Ditemukan</h2>
                <a href="koleksi.html">Kembali ke Koleksi</a>
            </div>
        `;
  }
});
