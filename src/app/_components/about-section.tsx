import Container from "./container";

export default function AboutSection(){
  return (
    <section>
      <Container>
        <div className="about-section-content">
          <h3 className="about-section-text text-xl">
            <p>Hey there! I'm Nick.</p>
            <br />
            <p>A Front-End engineer who’s a little obsessed with creating things.</p>
            <br />
            <p>My work experience involves React and Next.js, DevOps tools such as Microsoft Azure, and UI/UX desigin using Figma. ‍</p>
            <br />
            <p>When I’m not writing code, you’ll probably find me writing music and exploring new coffee shops.</p>
          </h3>
        </div>
      </Container>
    </section>
  );
};