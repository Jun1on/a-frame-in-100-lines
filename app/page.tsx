import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Download Extension',
    },
    {
      action: 'link',
      label: 'Learn More',
      target: 'https://uniswap.org'
    },
  ],
  image: '/ext.screenshot.png',
  post_url: 'https://yourdomain.com/api/frame'
});

export const metadata: Metadata = {
  title: 'Uniswap Extension',
  description: 'Download the Uniswap Extension and Learn More',
  openGraph: {
    title: 'Uniswap Extension',
    description: 'Download the Uniswap Extension and Learn More',
    images: ['/ext.screenshot.png']
  },
  other: {
    ...frameMetadata
  }
};

export default function Page() {
  return (
    <>
      <h1>Uniswap Extension</h1>
    </>
  );
}