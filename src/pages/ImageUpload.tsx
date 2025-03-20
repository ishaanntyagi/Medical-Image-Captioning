import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Brain } from "lucide-react";

const ImageUpload: React.FC = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".dicom"] },
    maxFiles: 1,
  });

  const handleAnalyze = async () => {
    if (!image) return;
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate AI processing delay
    setAnalysisResult("🧠 Glioma tumor detected in the left hemisphere.");
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-3xl">
        <div className="text-center">
          <Brain className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            Medical Image Analysis
          </h1>
          <p className="text-gray-600 mt-2">
            Upload an MRI scan for automatic tumor detection.
          </p>
        </div>

        {/* Drag & Drop Upload */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 mt-6 text-center cursor-pointer transition ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag & drop your MRI scan here, or click to upload
          </p>
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mt-4 text-center">
            <h3 className="text-sm font-medium text-gray-700">Preview:</h3>
            <img
              src={preview}
              alt="MRI Preview"
              className="w-64 h-64 object-cover rounded-lg mx-auto shadow-md"
            />
          </div>
        )}

        {/* Processing State */}
        {isProcessing && (
          <div className="text-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">
              Processing MRI for tumor detection...
            </p>
          </div>
        )}

        {/* Analysis Result */}
        {analysisResult && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 text-green-700 text-center">
            <p>{analysisResult}</p>
          </div>
        )}

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!image || isProcessing}
          className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Analyze MRI
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
// Compare this snippet from src/context/AuthContext.tsx:



