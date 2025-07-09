import React, { createContext, useContext, useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  status: string;
  image: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
}

interface ContentContextType {
  projects: Project[];
  blogPosts: BlogPost[];
  addProject: (project: Project) => void;
  addBlogPost: (post: BlogPost) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  updateBlogPost: (id: number, post: Partial<BlogPost>) => void;
  deleteProject: (id: number) => void;
  deleteBlogPost: (id: number) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load data from localStorage on app start
    const savedProjects = localStorage.getItem('heritage_projects');
    const savedBlogPosts = localStorage.getItem('heritage_blog_posts');
    
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Initialize with sample data
      const sampleProjects: Project[] = [
        {
          id: 1,
          title: 'Ancient Temple Complex Restoration',
          description: 'Complete restoration of a 12th-century temple complex using traditional techniques and locally sourced materials.',
          category: 'restoration',
          location: 'Rajasthan, India',
          year: '2023',
          status: 'completed',
          image: 'https://images.pexels.com/photos/2253890/pexels-photo-2253890.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        },
        {
          id: 2,
          title: 'Colonial Heritage Mansion',
          description: 'Preservation and adaptive reuse of a Victorian-era mansion into a cultural center.',
          category: 'conservation',
          location: 'Mumbai, India',
          year: '2023',
          status: 'ongoing',
          image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        }
      ];
      setProjects(sampleProjects);
      localStorage.setItem('heritage_projects', JSON.stringify(sampleProjects));
    }
    
    if (savedBlogPosts) {
      setBlogPosts(JSON.parse(savedBlogPosts));
    } else {
      // Initialize with sample data
      const sampleBlogPosts: BlogPost[] = [
        {
          id: 1,
          title: 'The Art of Traditional Stone Carving in Heritage Restoration',
          excerpt: 'Exploring the intricate techniques and cultural significance of traditional stone carving methods used in our heritage restoration projects.',
          content: 'Traditional stone carving is more than just a craft; it\'s a bridge connecting us to our ancestors and their artistic legacy. In our recent temple restoration project, we worked closely with master craftsmen who have inherited these skills through generations...',
          author: 'Dr. Priya Sharma',
          date: '2024-01-15',
          readTime: 8,
          image: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        },
        {
          id: 2,
          title: 'Preserving Cultural Heritage in the Digital Age',
          excerpt: 'How modern technology is revolutionizing heritage preservation while maintaining authenticity and cultural integrity.',
          content: 'The digital revolution has opened new possibilities for heritage preservation. From 3D scanning to virtual reality documentation, we explore how technology enhances our conservation efforts...',
          author: 'Rajesh Patel',
          date: '2024-01-10',
          readTime: 6,
          image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
        }
      ];
      setBlogPosts(sampleBlogPosts);
      localStorage.setItem('heritage_blog_posts', JSON.stringify(sampleBlogPosts));
    }
  }, []);

  const addProject = (project: Project) => {
    const updatedProjects = [...projects, project];
    setProjects(updatedProjects);
    localStorage.setItem('heritage_projects', JSON.stringify(updatedProjects));
  };

  const addBlogPost = (post: BlogPost) => {
    const updatedPosts = [...blogPosts, post];
    setBlogPosts(updatedPosts);
    localStorage.setItem('heritage_blog_posts', JSON.stringify(updatedPosts));
  };

  const updateProject = (id: number, updatedProject: Partial<Project>) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, ...updatedProject } : project
    );
    setProjects(updatedProjects);
    localStorage.setItem('heritage_projects', JSON.stringify(updatedProjects));
  };

  const updateBlogPost = (id: number, updatedPost: Partial<BlogPost>) => {
    const updatedPosts = blogPosts.map(post =>
      post.id === id ? { ...post, ...updatedPost } : post
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem('heritage_blog_posts', JSON.stringify(updatedPosts));
  };

  const deleteProject = (id: number) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('heritage_projects', JSON.stringify(updatedProjects));
  };

  const deleteBlogPost = (id: number) => {
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
    localStorage.setItem('heritage_blog_posts', JSON.stringify(updatedPosts));
  };

  const value = {
    projects,
    blogPosts,
    addProject,
    addBlogPost,
    updateProject,
    updateBlogPost,
    deleteProject,
    deleteBlogPost
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};