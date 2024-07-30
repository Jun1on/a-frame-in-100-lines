import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Download Extension',
      target: 'https://chromewebstore.google.com/detail/uniswap-extension/nnpmfplkfogfpmcngplhnbdnnilmcdcg'
    },
    {
      action: 'link',
      label: 'Learn More',
      target: 'https://uniswap.org'
    },
  ],
  image: `/screenshot.png`,
  post_url: 'https://yourdomain.com/api/frame'
});

export const metadata: Metadata = {
  title: 'Uniswap Extension',
  description: 'Download the Uniswap Extension and Learn More',
  openGraph: {
    title: 'Uniswap Extension',
    description: 'Download the Uniswap Extension and Learn More',
    images: ['/screenshot.png']
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