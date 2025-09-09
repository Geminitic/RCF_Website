import React, { useEffect, useState } from 'react';
import { usePhoto } from '../contexts/PhotoContext';
import { useUser } from '../contexts/UserContext';
import PhotoUploadModal from '../components/community/PhotoUploadModal';
import { CheckCircle, XCircle, Upload } from 'lucide-react';

const AdminApprovalPage: React.FC = () => {
  const { pendingPhotos, approvePhoto, deletePhoto } = usePhoto();
  const { setIsAdmin } = useUser();
  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    setIsAdmin(true);
    return () => setIsAdmin(false);
  }, [setIsAdmin]);

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Pending Photo Approvals</h1>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-1 rounded"
        >
          <Upload className="h-4 w-4" />
          <span>Add Photo</span>
        </button>
      </div>
      {pendingPhotos.length === 0 && (
        <p>No pending photos.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pendingPhotos.map(photo => (
          <div key={photo.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold mb-2">{photo.title}</h2>
              <p className="text-sm mb-4">{photo.description}</p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => approvePhoto(photo.id)}
                  className="flex items-center space-x-1 bg-indigo-600 text-white px-3 py-1 rounded"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => deletePhoto(photo.id)}
                  className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded"
                >
                  <XCircle className="h-4 w-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PhotoUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />
    </div>
  );
};

export default AdminApprovalPage;
