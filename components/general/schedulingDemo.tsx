"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Bell,
  CheckCircle,
  Play,
  Pause,
  Settings,
} from "lucide-react";
import { useLanguageData } from "@/hooks/useLanguageData";
import type { LanguageData } from "@/types/languageDataTypes";

// Default values for SSR/SEO
const DEFAULT_SCHEDULING_DEMO: LanguageData["public"]["schedulingDemo"] = {
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

const SchedulingDemo = () => {
  const { langData } = useLanguageData();
  const t = langData?.public.schedulingDemo ?? DEFAULT_SCHEDULING_DEMO;
  const [activeSchedule, setActiveSchedule] = useState<number | null>(null);

  // Create schedules array from the localized data
  const schedules = [
    {
      id: 1,
      title: t.schedules.gdpr.title.title,
      description: t.schedules.gdpr.description.title,
      frequency: t.schedules.gdpr.frequency.title,
      lastRun: t.schedules.gdpr.lastRun.title,
      nextRun: t.schedules.gdpr.nextRun.title,
      status: "active",
      category: t.schedules.gdpr.category.title,
    },
    {
      id: 2,
      title: t.schedules.employment.title.title,
      description: t.schedules.employment.description.title,
      frequency: t.schedules.employment.frequency.title,
      lastRun: t.schedules.employment.lastRun.title,
      nextRun: t.schedules.employment.nextRun.title,
      status: "active",
      category: t.schedules.employment.category.title,
    },
    {
      id: 3,
      title: t.schedules.tax.title.title,
      description: t.schedules.tax.description.title,
      frequency: t.schedules.tax.frequency.title,
      lastRun: t.schedules.tax.lastRun.title,
      nextRun: t.schedules.tax.nextRun.title,
      status: "paused",
      category: t.schedules.tax.category.title,
    },
  ];

  // Create recent updates array from the localized data
  const recentUpdates = [
    {
      schedule: t.updates.gdprUpdate.schedule.title,
      update: t.updates.gdprUpdate.update.title,
      timestamp: t.updates.gdprUpdate.timestamp.title,
      importance: "high",
    },
    {
      schedule: t.updates.employmentUpdate.schedule.title,
      update: t.updates.employmentUpdate.update.title,
      timestamp: t.updates.employmentUpdate.timestamp.title,
      importance: "medium",
    },
    {
      schedule: t.updates.taxUpdate.schedule.title,
      update: t.updates.taxUpdate.update.title,
      timestamp: t.updates.taxUpdate.timestamp.title,
      importance: "high",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Clock className="mr-2 h-4 w-4" />
            {t.badge.title}
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t.title.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.description.title}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Scheduling Interface */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {t.sections.scheduledTasks.title}
              </h3>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                {t.buttons.newSchedule.title}
              </Button>
            </div>

            <div className="space-y-4">
              {schedules.map((schedule) => (
                <Card
                  key={schedule.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    activeSchedule === schedule.id
                      ? "ring-2 ring-primary/50 bg-primary/5"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveSchedule(
                      activeSchedule === schedule.id ? null : schedule.id
                    )
                  }
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">
                          {schedule.title}
                        </CardTitle>
                        <CardDescription>
                          {schedule.description}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            schedule.status === "active"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {schedule.status === "active"
                            ? t.status.active.title
                            : t.status.paused.title}
                        </Badge>
                        {schedule.status === "active" ? (
                          <Button variant="ghost" size="sm">
                            <Pause className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {schedule.frequency}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        {t.labels.next.title} {schedule.nextRun}
                      </div>
                    </div>

                    {activeSchedule === schedule.id && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>{t.labels.category.title}</strong>{" "}
                            {schedule.category}
                          </p>
                          <p>
                            <strong>{t.labels.lastRun.title}</strong>{" "}
                            {schedule.lastRun}
                          </p>
                          <div className="flex space-x-2 mt-3">
                            <Button variant="outline" size="sm">
                              {t.buttons.editSchedule.title}
                            </Button>
                            <Button variant="outline" size="sm">
                              {t.buttons.viewHistory.title}
                            </Button>
                            <Button variant="outline" size="sm">
                              {t.buttons.runNow.title}
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {t.sections.recentUpdates.title}
              </h3>
              <Button variant="ghost" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                {t.buttons.viewAll.title}
              </Button>
            </div>

            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                          update.importance === "high"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {update.schedule}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {update.timestamp}
                          </span>
                        </div>
                        <p className="text-sm font-medium">{update.update}</p>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              update.importance === "high"
                                ? "destructive"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {update.importance === "high"
                              ? t.labels.highPriority.title
                              : t.labels.mediumPriority.title}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs"
                          >
                            {t.buttons.viewDetails.title}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">{t.stats.title.title}</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats.updatesFound.title}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats.highPriority.title}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">
                      {t.stats.successRate.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t.cta.title.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.cta.description.title}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  {t.buttons.createSchedule.title}
                </Button>
                <Button variant="outline" size="lg">
                  {t.buttons.browseTemplates.title}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SchedulingDemo;
