document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('open')
    document.querySelector('.burger').classList.toggle('open')
})


new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    arrows:{
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1, 
              draggable: true,
              itemWidth: 150,
              duration: 0.25
            }
          },
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            itemWidth: 150,
            duration: 0.25
          }
        },
        {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: '.dot',
              draggable: true,
              itemWidth: 150,
              duration: 0.25
            }
          }
    ]
});
