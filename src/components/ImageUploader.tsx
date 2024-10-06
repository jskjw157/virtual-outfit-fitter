import React, { useState } from "react";

interface Props {
  onUpload: (personImage: File, clothingImage: File) => void;
}

const ImageUploader: React.FC<Props> = ({ onUpload }) => {
  const [personImage, setPersonImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);

  const handlePersonImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setPersonImage(e.target.files[0]);
  };

  const handleClothingImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) setClothingImage(e.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (personImage && clothingImage) {
      onUpload(personImage, clothingImage);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          인물 사진
        </label>
        <input
          type="file"
          onChange={handlePersonImageChange}
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          옷 사진
        </label>
        <input
          type="file"
          onChange={handleClothingImageChange}
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100
        "
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        업로드
      </button>
    </form>
  );
};

export default ImageUploader;
