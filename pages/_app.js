import '../styles/globals.css';
import Nav from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto p-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}