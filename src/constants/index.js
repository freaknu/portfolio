import project1 from "../assets/projects/b.png";
import project2 from "../assets/projects/g.png";
import project3 from "../assets/projects/l.png";
import project4 from "../assets/projects/s.png";
import project5 from "../assets/projects/t.jpeg";
export const HERO_CONTENT = 'I am an enthusiastic full stack developer with a strong foundation in programming languages like C, C++, Java, and Python, along with skills in data structures and algorithms. I am also proficient in front-end development with React and back-end technologies like Node.js and MongoDB, and have experience with Python libraries such as NumPy and pandas for data manipulation. My goal is to leverage my knowledge to build scalable, user-friendly web applications and continuously expand my expertise in this dynamic field. I’m excited to bring my dedication and problem-solving skills to projects that make a meaningful impact';

export const ABOUT_TEXT = "I am a dedicated and versatile full stack developer with a passion for creating efficient, user-friendly web applications. With a strong foundation in C, C++, Java, Python, data structures, and algorithms, I am also skilled in React, Node.js, and MongoDB. My journey in tech started with a curiosity about building impactful solutions, and I'm now focused on honing my skills further. I thrive in collaborative environments, tackling complex problems to deliver high-quality results. Outside of coding, I enjoy exploring new technologies and am eager to make meaningful contributions to open-source projects.";

export const PROJECTS = [
  {
    title: "Binary Search Tree Implementation",
    image: project1,
    description: "An in-depth implementation of a Binary Search Tree (BST) in C++ with functionalities for insertion, deletion, finding maximum and minimum values, and tree traversal methods including Level Order and Morris Traversal. This project demonstrates efficient problem-solving techniques within data structures.",
    technologies: ["C++", "Data Structures & Algorithms", "Problem Solving"]
  },
  {
    title: "Graph Algorithms Implementation",
    image: project2,
    description: "A comprehensive project implementing key graph algorithms in C++. This project includes algorithms for Depth-First Search (DFS), Breadth-First Search (BFS), Dijkstra’s shortest path, Prim’s Minimum Spanning Tree (MST), Topological Sort, and detection of cycles in both undirected and directed graphs. It also includes solutions for finding Strongly Connected Components and shortest paths, showcasing the use of advanced data structures and problem-solving strategies.",
    technologies: ["C++", "Graph Theory", "Data Structures & Algorithms", "Problem Solving"]
  },
  {
    title: "Linked List Operations",
    image: project3,
    description: "An in-depth implementation of a singly linked list in C++. This project includes various functionalities such as inserting nodes at the head, tail, or a specified position, printing the list, and deleting nodes from a specific position. The project also handles memory management through custom destructors, ensuring efficient resource deallocation.",
    technologies: ["C++", "Data Structures", "Linked List", "Memory Management"]
  },
  {
    title: "Lazy Propagation Segment Tree",
    image: project4,
    description:
      "This project demonstrates a segment tree with lazy propagation for efficient range updates and queries. It supports building the tree, point updates, range updates, and range minimum queries. Lazy propagation optimizes the range update operations, which is particularly useful in competitive programming and scenarios requiring fast queries and updates on intervals.",
    technologies: ["C++", "Data Structures", "Segment Tree", "Lazy Propagation"],
  },

  {
    title: "Trie Data Structure",
    image: project5,
    description: "This project implements a Trie data structure for efficient insertion, searching, and prefix checking of words. The Trie allows for fast retrieval of strings and is particularly useful for autocomplete features, spell checkers, and dictionary implementations.",
    technologies: ["C++", "Data Structures", "Trie"],
  },
];

export const CONTACT = {
  address: "Danapur Patna,8015003",
  phoneNo: "+91 6205356670",
  email: "pk2239.29.jnv@gmail.com",
};
