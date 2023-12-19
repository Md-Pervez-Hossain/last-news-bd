import Container from '@/components/ui/Container/Container';
import Title from '@/components/ui/Title/Title';
import React from 'react';
const HomeVideoGallary = () => {
  const videos = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/RSzBvennsLA?si=0kK6rdhO2sfE_d27"
    }
  ]

  return (
    <div >
      <Container>
        <Title>Media Gallery</Title>
        <div className='w-56 h-1 bg-secondary'></div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10  my-10'>
          {
            videos?.map(video => {
              return (
                <div key={video?.id}>
                  <iframe width="300px" height="250px" src={`${video?.link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              )
            })
          }
        </div>
      </Container>

    </div >
  );
};

export default HomeVideoGallary;