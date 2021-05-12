import '../styles/globals.scss';
// import 'tailwindcss/tailwind.css';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import GoTop from '../components/GoTop';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="pt-32">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
