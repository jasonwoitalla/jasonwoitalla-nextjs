import ProjectGrid from "@/components/homepage/ProjectGrid";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#fbeec1" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <div className="container" style={{ flex: 1 }}>
          Hello World
          <ProjectGrid />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
