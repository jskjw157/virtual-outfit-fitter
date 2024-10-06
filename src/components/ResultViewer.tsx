import React from "react";

interface Props {
  imageUrl: string;
}

const ResultViewer: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">합성 결과</h2>
      <div className="relative">
        <img
          src={imageUrl}
          alt="합성된 이미지"
          className="w-full rounded-lg shadow-lg"
        />
        <a
          href={imageUrl}
          download
          className="absolute bottom-4 right-4 bg-white text-indigo-600 px-4 py-2 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          다운로드
        </a>
      </div>
    </div>
  );
};

export default ResultViewer;
