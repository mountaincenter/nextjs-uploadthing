'use client';

import { useRef, useState } from 'react';
import { UploadButton } from './utils/uploadthing';
import Webcam from 'react-webcam';
import { CameraIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const webcamRef = useRef<Webcam>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoConstraints = {
    facingMode: 'environment',
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };

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
      {isCameraActive && (
        <>
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
        </>
      )}
      <CameraIcon className="h-5 w-5" onClick={toggleCamera} />
    </main>
  );
}
