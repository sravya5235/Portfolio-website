import imgYolo from "../assets/yolo.png";
import imgVitals from "../assets/vitals_graph.png";
import imgInventory from "../assets/inventory.png";
import imgPrompt from "../assets/prompt_optimization.png";

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  techStack: string[];
  href: string;
}

export const projectsData: Project[] = [
  {
    id: "yolo-drone",
    image: imgYolo,
    title: "YOLO-Powered Smart Drone Surveillance",
    description: "An AI-driven drone surveillance system designed for disaster scenarios, capable of real-time object detection and autonomous navigation to assist in rescue and monitoring operations.",
    techStack: ["YOLOv8", "OpenCV", "ROS", "Python"],
    href: "https://github.com/sravya5235/Smart-drone-surveillance-system"
  },
  {
    id: "vitalsgraph",
    image: imgVitals,
    title: "VitalsGraph – ICU Resource Optimization System",
    description: "A real-time hospital resource management platform that monitors ICU bed availability, performs triage-based risk scoring, and optimizes patient allocation using advanced database techniques.",
    techStack: ["React (Vite)", "FastAPI", "PostgreSQL"],
    href: "https://github.com/sravya5235/VitalsGraph"
  },
  {
    id: "inventory-dashboard",
    image: imgInventory,
    title: "Real-Time E-Commerce & Inventory Dashboard",
    description: "A data-driven dashboard for tracking sales, monitoring inventory, and generating real-time business insights with automated alerts for stock management.",
    techStack: ["MySQL", "Python", "Streamlit", "Pandas"],
    href: "https://github.com/sravya5235/E-Commerce-Order-Inventory-Management"
  },
  {
    id: "prompt-optimization",
    image: imgPrompt,
    title: "Automated Prompt Optimization Using LLMs",
    description: "A framework that automatically generates, evaluates, and refines LLM prompts using metric-based scoring to improve response quality and consistency.",
    techStack: ["Python", "LLM APIs"],
    href: "https://github.com/sravya5235/Automated-Prompt-Optimization-Using-LLMs"
  }
];
