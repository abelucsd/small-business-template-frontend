import InformationalLayout from "./InformationalLayout"


const About = () => {
  return (
    <>
      <InformationalLayout title="About">
        <div className="flex flex-col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </InformationalLayout>
    </>
  )
}

export default About