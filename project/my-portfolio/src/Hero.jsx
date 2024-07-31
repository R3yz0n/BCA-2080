import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <h1>Hero</h1>
      <div className="flex gap-4 ">
        <Button title="Contact Me" type="orange"  icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};

export default Hero;
