import Hero from "../components/heroSection";
import Features from "../components/skillsSection";
import AcademicProject from "../components/academicProjects"
import Contact from "../components/contactSection"


const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <AcademicProject></AcademicProject>
      <Contact></Contact>
    </div>
    

  ) ;
}

export default HomePage;
