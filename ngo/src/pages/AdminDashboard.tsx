import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';
import { 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  FileText, 
  Briefcase,
  Calendar,
  User,
  MapPin,
  Image,
  Users2
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const { projects, blogPosts, careers, addProject, addBlogPost, addCareer, updateProject, updateBlogPost, updateCareer, deleteProject, deleteBlogPost, deleteCareer } = useContent();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('projects');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({});

  React.useEffect(() => {
    if (!user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openModal = (type: 'project' | 'blog' | 'career', item?: any) => {
    setEditingItem(item);
    if (type === 'project') {
      setFormData(item || {
        title: '',
        description: '',
        category: 'restoration',
        location: '',
        year: new Date().getFullYear().toString(),
        status: 'completed',
        image: ''
      });
    } else if (type === 'blog') {
      setFormData(item || {
        title: '',
        excerpt: '',
        content: '',
        author: 'Admin',
        date: new Date().toISOString().split('T')[0],
        readTime: 5,
        image: ''
      });
    } else if (type === 'career') {
      setFormData(item || {
        title: '',
        description: '',
        department: '',
        location: '',
        type: 'Full-time',
        experience: 'Mid',
        requirements: [],
        postedDate: new Date().toISOString().split('T')[0]
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setFormData({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'projects') {
      if (editingItem) {
        updateProject(editingItem.id, formData);
      } else {
        addProject({ ...formData, id: Date.now() });
      }
    } else if (activeTab === 'blog') {
      if (editingItem) {
        updateBlogPost(editingItem.id, formData);
      } else {
        addBlogPost({ ...formData, id: Date.now() });
      }
    } else if (activeTab === 'careers') {
      if (editingItem) {
        updateCareer(editingItem.id, formData);
      } else {
        addCareer({ ...formData, id: Date.now() });
      }
    }
    
    closeModal();
  };

  const handleDelete = (type: 'project' | 'blog' | 'career', id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      if (type === 'project') {
        deleteProject(id);
      } else if (type === 'blog') {
        deleteBlogPost(id);
      } else if (type === 'career') {
        deleteCareer(id);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === 'requirements') {
      // Handle requirements as array
      const requirements = e.target.value.split('\n').filter(req => req.trim() !== '');
      setFormData({
        ...formData,
        requirements
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-heritage-navy font-serif">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Projects</p>
                <p className="text-2xl font-bold text-heritage-navy">{projects.length}</p>
              </div>
              <Briefcase className="w-8 h-8 text-heritage-gold" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Blog Posts</p>
                <p className="text-2xl font-bold text-heritage-navy">{blogPosts.length}</p>
              </div>
              <FileText className="w-8 h-8 text-heritage-gold" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Open Positions</p>
                <p className="text-2xl font-bold text-heritage-navy">{careers.length}</p>
              </div>
              <Users2 className="w-8 h-8 text-heritage-gold" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Projects</p>
                <p className="text-2xl font-bold text-heritage-navy">
                  {projects.filter(p => p.status === 'ongoing').length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-heritage-gold" />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published Posts</p>
                <p className="text-2xl font-bold text-heritage-navy">{blogPosts.length}</p>
              </div>
              <User className="w-8 h-8 text-heritage-gold" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'projects'
                    ? 'border-heritage-gold text-heritage-gold'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveTab('blog')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'blog'
                    ? 'border-heritage-gold text-heritage-gold'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'careers'
                    ? 'border-heritage-gold text-heritage-gold'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Careers
              </button>
            </nav>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-heritage-navy">
                {activeTab === 'projects' ? 'Manage Projects' : activeTab === 'blog' ? 'Manage Blog Posts' : 'Manage Careers'}
              </h2>
              <button
                onClick={() => openModal(activeTab as 'project' | 'blog' | 'career')}
                className="flex items-center space-x-2 bg-heritage-gold text-white px-4 py-2 rounded-lg hover:bg-heritage-gold/90 transition-colors duration-200"
              >
                <Plus size={16} />
                <span>Add {activeTab === 'projects' ? 'Project' : activeTab === 'blog' ? 'Post' : 'Position'}</span>
              </button>
            </div>

            {/* Content Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                    {activeTab === 'projects' ? (
                      <>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      </>
                    ) : activeTab === 'blog' ? (
                      <>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Author</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Read Time</th>
                      </>
                    ) : (
                      <>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Department</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-700">Experience</th>
                      </>
                    )}
                    <th className="text-right py-3 px-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === 'projects' ? projects : activeTab === 'blog' ? blogPosts : careers).map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium text-heritage-navy">{item.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {item.description || (item as any).excerpt}
                        </div>
                      </td>
                      {activeTab === 'projects' ? (
                        <>
                          <td className="py-3 px-4 text-sm text-gray-600 capitalize">{(item as any).category}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{(item as any).location}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              (item as any).status === 'completed' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {(item as any).status}
                            </span>
                          </td>
                        </>
                      ) : activeTab === 'blog' ? (
                        <>
                          <td className="py-3 px-4 text-sm text-gray-600">{(item as any).author}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {new Date((item as any).date).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">{(item as any).readTime} min</td>
                        </>
                      ) : (
                        <>
                          <td className="py-3 px-4 text-sm text-gray-600">{(item as any).department}</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                              {(item as any).type}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                              {(item as any).experience}
                            </span>
                          </td>
                        </>
                      )}
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => openModal(activeTab as 'project' | 'blog' | 'career', item)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(activeTab as 'project' | 'blog' | 'career', item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {(activeTab === 'projects' ? projects : activeTab === 'blog' ? blogPosts : careers).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No {activeTab} found. Create your first one!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-heritage-navy">
                  {editingItem ? 'Edit' : 'Add'} {activeTab === 'projects' ? 'Project' : activeTab === 'blog' ? 'Blog Post' : 'Career Position'}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description || ''}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent resize-none"
                />
              </div>

              {activeTab === 'blog' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                    <textarea
                      name="excerpt"
                      value={formData.excerpt || ''}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      name="content"
                      value={formData.content || ''}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent resize-none"
                    />
                  </div>
                </>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {activeTab === 'projects' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        name="category"
                        value={formData.category || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      >
                        <option value="restoration">Restoration</option>
                        <option value="conservation">Conservation</option>
                        <option value="cultural">Cultural Sites</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select
                        name="status"
                        value={formData.status || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      >
                        <option value="completed">Completed</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="planned">Planned</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                      <input
                        type="text"
                        name="year"
                        value={formData.year || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                  </>
                ) : activeTab === 'blog' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Read Time (minutes)</label>
                      <input
                        type="number"
                        name="readTime"
                        value={formData.readTime || ''}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                      <select
                        name="type"
                        value={formData.type || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                      <select
                        name="experience"
                        value={formData.experience || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      >
                        <option value="Entry">Entry</option>
                        <option value="Mid">Mid</option>
                        <option value="Senior">Senior</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Posted Date</label>
                      <input
                        type="date"
                        name="postedDate"
                        value={formData.postedDate || ''}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                      />
                    </div>
                  </>
                )}
              </div>

              {activeTab === 'careers' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Requirements (one per line)</label>
                  <textarea
                    name="requirements"
                    value={formData.requirements ? formData.requirements.join('\n') : ''}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Enter each requirement on a new line..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent resize-none"
                  />
                </div>
              )}

              {(activeTab === 'projects' || activeTab === 'blog') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image || ''}
                    onChange={handleChange}
                    required
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-heritage-gold focus:border-transparent"
                  />
                </div>
              )}

              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-heritage-gold text-white px-6 py-3 rounded-lg hover:bg-heritage-gold/90 transition-colors duration-200"
                >
                  <Save size={16} />
                  <span>{editingItem ? 'Update' : 'Create'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;