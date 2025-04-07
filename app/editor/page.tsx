import ImageEditor from '../../components/ImageEditor';

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Editor</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ImageEditor />
        </div>
      </div>
    </div>
  );
}
