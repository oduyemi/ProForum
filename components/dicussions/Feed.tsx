"use client";
import { DiscussionCard } from "./Card";
import { DailyDivider } from "./DailyDivider";

export const DiscussionFeed = ({ grouped }: any) => {
  return (
    <div className="space-y-8">
      {grouped.map((group: any) => (
        <div key={group.label}>
          <DailyDivider label={group.label} />

          <div className="space-y-4 mt-4">
            {group.items.map((d: any) => (
              <DiscussionCard key={d.id} {...d} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
