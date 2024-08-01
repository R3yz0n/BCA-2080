import Button from "./Button";
import MyPhoto from "./assets/image.webp";

const Hero = () => {
  return (
    <div>
      <img src={MyPhoto} alt="my pp" height="320px" width="200px" />
      <h1>Hi, I m prem 👋🏼 </h1>
      <h2>Full stack developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis
        eaque id, dolores doloremque, deleniti voluptas natus, consequuntur
        praesentium eligendi dolore sint minima nobis fugiat blanditiis aut illo
        libero omnis accusamus fuga aliquam architecto consequatur.s
      </p>
      <div className="flex gap-4 ">
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};

export default Hero;
