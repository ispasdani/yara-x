import type { LanguageData } from "@/types/languageDataTypes";

const schedulingDemo: LanguageData["public"]["schedulingDemo"] = {
  badge: { title: "Automated Monitoring" },
  title: { title: "Never Miss Important Legal Updates" },
  description: {
    title:
      "Set up automated schedules to monitor specific laws, regulations, and business topics. Get timely updates delivered exactly when you need them.",
  },
  sections: {
    scheduledTasks: { title: "Your Scheduled Tasks" },
    recentUpdates: { title: "Recent Updates" },
  },
  buttons: {
    newSchedule: { title: "New Schedule" },
    viewAll: { title: "View All" },
    editSchedule: { title: "Edit Schedule" },
    viewHistory: { title: "View History" },
    runNow: { title: "Run Now" },
    viewDetails: { title: "View Details" },
    createSchedule: { title: "Create Schedule" },
    browseTemplates: { title: "Browse Templates" },
  },
  status: {
    active: { title: "active" },
    paused: { title: "paused" },
  },
  schedules: {
    gdpr: {
      title: { title: "GDPR Compliance Updates" },
      description: {
        title: "Monitor changes in European data protection regulations",
      },
      frequency: { title: "Weekly - Mondays 9:00 AM" },
      lastRun: { title: "2 days ago" },
      nextRun: { title: "In 5 days" },
      category: { title: "Privacy Law" },
    },
    employment: {
      title: { title: "Employment Law Changes" },
      description: {
        title: "Track new labor regulations and workplace policies",
      },
      frequency: { title: "Bi-weekly - Fridays 2:00 PM" },
      lastRun: { title: "1 week ago" },
      nextRun: { title: "Tomorrow" },
      category: { title: "Employment" },
    },
    tax: {
      title: { title: "Tax Code Updates" },
      description: {
        title: "Stay informed about business tax regulation changes",
      },
      frequency: { title: "Monthly - 1st of month" },
      lastRun: { title: "3 weeks ago" },
      nextRun: { title: "In 1 week" },
      category: { title: "Tax Law" },
    },
  },
  updates: {
    gdprUpdate: {
      schedule: { title: "GDPR Compliance Updates" },
      update: {
        title: "New consent requirements for cookie tracking implemented",
      },
      timestamp: { title: "2 hours ago" },
    },
    employmentUpdate: {
      schedule: { title: "Employment Law Changes" },
      update: {
        title: "Remote work policy guidelines updated in 3 jurisdictions",
      },
      timestamp: { title: "1 day ago" },
    },
    taxUpdate: {
      schedule: { title: "Tax Code Updates" },
      update: { title: "Corporate tax deduction changes for Q2 2024" },
      timestamp: { title: "3 days ago" },
    },
  },
  stats: {
    title: { title: "This Month's Activity" },
    updatesFound: { title: "Updates Found" },
    highPriority: { title: "High Priority" },
    successRate: { title: "Success Rate" },
  },
  cta: {
    title: { title: "Stay Ahead of Legal Changes" },
    description: {
      title:
        "Set up your first automated schedule in under 2 minutes. Choose from 50+ pre-built templates or create custom monitoring rules for your specific business needs.",
    },
  },
  labels: {
    next: { title: "Next:" },
    category: { title: "Category:" },
    lastRun: { title: "Last Run:" },
    highPriority: { title: "high priority" },
    mediumPriority: { title: "medium priority" },
  },
};

export default schedulingDemo;
