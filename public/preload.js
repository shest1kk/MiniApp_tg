(function() {
    const imagesToPreload = [
        '/assets/background-main.jpg',
        '/assets/1.png',
        '/assets/2.png',
        '/assets/3.png',
        '/assets/4.png',
        '/assets/5.png',
        '/assets/6.png',
        '/assets/7.png',
        '/assets/8.png',
        '/assets/9.png',
        '/assets/10.png',
        '/assets/logo.svg',
        '/assets/dresscode.svg',
        '/assets/FaqAbout_frame.svg',
        '/assets/living.svg',
        '/assets/test.svg',
        '/testimfonts.svg'

        // Добавьте остальные URL-адреса изображений
    ];

    imagesToPreload.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
})();
