'use client';

import { UploadButton } from './utils/uploadthing';
import Image from 'next/image';

export default function Home() {
  const uploadedImageUrl =
    'https://utfs.io/f/21e4a26d-419d-4ebf-98e0-73c813373257-2vjrgb.jpeg';
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log('Files:', res);
          alert('Upload complete!');
        }}
        onUploadError={(error: Error) => {
          alert('ERROR! ${error.message}');
        }}
      />
      <Image
        src={uploadedImageUrl}
        alt="アップロードされた画像"
        width={500} // 希望の幅を設定
        height={300} // 希望の高さを設定
        unoptimized={true} // 外部ドメインが'next.config.js'で設定されていない場合
      />
    </main>
  );
}
