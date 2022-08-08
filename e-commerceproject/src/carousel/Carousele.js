import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div className='carosel w-100'>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img
        className="d-block"
        src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=1060&t=st=1659419728~exp=1659420328~hmac=33708577e130157f888bd7e10dd6d9cb0f364fcddc9d48ea619a08281fb6dba4"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block"
        src="https://img.freepik.com/free-vector/flat-design-shopping-center-twitch-background_23-2149337408.jpg?w=996&t=st=1659419768~exp=1659420368~hmac=be901e3b24e171d3ce88062eea67dd25e5ae2e3ed051d00a67b9075d6c0b9d20"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=1060&t=st=1659419868~exp=1659420468~hmac=2aad8980568f5fdb5f4773c1ccdfef0f9f8f2fc0d88694e9e153d7c54e372eb0"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  );
}

export default UncontrolledExample;