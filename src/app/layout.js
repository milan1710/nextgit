import './globals.css';
import Header from "@/app/components/Header";
import { Mulish } from 'next/font/google';
import Footer from "@/app/components/Footer";
import dynamic from 'next/dynamic';



const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
});

// Example of a component to load dynamically
const DynamicComponent = dynamic(() => import('@/app/components/Header'), {
  loading: () => <p>Loading dynamic component...</p>,
});

export const metadata = {
  title: 'Ezy Graphic - Free Vector File Download',
  description: 'Download high-quality vector files for Corel Draw, Illustrator, and Photoshop on Ezy Graphic. Explore a vast collection of creative resources.',
  keywords: 'Ezy Graphic, vector files, Corel Draw, Illustrator, Photoshop, graphic design, download',
  author: 'Ezy Graphic',
  image: '/img/logo.png', // Specify an image URL for social sharing
  url: 'https://ezygraphic.online', // Replace with your actual URL
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        
        {/* Load the dynamic component */}
        <DynamicComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
