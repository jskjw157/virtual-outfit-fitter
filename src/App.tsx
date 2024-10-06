import { useState } from "react";
import axios from "axios";
import ImageUploader from "./components/ImageUploader";
import ResultViewer from "./components/ResultViewer";

function App() {
  const [result, setResult] = useState<string | null>(null);

  const handleUpload = async (personImage: File, clothingImage: File) => {
    const formData = new FormData();
    formData.append("personImage", personImage);
    formData.append("clothingImage", clothingImage);

    try {
      const response = await axios.post(
        "https://[YOUR_CLOUD_FUNCTION_URL]/api/combine",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data.result);
    } catch (error) {
      console.error("이미지 처리 중 오류 발생:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Virtual Outfit Fitter
          </h1>
          <ImageUploader onUpload={handleUpload} />
          {result && <ResultViewer imageUrl={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;
