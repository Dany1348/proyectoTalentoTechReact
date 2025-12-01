
const Moda = () => {
  return (
    <>

      <h1 style={{color:"aquamarine"}} > Pagina de MODA</h1>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">

            <img style={{height:"200px" , objectFit:"cover"}} src="https://t4.ftcdn.net/jpg/05/70/78/45/360_F_570784563_g5aS4uSsgACOV58QVMNqLZAx2VelqC9V.jpg" className="rounded w-90 mx-auto d-block w-90" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img style={{height:"200px" , objectFit:"cover"}} src="https://www.shutterstock.com/image-photo/fashion-young-stylish-woman-walking-600nw-2345768139.jpg" className="rounded mx-auto d-block w-90" alt="2 slide" />
          </div>
          <div className="carousel-item">
            <img style={{height:"200px" , objectFit:"cover"}}  src="https://www.shutterstock.com/image-photo/young-beautiful-smiling-blond-hipster-260nw-2429473021.jpg" className="rounded mx-auto d-block w-90" alt="Third slide" />
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



}

export default Moda;