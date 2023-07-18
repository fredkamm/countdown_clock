import Header from "./components/header";
import MainContent from "./components/main";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <MainContent />
      <Footer />
    </main>
  );
}
