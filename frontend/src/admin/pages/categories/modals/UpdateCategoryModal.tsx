import { Dialog, DialogTitle } from '@headlessui/react';
import { useState, useEffect } from 'react';
import type { Category } from '../types';

type UpdateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onUpdate: (id: string, updatedCategory: Partial<Category>) => void;
};

export function UpdateCategoryModal({ isOpen, onClose, category, onUpdate }: UpdateModalProps) {
  const [formData, setFormData] = useState<Partial<Category>>({
    name: '',
  });

  // When Category changes (open modal with new Category), update form data
  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,   
      });
    }
  }, [category]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = () => {
    if (category) {
      onUpdate(category._id, formData);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">      

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded max-w-md w-full p-6">
          <DialogTitle className="text-lg font-bold mb-4">Update Category</DialogTitle>

          <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </label>

            <div className="flex justify-end space-x-3">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}