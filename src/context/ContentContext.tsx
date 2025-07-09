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

interface Career {
  id: number;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  requirements: string[];
  postedDate: string;
}

interface ContentContextType {
  projects: Project[];
  blogPosts: BlogPost[];
  careers: Career[];
  addProject: (project: Project) => void;
  addBlogPost: (post: BlogPost) => void;
  addCareer: (career: Career) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  updateBlogPost: (id: number, post: Partial<BlogPost>) => void;
  updateCareer: (id: number, career: Partial<Career>) => void;
  deleteProject: (id: number) => void;
  deleteBlogPost: (id: number) => void;
  deleteCareer: (id: number) => void;
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
  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    // Load data from localStorage on app start
    const savedProjects = localStorage.getItem('heritage_projects');
    const savedBlogPosts = localStorage.getItem('heritage_blog_posts');
    const savedCareers = localStorage.getItem('heritage_careers');
    
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
    
    if (savedCareers) {
      setCareers(JSON.parse(savedCareers));
    } else {
      // Initialize with sample data
      const sampleCareers: Career[] = [
        {
          id: 1,
          title: 'Heritage Conservation Specialist',
          description: 'Lead conservation efforts for historical monuments and artifacts. Work with multidisciplinary teams to develop and implement preservation strategies using traditional and modern techniques.',
          department: 'Conservation',
          location: 'Mumbai, India',
          type: 'Full-time',
          experience: 'Mid',
          requirements: [
            'Master\'s degree in Art Conservation, Archaeology, or related field',
            '3-5 years of experience in heritage conservation',
            'Knowledge of traditional building materials and techniques',
            'Experience with documentation and reporting',
            'Strong analytical and problem-solving skills',
            'Ability to work in challenging field conditions'
          ],
          postedDate: '2024-01-15'
        },
        {
          id: 2,
          title: 'Cultural Heritage Project Manager',
          description: 'Oversee heritage preservation projects from conception to completion. Coordinate with stakeholders, manage budgets, timelines, and ensure quality deliverables while maintaining cultural sensitivity.',
          department: 'Project Management',
          location: 'Delhi, India',
          type: 'Full-time',
          experience: 'Senior',
          requirements: [
            'Bachelor\'s degree in Project Management, Heritage Studies, or related field',
            '5+ years of project management experience',
            'PMP certification preferred',
            'Experience in heritage or cultural sector',
            'Excellent communication and leadership skills',
            'Proficiency in project management software'
          ],
          postedDate: '2024-01-10'
        },
        {
          id: 3,
          title: 'Heritage Documentation Intern',
          description: 'Support our documentation team in creating comprehensive records of heritage sites and artifacts. Learn advanced photography, 3D scanning, and digital archiving techniques.',
          department: 'Documentation',
          location: 'Jaipur, India',
          type: 'Internship',
          experience: 'Entry',
          requirements: [
            'Currently pursuing degree in History, Archaeology, or related field',
            'Basic photography and computer skills',
            'Interest in cultural heritage and preservation',
            'Attention to detail and accuracy',
            'Willingness to travel to heritage sites',
            'Good written and verbal communication skills'
          ],
          postedDate: '2024-01-08'
        }
      ];
      setCareers(sampleCareers);
      localStorage.setItem('heritage_careers', JSON.stringify(sampleCareers));
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

  const addCareer = (career: Career) => {
    const updatedCareers = [...careers, career];
    setCareers(updatedCareers);
    localStorage.setItem('heritage_careers', JSON.stringify(updatedCareers));
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

  const updateCareer = (id: number, updatedCareer: Partial<Career>) => {
    const updatedCareers = careers.map(career =>
      career.id === id ? { ...career, ...updatedCareer } : career
    );
    setCareers(updatedCareers);
    localStorage.setItem('heritage_careers', JSON.stringify(updatedCareers));
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

  const deleteCareer = (id: number) => {
    const updatedCareers = careers.filter(career => career.id !== id);
    setCareers(updatedCareers);
    localStorage.setItem('heritage_careers', JSON.stringify(updatedCareers));
  };

  const value = {
    projects,
    blogPosts,
    careers,
    addProject,
    addBlogPost,
    addCareer,
    updateProject,
    updateBlogPost,
    updateCareer,
    deleteProject,
    deleteBlogPost
    deleteCareer
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};