import "../styles/globals.css";
import "../styles/reveiws 2025.css";
import Header from "../components/Header"; // ✅ Import the Header component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
