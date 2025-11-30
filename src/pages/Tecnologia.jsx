const Tecnologia = () => {
  return (
        <>

<h1> Tecnologia</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item ">
      
      <img src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" className="rounded mx-auto d-block w-70" alt="First slide"/>
    </div>
    <div className="carousel-item img-fluid">
      <img src="https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsMzcyMDYwOTMzOTEtaW1hZ2Uta3A0dnpwYmQuanBn.jpg" className="rounded mx-auto d-block w-50" alt="2"/>
    </div>
    <div className="carousel-item active">
      <img src="https://www.publicdomainpictures.net/pictures/330000/nahled/technology-2020-15851598640jb.jpg" className="rounded mx-auto d-block w-70" alt="Third slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>        
        </>
    ) 
    ;
}

export default Tecnologia;