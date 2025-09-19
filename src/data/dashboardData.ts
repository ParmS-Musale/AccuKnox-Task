import { DashboardData } from "@/types/dashboard";

export const initialDashboardData: DashboardData = {
  "CSPM Executive Dashboard": [
    {
      id: "cspm-1",
      name: "Cloud Accounts",
      text: "Connected (2), Not Connected (2) - Total accounts overview",
      category: "CSPM Executive Dashboard",
      isActive: true,
    },
    {
      id: "cspm-2", 
      name: "Cloud Account Risk Assessment",
      text: "Failed (1689), Warning (681), Not available (36), Passed (7253)",
      category: "CSPM Executive Dashboard",
      isActive: true,
    },
  ],
  "CWPP Dashboard": [
    {
      id: "cwpp-1",
      name: "Top 5 Namespace Specific Alerts",
      text: "No Graph data available!",
      category: "CWPP Dashboard",
      isActive: false,
    },
    {
      id: "cwpp-2",
      name: "Workload Alerts", 
      text: "No Graph data available!",
      category: "CWPP Dashboard",
      isActive: false,
    },
  ],
  "Registry Scan": [
    {
      id: "registry-1",
      name: "Image Risk Assessment",
      text: "1470 Total Vulnerabilities - Critical (9), High (150)",
      category: "Registry Scan",
      isActive: true,
    },
    {
      id: "registry-2",
      name: "Image Security Issues",
      text: "2 Total Images - Critical (2), High (2)",
      category: "Registry Scan", 
      isActive: true,
    },
  ],
};

export const availableWidgets: DashboardData = {
  CSPM: [
    {
      id: "cspm-1",
      name: "Cloud Accounts",
      text: "Connected (2), Not Connected (2) - Total accounts overview",
      category: "CSPM",
    },
    {
      id: "csmp-2",
      name: "Cloud Account Risk Assessment", 
      text: "Failed (1689), Warning (681), Not available (36), Passed (7253)",
      category: "CSPM",
    },
    {
      id: "cspm-3",
      name: "Security Compliance",
      text: "Overall compliance score and policy violations",
      category: "CSPM",
    },
  ],
  CWPP: [
    {
      id: "cwpp-1", 
      name: "Top 5 Namespace Specific Alerts",
      text: "No Graph data available!",
      category: "CWPP",
    },
    {
      id: "cwpp-2",
      name: "Workload Alerts",
      text: "No Graph data available!",
      category: "CWPP",
    },
    {
      id: "cwpp-3",
      name: "Runtime Security",
      text: "Real-time threat detection and response metrics",
      category: "CWPP",
    },
  ],
  Image: [
    {
      id: "image-1",
      name: "Image Risk Assessment", 
      text: "1470 Total Vulnerabilities - Critical (9), High (150)",
      category: "Image",
    },
    {
      id: "image-2",
      name: "Image Security Issues",
      text: "2 Total Images - Critical (2), High (2)",
      category: "Image",
    },
    {
      id: "image-3",
      name: "Container Scanning",
      text: "Automated vulnerability scanning results",
      category: "Image",
    },
  ],
  Ticket: [
    {
      id: "ticket-1",
      name: "Open Security Tickets",
      text: "Track and manage security incident tickets",
      category: "Ticket",
    },
    {
      id: "ticket-2",
      name: "Ticket Resolution Time",
      text: "Average time to resolve security tickets",
      category: "Ticket",
    },
  ],
};